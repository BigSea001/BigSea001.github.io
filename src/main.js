// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueResource from 'vue-resource'
import VueX from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import echarts from 'echarts'
import VueSimplemde from 'vue-simplemde'
// 配置百度编辑器
import '../static/ueditor1_4_3_3/ueditor.config.js'
import '../static/ueditor1_4_3_3/ueditor.all.min.js'
import '../static/ueditor1_4_3_3/lang/zh-cn/zh-cn.js'
import '../static/ueditor1_4_3_3/ueditor.parse.min.js'

Vue.use(VueX);
Vue.use(vueResource);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueSimplemde);
Vue.prototype.$echarts = echarts;

// 获取存储的数据在计算属性中用this.$store.state.totalPrice;

let store = new VueX.Store({
  state: {
    totalPrice: 0
  },
  // 这是同步操作数据 调用方式是  this.$store.commit('increment',1);
  mutations: {
    increment (state, price) {
      state.totalPrice +=price;
    },
    decrement (state, price) {
      state.totalPrice -= price;
    }
  },
  // 这个是一部操作的 调用方式为 this.$store.dispatch('increase',1);
  actions: {
    increase (context,price) {
      context.commit('increment',price);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

