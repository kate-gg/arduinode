import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
const socket = io('localhost:3001');
Vue.use(VueSocketIOExt, socket);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
