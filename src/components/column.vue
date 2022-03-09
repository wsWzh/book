<template>
  <!-- 更多里面 -->
  <div>
    <!-- 头部 -->
    <div class="title f-cb">
      <a class="mid" href="javascript:;">男生</a>
      <!-- href="https://m.yuedu.163.com/ycmm" -->
        <a class="left" @click="$router.go(-1)"><span class="ui-leftaw-2"></span></a>
      <a class="right" href="/">首页</a>
    </div>

    <div class="conter">
      <div class="common-bookele" v-for="item in more" :key="item.index">
        <a class="wrap f-cb">
          <img
            class="img"
           :src="item.cover"
            alt=""
          />
          <h3 style="line-height: 26px; height: 32px">{{item.title}}</h3>
          <p>{{item.author}}/{{item.category}}</p>
          <span class="abstract"
            ><p>
            {{item.content}}
            </p></span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import {getRankList} from "../api/yc";
export default {
  data(){
    return{
      se:26,
       uuid: "f2cb32ff209f4010911a77a617add8c4",
       more:null,

    }
  },
  methods:{
     getRankListFun() {
      getRankList({rankType	:this.se,uuid:this.uuid,all:0}).then((data) => {
        console.log("更多",data);
        this.more = data.list;
        console.log(this.more);
      });
    },
  },
  created(){
    this.getRankListFun()

  }
  
}
</script>
<style lang="less">
.f-cd {
  &::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }
}
.title {
  position: relative;
  height: 44px;
  line-height: 44px;
  background-color: #e64d2e;
  a {
    color: #fff;
  }
  .mid {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 18px;
    z-index: 999;
  }
  .left {
    float: left;
    font-size: 14px;
    position: relative;
    z-index: 1000;
    .ui-leftaw-2 {
      display: inline-block;
      margin-bottom: 3px;
      margin-left: 15px;
      margin-right: 15px;
      text-indent: -9999px;
      vertical-align: middle;
      width: 10px;
      height: 18px;
      background: url(https://yuedust.yuedu.126.net/assets/mobile/images/common/arrow-left.png?62b78c05)
        0 0;
      background-size: 100% 100%;
    }
  }
  .right {
    float: right;
    font-size: 14px;
    padding: 0 15px 0 15px;
    position: relative;
    z-index: 1000;
  }
}
.conter {
  .common-bookele {
    position: relative;
    background-color: #faf7f5;

    .wrap {
      position: relative;
      display: block;
      padding: 15px 15px 15px 0;
      margin-left: 15px;
      border-bottom: #dcdcdc solid 1px;
      .img {
        width: 64px;
        height: 88px;
        float: left;
        margin: 0 10px 0 0;
      }
      h3 {
        font-size: 16px;
        line-height: 18px;
        height: 18px;
        overflow: hidden;
        word-break: break-all;
        font-weight: normal;
        color: #1d2c33;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-bottom: 2px;
      }
      p {
        color: #aaa;
        line-height: 16px;
        height: 16px;
        overflow: hidden;
        font-size: 12px;
      }
      span.abstract {
        padding-top: 4px;
        height: 32px;
        line-height: 16px;
        color: #aaa;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        p {
          height: auto;
          font-size: 14px;
        }
      }
    }
  }
}
</style>