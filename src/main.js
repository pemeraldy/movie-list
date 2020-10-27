import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import  firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBBdjlc5U050WNaxdy4hNtNkb7HTTN2pm8",
    authDomain: "movie-list-ab996.firebaseapp.com",
    databaseURL: "https://movie-list-ab996.firebaseio.com",
    projectId: "movie-list-ab996",
    storageBucket: "movie-list-ab996.appspot.com",
    messagingSenderId: "1068006773052",
    appId: "1:1068006773052:web:10485ac0d908c68ae14e39"
  };

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
    