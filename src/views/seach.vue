<template>
  <div class="seach">
    <div class="title f-cb">
      <section class="m-search-book">
        <a class="left" @click="cd"><span class="ui-leftaw-2"></span></a>
        <div class="search-input">
          <div class="seach-box">
            <div class="inner f-cb f-fl">
              <button @click="getSearchbookFun">搜索</button>
              <input
                type="search"
                id="search-input"
                name="key"
                autocomplete="off"
                placeholder="请输入关键字"
                v-model="keyword"
                @blur="getSearchHintFun"
               
              />
              <input type="hidden" name="type" value="detail" />
              <input type="hidden" value="赘婿出山" id="J_defaultHint" />
            </div>
            <a href="/" class="f-fl home">首页</a>
          </div>
        </div>
        <ul id="J_SearchOps" style="display: none"></ul>
      </section>
    </div>
    <!-- 搜索容器 -->
    <section class="m-search-key" id="J_content" v-if="!keyword">
      <dl class="m-hotkey">
        <dt>大家都在搜</dt>
        <dd>
          <a v-for="item in HotWords" :key="item.index" @click="kewo"
            ><em></em>{{ item.name }}</a
          >
        </dd>
      </dl>
      <dl class="m-historykey">
        <dt>最近搜索<span class="clear" id="clearHistory"></span></dt>
        <dd id="searchHistory">
          <a @click="kewo">无所畏</a><a>失踪的总统</a><a>清明上河图密码5</a>
        </dd>
      </dl>
    </section>

    <!-- 搜索后出现内容盒子 -->

    <div class="m-search-key" v-else>
      <div
        style="padding-top: 5px"
        :finished="done"
        finished-text="还没看够？到底了"
        @load="onLoadFn"
        :immediate-check="false"
        offset="100"
      >
        <!-- 加载插件 -->

        <div 
        @click="bookid(item.id)"
         class="search-book" v-for="item in words" :key="item.index">
          <a class="wrap f-cd">
            <img :src="item.cover" class="img" />
            <h3>{{ item.text }}</h3>
            <p>{{ item.author }} | 都市</p>
            <p>1.8万人阅读 | 连载中</p>
            <span class="abstract">{{ item.d }}</span>
          </a>
        </div>
        <div class="m-search-key" v-if="!words">
          <!-- 照片 -->
          <div class="m-empty j-empty-show" style=""></div>
          <p class="m-empty-txt j-empty-show" style="">
            没有找到相关的内容，换个关键字试试
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import { getHotWords, getSearchHint, } from "../api/header";
import heaDer from "../components/load.vue"; //加载模块
export default {
  data() {
    return {
      data: null, //数据
      HotWords: null, //热门搜索
      keyword: "", //搜索关键词
      loading: false, //控制每一页的加载状态
      done: false, //控制整个页面的加载状态
      books: null, //搜索列表数据
      words: null, //搜索建议数据
      flag: false,
    };
  },

  
  
  methods: {
    cd(){
      this.$router.push('/jx')
    },
    //热门搜索

    //搜索建议
    getSearchHintFun() {
      
      getSearchHint(this.keyword).then((data) => {
        console.log("搜索建议", data);
        this.words = data.words.w;
        // console.log("搜索建议",this.words);
        
      });
    },
    // //搜索结果列表
    getSearchbookFun() {
      getSearchbook(this.keyword).then((data) => {
        console.log("结果列表", data);
        this.books = data.data.books;
        console.log(this.books);
      });
    },

    // 上拉加载更多的方法
    onLoadFn() {
      // 调接口->拿数据->合并
      page++;
      getSearchbook(this.keyword).then((data) => {
        // 当数据库中没有数据之后停止
        console.log("123", data);
        // if (data.result.songs === 0) {
        //   this.done = true;
        //   return;
        // }
        // 合并数组
        // this.searchList = [...this.searchList, ...data.result.songs];
        // 模拟数据没有之后的文字
        // if (this.searchList.length >= 100) {
        //     this.done = true;
        //     return;
        // }
        // (文档要求)数据更新完毕后，将 loading 设置成 false 即可
        // this.loading = false; //可以继续请求下一页数据（需要手动更改为false）
      });
    },
    kewo(e) {
      this.keyword = e.target.textContent;
      this.kewsd = this.keyword;

      console.log(this.kewsd);
      //调用搜索热词方法
      this.getSearchHintFun();
    },
    //定时器
    time() {
      if (this.flag == true) {
        setTimeout(t);
      }

      let t = setTimeout(() => {
        this.flag = true;
        console.log("定时器结束");
      }, 200);
    },
     bookid(id){
      console.log("书籍idid",id);
      this.$store.commit('bookidData',id)
      this.$router.push("/reader")
    },
  },
  created() {
    this.keyword = this.$store.state.textcontent
      console.log(this.keyword);
    //热词方法
    getHotWords()
      .then((data) => {
        console.log("搜索热词",data);
        this.HotWords = data.list;
      })
      .catch((e) => {
        console.log("e", e);
      });
    //调用搜索热词方法
    this.getSearchHintFun();
    this.time();
  },
  components: {
    heaDer, //加载
  },
};
</script>
<style lang="less">
.seach {
  background-color: #fff;
  height: 100%;
  .title {
    position: relative;
    height: 44px;
    line-height: 44px;
    background-color: #e64d2e;
    a {
      color: #fff;
      display: block;
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
    .left {
      float: left;
      font-size: 14px;
      position: relative;
      z-index: 1000;
    }
    .search-input {
      margin-left: 40px;
      padding: 8px 15px 8px 0;
      height: 28px;
      min-width: 256px;
      .seach-box {
        .f-fl {
          float: left;
        }
        .inner {
          position: relative;
          width: 85%;
          button {
            width: 51px;
            height: 28px;
            border: none;
            vertical-align: middle;
            background: url(https://yuedust.yuedu.126.net/assets/mobile/images/search/search.png?2083f1a1)
              center center no-repeat;
            background-size: contain;
            text-indent: -9999px;
            position: absolute;
            top: 0;
            right: 0;
            font-size: 12px;
            line-height: 1.14;
            color: #333;
            outline: 0;
          }
          input {
            border: none;
            height: 28px;
            line-height: 28px;
            font-size: 12px;
            vertical-align: middle;
            float: left;
            box-sizing: border-box;
            color: #6c6358;
            background: #fff;
            border-radius: 14px;
            width: 100%;
            padding: 0 51px 0 15px;
          }
        }
        .home {
          width: 15%;
          height: 28px;
          line-height: 28px;
          color: #fff;
          font-size: 15px;
          padding: 0;
          text-align: right;
        }
      }
    }
    .f-cd {
      ::after {
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        overflow: hidden;
        content: ".";
      }
    }
  }
}
.m-search-key {
  background: #fff;
  dt {
    font-size: 14px;
    text-indent: 2px;
    color: #aaa;
    line-height: 38px;
    background: #f5f5f5;
    color: #807a73;
    padding: 0 15px;
  }
  dd {
    padding: 15px;
    font-size: 0;
    a {
      background: #fff;
      font-size: 14px;
      padding: 0 10px;
      line-height: 28px;
      height: 28px;
      margin-right: 15px;
      margin-bottom: 15px;
      display: inline-block;
      color: #aba59a;
      border: 1px solid #c8c8c8;
      border-radius: 4px;
      position: relative;
      em {
        width: 26px;
        height: 11px;
        display: block;
        position: absolute;
        top: -5px;
        left: 4px;
      }
    }
  }
  .m-empty {
    width: 84px;
    height: 96px;
    margin: 20px auto;
    transform: translate(5px, 0);
    -webkit-transform: translate(5px, 0);
    background: url(https://yuedust.yuedu.126.net/assets/mobile/images/empty.png?d136205c)
      0 0;
    background-size: 100% 100%;
  }
  .m-empty-txt {
    margin: 0 33px 10px;
    text-align: center;
    font-size: 15px;
    line-height: 18px;
    color: #ccc;
  }
}
.search-book {
  position: relative;
  background-color: #fff;
  .wrap {
    position: relative;
    display: block;
    padding: 10px 15px;
    .img {
      width: 75px;
      height: 105px;
      float: left;
      margin: 0 20px 0 0;
    }
    h3 {
      font-size: 16px;
      line-height: 18px;
      height: 18px;
      overflow: hidden;
      word-break: break-all;
      font-weight: normal;
      color: #6c6358;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-bottom: 6px;
    }
    p {
      color: #aba59a;
      line-height: 16px;
      height: 16px;
      overflow: hidden;
      font-size: 12px;
      margin-bottom: 5px;
    }
    .abstract {
      padding-top: 4px;
      height: 38px;
      line-height: 19px;
      color: #807a73;
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