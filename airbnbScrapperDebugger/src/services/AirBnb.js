
import axios from 'axios'
import config from '../../config'

const airbnbService = axios.create({
  baseURL: config.airbnb.baseURL
});

export default airbnbService
