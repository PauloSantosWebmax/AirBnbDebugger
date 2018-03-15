
import * as types from './mutation-types'
import config from '../../../../config'
import AirBnbService from '@/services/AirBnb'

export default {
  ScrapSingleProperty ({ commit, state }, propertyId) {
    return new Promise((resolve, reject) => {
      AirBnbService.post(config.airbnb.singleScrapUri, { property_id: propertyId })
      .then(res => {
        commit(types.AIRBNB_SET, res.data.listing)
        resolve(res.data.listing)
      })
      .catch(err => {
        commit(types.AIRBNB_ERROR)
        reject('Something went wrong...')
      })
    })
  }
}
