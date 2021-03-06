// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
//bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '~/assets/css/style.css'
import '~/assets/css/wp_style.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'ja' }
  //bootstrap
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
}
