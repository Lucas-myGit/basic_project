// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'xe-utils'//全局导入方式，所有版本通用
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import XEUtils from 'xe-utils'
import store from './store'
// vue-photo-preview
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

//v-viewer
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)

Vue.config.productionTip = false
Vue.prototype.$utils = XEUtils
Vue.prototype.$cookie = XEUtils.cookie

Vue.use(ElementUI);
Vue.use(VXETable);

Vue.directive('onfocus',{
  inserted:function(el){
    el.focus()
  }
})

/* eslint-disable no-new */
var ssf=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default  ssf

