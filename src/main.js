// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import router from './router'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja',
  messages: {
    ja: {
      hello: 'こんにちは'
    },
    en: {
      hello: 'hello'
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
