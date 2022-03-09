<template>
  <div>
    <div class="header">
      <h1 class="logo"></h1>
      <div class="right">
        <router-link to="/seach">
          <a class="seach f-il">搜索</a>
        </router-link>
        <router-link to="/userInfo">
          <a class="uesr f-il">账户</a>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <ul class="menu">
        <router-link tag="li" to="/jx">
          <a>精选</a>
        </router-link>

        <router-link tag="li" to="/yc">
          <a>男频</a>
        </router-link>

        <router-link tag="li" to="/ycmm">
          <a>女频</a>
        </router-link>

        <!-- 出版 -->

        <router-link tag="li" to="/book">
          <a>出版</a>
        </router-link>

        <!-- 分类 -->

        <router-link tag="li" to="/category">
          <a>分类</a>
        </router-link>

        <!-- 免费 -->

        <router-link tag="li" to="/free">
          <a>免费</a>
        </router-link>

        <!-- 排行 -->

        <router-link tag="li" to="/rank">
          <a>排行</a>
        </router-link>
        <!-- 听书 -->
        <router-link tag="li" to="/ts">
          <a>听书</a>
        </router-link>
      </ul>
    </keep-alive>
  </div>
</template>
<script>
// import {getHotWords} from "../api/header"
export default {
  data() {
    return {
      HotWords: null, //热门搜索
    };
  },
  watch: {
    num() {
      console.log(this.num);
    },
  },
  methods: {
    // //搜索建议
    // getHotWordsFun(){
    //   getHotWords().then((data)=>{
    //     console.log("搜索建议",data);
    //     this.HotWords = data.list
    //   })
    // },
  },
  created() {
    // this.getHotWordsFun();
  },
};
</script>
<style lang="less">
a {
  color: #333;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.header {
  height: 40px;
  background-color: #fff;
  .logo {
    float: left;
    width: 110px;
    height: 40px;
    margin-left: 20px;
    background: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_logo@2x.png?eeb4dc67)
      center center no-repeat;
    background-size: contain;
  }
  .right {
    float: right;
    .f-il {
      float: left;
    }
    .seach {
      display: block;
      color: #fff;
      width: 22px;
      height: 40px;
      text-indent: -9999px;
      background: center center no-repeat;
      background-repeat: no-repeat;
      background-size: 22px 22px;
      background: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_search_xl.png?0a00dc53)
        center center no-repeat;
      background-size: contain;
      margin-right: 10px;
    }
    .uesr {
      display: block;

      color: #fff;
      width: 22px;
      height: 40px;
      text-indent: -9999px;
      background: center center no-repeat;
      background-repeat: no-repeat;
      background-size: 22px 22px;
      background: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_account.png?8029c3cb)
        center center no-repeat;
      background-size: contain;

      margin: 0 15px 0 5px;
    }
  }
}
.menu {
  position: relative;
  background-color: #fff;
  padding: 0px 15px;
  margin-bottom: 0;
  height: 32px;
  li {
    float: left;
    width: 12.5%;
    height: 32px;
    font-size: 15px;
    text-align: center;
    color: #666;
    a {
      // width: 60px;
      height: 32px;
      line-height: 32px;
      display: block;
      text-align: center;
      margin: 0 auto;
    }
    //  .cat {
    //   position: relative;
    //   background: #fff;
    //   color: #222;
    //   font-size: 17px;
    //   font-weight: bold;
    //   &::after {
    //     position: absolute;
    //     content: "";
    //     width: 12px;
    //     height: 3px;
    //     bottom: -2px;
    //     left: 24px;
    //     background: #e64d2e;
    //     border-radius: 3px;
    //   }
    // }
    &.router-link-active a {
      position: relative;
      background: #fff;
      color: #222;
      font-size: 17px;
      font-weight: bold;
      &::after {
        position: absolute;
        content: "";
        width: 20px;
        height: 3px;
        bottom: -2px;
        left: 10px;
        background: #e64d2e;
        border-radius: 3px;
      }
    }
  }
}
</style>