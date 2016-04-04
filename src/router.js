import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/pages/Home'
import AboutPage from './components/pages/About'
import PeoplePage from './components/pages/People'
import PersonPage from './components/pages/Person'

Vue.use(VueRouter)
/* eslint-disable no-new */
var router = new VueRouter()

router.map({
  '/': {
    component: HomePage
  },
  '/about': {
    component: AboutPage
  },
  '/people': {
    component: PeoplePage
  },
  '/people/:id': {
    component: PersonPage
  }
})

export default router
