
export default {
  name: 'scrap-property',
  data () {
    return {
      propertySearch: '',
      propertyId: '',
      propertyUrl: '',
      property: null,
      showLoader: false
    }
  },
  methods: {
    valiatePropertyId (property_id, message) { 
      if (!(/^\d+$/.test(property_id))) {
        this.$swal(message).then((value) => {
          this.showLoader = false
          this.propertySearch = ''
        });
        return
      }
    },
    generateIdFromUrl () {

      let property_id = this.propertyUrl.split('/')
          property_id = property_id[property_id.length -1].split('?')[0]

      this.valiatePropertyId(property_id, 'Wrong property url...')

      return property_id
    },
    scrap (property_id) {

      this.showLoader = true

      this.$store.dispatch('AirBnb/ScrapSingleProperty', property_id)
      .then(res => {
        this.property = res
        this.showLoader = false
      })
      .catch(err => this.showLoader = false);
    },
    scrapProperty () {
      this.valiatePropertyId(this.propertyId, 'wrong property id...')
      this.scrap(this.propertyId)
    },
    scrapPropertyByUrl () {
      let property_id = this.generateIdFromUrl()
      
      if ((/^\d+$/.test(property_id))) {
        this.scrap(property_id)
      }
    },
    startScrapProperty () {

      if (this.propertySearch == '' || this.propertySearch == null) {
        this.$swal('Please fill the field...')
        return
      }

      if (!(/^\d+$/).test(this.propertySearch)) {
        this.propertyUrl = this.propertySearch
        this.scrapPropertyByUrl()
      } else {
        this.propertyId = this.propertySearch
        this.scrapProperty()
      }
    },
    saveAsJsonFile () {
      let e = document.createElement('a');
          e.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.property), null, 4));
          e.setAttribute('download', `${this.property.id}.json`);
          e.style.display = 'none';
          document.body.appendChild(e);
          e.click();
          document.body.removeChild(e);
    }
  },
  updated () {
    console.log(this.propertyScrapped)
  },
  watch: {
    'propertyScrapped': {
      deep: true,
      handler: state => {
 
      }
    }
  }
}

// http://airbnbapi.com/#get-host-listings
