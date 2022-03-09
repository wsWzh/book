<template>
  <div class="nr" @scroll="scbook">
    <!-- 分类里面 -->
    <div class="title f-cb">
      <a class="mid">书籍详情</a>

      <div tag="p" @click="go()" class="left">
        <span class="ui-leftaw-2"></span>
      </div>

      <a class="right" href="/">首页</a>
      <a class="left-search"
        ><router-link tag="span" to="/seach" class="ui-search"></router-link
      ></a>
    </div>

    <!-- 选项 -->
    <div class="select-panel" style="top: 0px; display: block">
      <ul>
        <li>
          <span class="select-label">时间：</span>
          <span>
            <a
              :class="['tag', { select: sort == 2 }]"
              @click="clickbook((sort = 2), state, pay,page)"
              >最热</a
            >
            <a
              :class="['tag', { select: sort == 1 }]"
              @click="clickbook((sort = 1), state, pay,page)"
              >最新</a
            >
          </span>
        </li>
        <li>
          <span class="select-label">进度：</span>
          <span>
            <a
              :class="['tag', { select: state == 0 }]"
              @click="clickbook(sort, (state = 0), pay,page)"
              >全部</a
            >
            <a
              :class="['tag', { select: state == 1 }]"
              @click="clickbook(sort, (state = 1), pay,page)"
              >连载中</a
            >
            <a
              :class="['tag', { select: state == 2 }]"
              @click="clickbook(sort, (state = 2), pay,page)"
              >已完结</a
            >
          </span>
        </li>
        <li>
          <span class="select-label">价格：</span>
          <span>
            <a
              :class="['tag', { select: pay == 0 }]"
              @click="clickbook(sort, state, (pay = 0),page)"
              >全部</a
            >
            <a
              :class="['tag', { select: pay == 1 }]"
              @click="clickbook(sort, state, (pay = 1),page)"
              >免费</a
            >
            <a
              :class="['tag', { select: pay == 2 }]"
              @click="clickbook(sort, state, (pay = 2),page)"
              >付费</a
            >
          </span>
        </li>
      </ul>
    </div>

    <!-- 内容 -->
    <div  >
      <hea-Der v-if="!flag"></hea-Der>
      <ul v-if="flag" class="common-bookele"  >
        <li
          class="wrap f-cb"
          v-for="(item,index) in original"
          :key="index"
          @click="getsourceUrl(item.sourceUrl)"
        >
          <img class="img" :src="item.iconUrl" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.author }}</p>
          <p>{{ item.readCount }}阅读 | 已完结</p>
          <span class="abstract" v-html="item.description"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import heaDer from "../components/load.vue"; //加载模块
import { getOriginal } from "../api/category";
export default {
  data() {
    return {
      sort: 2,
      state: 0,
      pay: 0,
      page:1,
      flag: false,
      cateId: "", //id
      original: null, //数据
      sourceUrlInde: 0, //下标
      sourceUrl: "", //链接
      gender: "male",
    };
  },
  components: {
    heaDer, //加载模块
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    time() {
      if (this.flag == true) {
        setTimeout(t);
      }
      let t = setTimeout(() => {
        this.flag = true;
        // console.log("定时器没了");
      }, 1000);
    },
    //分类列表
    getOriginalFun() {
      if (this.$route.query.name == "女生小说") {
        this.gender = "female";
      } else {
        this.gender = "male";
      }

      this.cateId = this.$store.state.cateId;
      // console.log(this.cateId);
      getOriginal({ id: this.cateId, gender: this.gender }).then((data) => {
        // console.log("555", data);
        this.original = data.data.books;
        console.log(this.original,1);

        // console.log(this.original);
        this.sourceUrl = data.data.books[this.sourceUrlInde].sourceUrl;
        // console.log(this.sourceUrl);
      });
    },
    //链接
    getsourceUrl(sourceUrl) {
      console.log(sourceUrl);
      let index=1
      this.$store.commit("getOriginl", sourceUrl);
      this.$router.push({
        path:"/source",
        query:{
          index
        }
        });
    },
    // 点击查询
    clickbook(sort, state, pay,page) {
      // console.log(sort, state, pay,page);
            getOriginal({ id: this.cateId, gender: this.gender,sort:sort,state:state,pay:pay,page:page }).then((data) => {
        // console.log("555", data);
        this.original = data.data.books;
        // console.log(this.original);
        this.sourceUrl = data.data.books[this.sourceUrlInde].sourceUrl;
        // console.log(this.sourceUrl);
      });
    },
    // 滚动到底部触发
    scbook(e){
    
    
      if(e.srcElement.scrollHeight-(e.srcElement.scrollTop+e.srcElement.clientHeight)<1 ||(e.srcElement.scrollTop+e.srcElement.clientHeight)-e.srcElement.scrollHeight>1){
         getOriginal({ id: this.cateId, gender: this.gender,sort:this.sort,state:this.state,pay:this.pay,page:this.page++ }).then((data) => {
        // console.log("555", data);
        console.log(this.original);
        // this.original = data.data.books;
        // console.log(this.original);
        this.original=this.original.concat(data.data.books)
        this.sourceUrl = data.data.books[this.sourceUrlInde].sourceUrl;
        // console.log(this.sourceUrl);
      });
      }
    }
  },
  created() {
    this.time();
    this.getOriginalFun();
  },
};
</script>
<style lang="less">
.nr{
 height: 800px;
  overflow-y:auto;

}
.f-cb,
.f-cbli li {
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
  a.mid {
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
  a.right {
    float: right;
    font-size: 14px;
    padding: 0 15px 0 15px;
    position: relative;
    z-index: 1000;
  }
  a.left-search {
    float: right;
    font-size: 14px;
    position: relative;
    z-index: 1000;
    padding: 0 5px 0 15px;
    .ui-search {
      display: inline-block;
      margin-bottom: 3px;
      text-indent: -9999px;
      vertical-align: middle;
      width: 15px;
      height: 15px;
      background: url(https://yuedust.yuedu.126.net/assets/mobile/images/common/search.png?9b6cd016)
        0 0;
      background-size: 100% 100%;
    }
  }
}

.select-panel {
  // display: none;
  font-size: 14px;
  color: #333;
  background-color: #ebe8e6;
  padding: 10px 15px 9px;
  border-bottom: 1px solid #d1cfcd;
  z-index: 999;
  ul {
    li {
      line-height: 30px;
      height: 31px;
      font-size: 0px;
      .select-label {
        font-size: 14px;
      }
      span {
        .tag {
          display: inline-block;
          font-size: 14px;
          color: #fff;
          height: 19px;
          line-height: 19px;
          padding: 1px 5px;
          background-color: #bab6b3;
          text-align: center;
          border-radius: 4px;
          margin-right: 8px;
        }
        .select {
          background-color: #c9483c;
        }
      }
    }
  }
}
.common-bookele {
 
  position: relative;
  background-color: #faf7f5;
  li.wrap {
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
    }
  }
}
</style>