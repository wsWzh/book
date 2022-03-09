import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    textcontent:"", //输入框的文字
    WindowHeight:'',//浏览器可视区域高度
    bookid:'',//书籍id
    cateId:'', //分类id
    sourceUrl:'',
    rankUrl:'',
    uuid:'',
  },
  mutations: {
    // 排行参数
   
    //接受文字
    searchfun(state,index){
      console.log(index);
      state.textcontent = index
    },
    //高度
    saveWindowHeight(state,h){
      state.WindowHeight = h
  },
  //接受书籍id
  bookidData(state,id){
    state.bookid =id
    console.log(555,id);
  },
  cateBook(state,cateId){
    state.cateId = cateId;
  },
  //分类书籍里面链接
  getOriginl(state,sourceUrl){
    state.sourceUrl = sourceUrl
  },
  //排行榜里面书籍url
  ranksData(state,rankUrl){
    state.rankUrl = rankUrl;
    console.log(888,rankUrl);
  },
  getUUid(state,uuid){
    state.uuid = uuid;
    console.log("uuid",uuid);
    
  }
  },
  actions: {
  },
  modules: {
  }
})
