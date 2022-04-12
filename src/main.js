import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import router from './router'
import Router from 'vue-router-uni'
import store from './store'
import AudioPlayer from '@liripeng/vue-audio-player'
import '@liripeng/vue-audio-player/lib/style.css'


// https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
// $cnpm i vant -S 
// $cnpm i babel-plugin-import -D
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(AudioPlayer)
Vue.config.productionTip = false

// 引入字体图标
import "./assets/font/iconfont.css"

// 安装axios
// $cnpm i axios -S
// 插件 滚动效果
//$cnpm i swiper@3.4.2 -S
import "swiper/dist/css/swiper.min.css"
// import "./assets/font-awesome.min.css"

//加载
import { Loading } from 'vant';

Vue.use(Loading);

//滑块
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
//下拉加载
import { List } from 'vant';

Vue.use(List);

// 提示
import { Toast } from 'vant';

Vue.use(Toast)
Vue.use(Router, {
  module: 'strict',
  tabbar: [
    'pages/hello',
    'pages/my/index'
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
