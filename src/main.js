import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import firbaseServices from './firebase'

Vue.config.productionTip = false
let app 
firbaseServices.auth.onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

    