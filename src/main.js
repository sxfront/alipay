import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 设置rem
window.onresize = function(){
 +function(b) {
	document.documentElement.style.fontSize = `${document.body.clientWidth / b}px`;
 }(7.5);
}
window.onresize();

