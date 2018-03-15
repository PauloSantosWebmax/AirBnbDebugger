
import Vue from 'vue'
import Router from 'vue-router'
import scrapper from './routes/scrapper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...scrapper
  ]
})
