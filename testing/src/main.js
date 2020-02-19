import Vue from 'vue'
import VueRouter from 'vue-router';
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'
import Login from './components/Login.vue'
import forgotPassword from './components/forgotPassword.vue'
import Index from './components/Index.vue'
// Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes=[
  {path:'/',component: Login},
  {path:'/forgotPassword',component: forgotPassword},
  {path:'/Index',component: Index}
];
const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
