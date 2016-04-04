import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import router from './router'
import App from './App'

sync(store, router)

router.start(App, '#app')
