
'use strict'

const axios = require('axios')

module.exports = {

    scrapSingleProperty: (req, res) => {

        const propertyId = req.body.property_id,
              client_id = '3092nxybyb0otqw18e8nh5nty',
              format = 'v1_legacy_for_p3',
              endpoint = `https://api.airbnb.com/v2/listings/${propertyId}?client_id=${client_id}&_format=${format}`

        if (typeof propertyId == undefined || propertyId == '' || propertyId == null) {
          res.status(500)
             .send({
                status: 500,
                message: 'Missing property_id in request...'
              })
        }

        axios.get(endpoint)
        .then(result => {
            let property = result.data
            res.json(property)
        })
        .catch(err => res.json(err))
    }

}
