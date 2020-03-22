import Vue from 'vue'
import App from './layouts/App.vue'
import './assets/css/base.css'
import './assets/js/font.js'
import router from './plugins/router.js'
// import './plugins/axios'
import server from './config/server.js';
// import './plugins/axios'

Vue.prototype.$baseUrl = server.baseUrl;
Vue.config.productionTip = false

let vm = new Vue({
	data:{
	    bNav:false,
	    bFoot:false,
	    bLoading:false,
	  },
	render: h => h(App),
	router
}).$mount('#app')

export default vm
