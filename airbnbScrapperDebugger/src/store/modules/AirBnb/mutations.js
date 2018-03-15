
import * as types from './mutation-types'
import StoreStatus from '@/store/status'
import { InitialState } from './initial-state'

export default {
  [types.AIRBNB_LOADING] (state) {
    state.status = StoreStatus.loading
  },
  [types.AIRBNB_SET] (state, propertyScrapped) {
    state.propertyScrapped = propertyScrapped
    state.status = StoreStatus.ready
  },
  [types.AIRBNB_RESET] (state) {
    state.status = InitialState
  },
  [types.AIRBNB_ERROR] (state) {
    state.status = StoreStatus.error
  }
}
