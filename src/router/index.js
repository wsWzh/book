import Vue from 'vue'
import VueRouter from 'vue-router'
import yc from '../views/yc.vue'

Vue.use(VueRouter)

const routes = [
  // 书架
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: () => import("../views/bookcity.vue")
  },
  // 书城
  {
    path: '/bookcity',
    name: 'bookcity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bookcity" */ '../views/bookcity.vue')
  },
  //分类
  {
    path: '/classification',
    name: 'classification',
    component: () => import('../views/classification.vue')
  }, {
    path: '/my',
    name: 'my',
    component: () => import('../views/my.vue')

  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/home.vue"),

  },
  
  //男生
  {
    path: '/',
    redirect: '/jx'  //重定向
  },
  //精选
  {
    path: '/jx',
    name:'jx',
    component: ()=>import("../views/jx.vue"),
  },
  //听书
  {
    path: '/ts',
    name:'ts',
    component: ()=>import("../views/ts.vue"),
  },
  // 听书详情
  {
    path: '/tsxq',
    name:'tsxq',
    component: ()=>import("../views/tsxq.vue"),
  },
  // 种田
  {
    path: '/nvzt',
    name:'nvzt',
    component: ()=>import("../views/nvzt.vue"),
  },
  // 女生完本
  {
    path: '/nvwb',
    name:'nvwb',
    component: ()=>import("../components/nvwb.vue"),
  },
  // 外部链接
  {
    path: '/wl',
    name:'wl',
    component: ()=>import("../components/wl.vue"),
  },
  //导航
  {
    path: '/dh',
    name:'dh',
    component: ()=>import("../views/dh.vue"),
  },
  {
    path: '/yc',
    name: 'yc',
    component: yc,
  },
  //女生
  {
    path: '/ycmm',
    name: 'ycmm',
    component: () => import("../views/ycmm.vue")

  },
  //出版
  {
    path: '/book',
    name: 'book',
    component: () => import("../views/book.vue")

  },
  //分类
  {
    path: '/category',
    name: 'category',
    component: () => import("../views/category.vue")
  },
  //免费
  {
    path: '/free',
    name: 'free',
    component: () => import("../views/free.vue")
  },
  //排行
  {
    path: '/rank',
    name: 'rank',
    component: () => import("../views/rank.vue")
  },
  //搜索
  {
    path: '/seach',
    name: 'seach',
    component: () => import("../views/seach.vue")

  },
  //用户界面
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import("../views/userInfo.vue"),
    beforeEnter: (to, form, next) => {
      console.log("路由守卫执行")
      let login = window.localStorage.getItem("token");
      console.log("login",login);
      //判断有没有值
      if (!login) {
        next("/login");
        return;
      } else {
        next();
      }
    }

  },
  //登录页面
  {
    path: '/login',
    name: 'login',
    component: () => import("../components/login.vue")
  },
  // 更多里面
  {
    path: '/column',
    name: 'column',
    component: () => import("../components/column.vue")
  },
  // 书架
  {
    path: '/reado',
    name: 'reado',
    component: () => import("../components/reado.vue")
  },
  //书籍详情
  {
    path:'/source',
    name:'source',
    component:()=> import("../components/source.vue")
  },
  //小说
  {
    path:'/reader',
    name:'reader',
    component:()=> import("../components/reader.vue")
  },
  //目录
  {
    path:'/catalogue',
    name:'catalogue',
    component:() => import ("../components/catalogue.vue")
  },
  //分类里面
  {
    path:'/original',
    name: 'original',
    component:()=> import ("../components/original.vue")

  },
  //充值
  {
    path:'/recharge',
    name:'recharge',
    component:() => import ("../components/recharge.vue")
  },
  //排行榜里面
  {
    path:'/sell',
    name:'sell',
    component:()=> import ("../components/sell.vue")
  },
  {
    path:'/female',
    name:'female',
    component:()=> import ("../components/female.vue")
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
