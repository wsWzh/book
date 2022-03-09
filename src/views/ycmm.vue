<template>
  <!-- 女生 -->
  <div>
    <!-- 加载插件 -->
    <hea-Der v-if="!flag"></hea-Der>

    <div v-if="flag">
      <!-- 头部组件 -->
      <headara></headara>
      <!-- 书架 -->
      <book-shelf></book-shelf>
            <!-- 轮播图 -->
      <div class="banner" v-if="Rotationchart">
        <div class="imgs">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item
              v-for="item in Rotationchart.banners"
              :key="item.idnex"
              @click="bookid(item.id)"
            >
              <img :src="item.cover" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="recommendYcmm" v-if="newArr1">
        <!-- 重榜推荐 -->
        <h3>
          <span class="gradient">现代言情</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <!-- 图片 -->
        <ul class="m-book active">
          <li
            v-for="item in newArr1"
            :key="item.index"
            @click="bookid(item.id)"
          >
            <a href="#" class="pic">
              <img :src="item.cover" />
            </a>
            <a href="#" class="info">
              <h4>{{ item.title }}</h4>
              <p>作者:{{ item.author }}</p>
            </a>
          </li>
        </ul>
        <ul class="m-book-list">
          <li
            class="m-book-single"
            v-for="item in newArr2"
            :key="item.index"
            @click="bookid(item.id)"
          >
            <a href="#">
              <img :src="item.cover" />
              <h3>{{ item.title }}</h3>
              <p class="p1">作者:{{ item.author }}</p>
              <p class="p2">
                简介:{{ item.content }}
              </p>
              <p class="tag">
                <span>连载</span>
                <span>{{ item.category }}</span>
                <span>315.29万字</span>
              </p>
            </a>
          </li>
        </ul>
      </div>

      <!-- 小编力荐 -->
      <div class="ShuangwenYcmm" v-if="XiaobianLijian">
        <h3>
          <span class="gradient">小编力荐</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in XiaobianLijian"
          :key="item.id"
        >
          <a href="#" title="青云直上">
            <img :src="item.cover" />
            <h3>{{ item.title }}</h3>
            <p class="p1">作者:{{ item.author }}</p>
            <p class="p2">简介:{{ item.content }}</p>
            <p class="tag">
              <span>完结</span>
              <span v-if="item.category">{{ item.category }}</span>
              <span v-else>现言</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- 连载追更 -->
      <div class="ShuangwenYcmm" v-if="Serialtracking">
        <h3>
          <span class="gradient">连载追更</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in Serialtracking"
          :key="item.id"
        >
          <a href="#" title="青云直上">
            <img :src="item.cover" />
            <h3>{{ item.title }}</h3>
            <p class="p1">作者:{{ item.author }}</p>
            <p class="p2">简介:{{ item.content }}</p>
            <p class="tag">
              <span>完结</span>
              <span>{{ item.category }}</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- popularityList -->
      <!-- 24小时人气榜 -->

      <div class="ShuangwenYcmm" v-if="popularityList">
        <h3>
          <span class="gradient">最新红书</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in popularityList"
          :key="item.id"
        >
          <a href="#" title="青云直上">
            <img :src="item.cover" />
            <h3>{{ item.title }}</h3>
            <p class="p1">作者:{{ item.author }}</p>
            <p class="p2">简介:{{ item.content }}</p>
            <p class="tag">
              <span>完结</span>
              <span>{{ item.category }}</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- Finishreading -->
      <!-- 完本畅读 -->

      <div class="ShuangwenYcmm" v-if="Finishreading">
        <h3>
          <span class="gradient">完本畅读</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
         @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in Finishreading"
          :key="item.id"
        >
          <a href="#" title="青云直上">
            <img :src="item.cover" />
            <h3>{{ item.title }}</h3>
            <p class="p1">作者:{{ item.author }}</p>
            <p class="p2">简介:{{ item.content }}</p>
            <p class="tag">
              <span>完结</span>
              <span>{{ item.category }}</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- 新书独家 -->
      <div class="ShuangwenYcmm" v-if="NewBookexclusive">
        <h3>
          <span class="gradient">完本畅读</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
         @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in NewBookexclusive"
          :key="item.id"
        >
          <a href="#" title="青云直上">
            <img :src="item.cover" />
            <h3>{{ item.title }}</h3>
            <p class="p1">作者:{{ item.author }}</p>
            <p class="p2">简介:{{ item.content }}</p>
            <p class="tag">
              <span>完结</span>
              <span>{{ item.category }}</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- 畅销榜 -->
      <div class="Bestsellerlist" v-if="GirlsFinishlist">
        <h3>
          <span class="gradient">完结榜</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="list c-fd">
          <li
           @click="bookid(item.id)"
            class="lr"
            v-for="item in GirlsFinishlist"
            :key="item.id"
          >
            <b class="rink-1"></b>
            <a href="#" class="pic">
              <img :src="item.cover" />
            </a>
            <a href="#" class="info">
              <h4>{{ item.title }}</h4>
              <p>作者:{{ item.author }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 搜索 -->
      <sea-ch></sea-ch>
    </div>
  </div>
</template>
<script>
import { getShowM, getNaviM, getNode } from "../api/ycmm";
import Swiper from "swiper";
import bookShelf from "../components/bookshelf.vue"; //书架
import seaCh from "../components/seach.vue"; //搜索
import heaDer from "../components/load.vue"; //加载模块
import headara from "../components/header.vue"; //头部
export default {
  data() {
    return {
      flag: false,
      gender: 2,
      uuid: "",
      type: "femail&uuid=017de2274aa5400e9dabe30f173e98d9",
      FemaleData: null, //女生数据
      Modernromance: null, //现代言情
      newArr: [], //存储切割的数组
      newArr1: [],
      newArr2: [],
      Rotationchart: null, //轮播图
      GirlsFinishlist: null, //女生完结榜
      PotentialIP: null, //潜力ip
      NewBookexclusive: null, //新书独家
      Finishreading: null, //完本畅读
      popularityList: null, //24小时人气榜
      Serialtracking: null, //连载追更
      XiaobianLijian: null, //小编力荐
      Ancientromance: null, //古代言情;
    };
  },
  components: {
    bookShelf, //书架组件
    seaCh, //搜索
    heaDer, //加载
    headara, //头部
  },
  methods: {
    time() {
      if (this.flag == true) {
        setTimeout(t);
      }
      let t = setTimeout(() => {
        this.flag = true;
        console.log("定时器结束");
      }, 1000);
    },

    // 书城导航
    getNaviMFun() {
      getNaviM(this.gender).then((data) => {
        console.log("书城导航", data);
        this.uuid = data.data.navi[3].id;
        // this.type = data.data.navi[3].url;
        console.log(this.type);
        console.log(this.uuid);
      });
    },
    // 书城展示模板
    //需要拿到书城导航里面的值传入
    getShowMFun() {
      getShowM(this.type).then((data) => {
        console.log("书城展示模板女生", data);
        this.FemaleData = data.data.list;
        // this.Ancientromance = data.data.list[9].list;
        this.Modernromance = data.data.list[8].list;
        this.GirlsFinishlist = data.data.list[7].list;
        this.PotentialIP = data.data.list[6].list;
        this.NewBookexclusive = data.data.list[5].list;
        this.Finishreading = data.data.list[4].list;
        this.popularityList = data.data.list[3].list;
        this.Serialtracking = data.data.list[2].list;
        this.XiaobianLijian = data.data.list[1].list;
        this.Rotationchart = data.data.list[0];
        //切割数组
        let arrLength = this.Modernromance.length; // 数组长度
        let num = 3; // 每页显示 3 条
        let index = 0;
        for (let i = 0; i < arrLength; i++) {
          if (i % num === 0 && i !== 0) {
            this.newArr.push(this.Modernromance.slice(index, i));
            index = i;
          }
          if (i + 1 === arrLength) {
            this.newArr.push(this.Modernromance.slice(index, i + 1));
          }
        }
        this.newArr1 = this.newArr[0];
        this.newArr2 = this.newArr[1];
        console.log(this.newArr1);
        console.log(this.Modernromance);
        console.log("女生导航", this.FemaleData);
        console.log("新数组", this.newArr);
      });
    },
    //所有频道
    getNodeFun() {
      getNode(this.gender).then((data) => {
        console.log("所有频道", data);
      });
    },
    bookid(id) {
      console.log("书籍idid", id);
      this.$store.commit("bookidData", id);
      this.$router.push("/reader");
    },
  },
  created() {
    this.time();
    this.getShowMFun();
    this.getNaviMFun();
    this.getNodeFun();
  },
  mounted() {
    new Swiper(".swiper-container-01", {
      // pagination: '.swiper-pagination-01',
      slidesPerView: 4, //显示个数
      paginationClickable: true,
      observer: true,
      observeParents: true,
      // spaceBetween: 30 //div之间间距
    });
    new Swiper(".swiper-container-02", {
      pagination: ".swiper-pagination-02",
      slidesPerView: 3,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
    });
  },
};
</script>

<style lang="less">
// 重榜推荐
.recommendYcmm {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  h3 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 16px;
    .gradient {
      display: inline-block;
      font-size: 20px;
      color: #1a1a1a;
    }
    .more {
      float: right;
      padding: 0 17px;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      box-sizing: border-box;
      border: 1px solid #f0f0f0;
      border-radius: 28px;
    }
  }

  .m-book {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    li {
      position: relative;
      float: left;
      width: 28%;
      margin-right: 8%;
      margin-bottom: 20px;
      .pic {
        position: relative;
        display: block;
        padding-bottom: 140%;
        height: 0;
        overflow: hidden;
        box-shadow: 0 5px 7px 0 rgb(0 0 0 / 9%), 0 2px 2px 0 rgb(0 0 0 / 3%);
        border-radius: 4px;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      a {
        color: #333;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        h4 {
          font-size: 15px;
          line-height: 19px;
          height: 38px;
          max-height: 38px;
          margin: 10px 0 5px;
          overflow: hidden;
          color: #222;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
        }
        p {
          color: #888;
          line-height: 15px;
          height: 15px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
  }
  .m-book-list {
    margin-top: 8px;
    li:nth-child(3n) {
      margin-bottom: 0px;
    }
    .m-book-single {
      position: relative;
      margin-bottom: 20px;
      a {
        display: block;
        color: #333;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        img {
          float: left;
          width: 82px;
          height: 115px;
          margin-right: 15px;
          box-shadow: 0 5px 7px 0 rgb(0 0 0 / 9%), 0px 2px 2px 0 rgb(0 0 0 / 3%);
          border-radius: 4px;
        }
        h3 {
          font-weight: normal;
          font-size: 17px;
          color: #222;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          margin-bottom: 7px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          font-size: 12px;
          color: #999;
        }
        .p1 {
          line-height: 14px;
          height: 14px;
          margin-bottom: 9px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .p2 {
          line-height: 18px;
          height: 36px;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tag {
          position: absolute;
          left: 97px;
          bottom: 0;
          white-space: nowrap;
          span {
            display: inline-block;
            margin-right: 2px;
            padding: 0 12px;
            height: 22px;
            line-height: 22px;
            font-size: 10px;
            color: #999;
            background-image: linear-gradient(3deg, #f9f9f9 0, #f0f0f0 100%);
            border-radius: 22px;
          }
        }
      }
    }
  }
  ::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }
}
//轮播图
.banner {
  height: 132px;
  position: relative;
  margin: 10px 0 0;
  .imgs {
    position: relative;
    left: 0px;
    right: 0px;
    top: 0px;
    margin: auto;
    width: 92%;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 126px;
    }
  }
}
.ShuangwenYcmm {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;

  h3 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 16px;
    a {
      color: #333;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .gradient {
      display: inline-block;
      font-size: 20px;
      color: #1a1a1a;
    }
    .more {
      float: right;
      padding: 0 17px;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      box-sizing: border-box;
      border: 1px solid #f0f0f0;
      border-radius: 28px;
    }
  }
  .m-book-silie {
    position: relative;
    margin-bottom: 20px;
    a {
      display: block;

      img {
        float: left;
        width: 82px;
        height: 115px;
        margin-right: 15px;
        box-shadow: 0 5px 7px 0 rgb(0 0 0 / 9%), 0px 2px 2px 0 rgb(0 0 0 / 3%);
        border-radius: 4px;
      }
      h3 {
        font-weight: normal;
        font-size: 17px;
        color: #222;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        margin-bottom: 7px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .p1 {
        line-height: 14px;
        height: 14px;
        margin-bottom: 9px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .p2 {
        line-height: 18px;
        height: 36px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 12px;
        color: #999;
      }
      .tag {
        position: absolute;
        left: 97px;
        bottom: 0;
        white-space: nowrap;
        span {
          display: inline-block;
          margin-right: 2px;
          padding: 0 12px;
          height: 22px;
          line-height: 22px;
          font-size: 10px;
          color: #999;
          background-image: linear-gradient(3deg, #f9f9f9 0, #f0f0f0 100%);
          border-radius: 22px;
        }
      }
    }
  }
  .m-book-silie:nth-child(4) {
    margin-bottom: 0px;
  }
  .c-fd {
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
// 完结榜
.BestsellerlistYcmm {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  border-bottom: none;
  padding-bottom: 5px;
  ::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }
  h3 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 16px;
    .gradient {
      display: inline-block;
      font-size: 20px;
      color: #1a1a1a;
    }
    .more {
      float: right;
      padding: 0 17px;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      box-sizing: border-box;
      border: 1px solid #f0f0f0;
      border-radius: 28px;
    }
  }
  .list {
    width: 100%;
    transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    li {
      position: relative;
      float: left;
      width: 28%;
      margin-right: 8%;
      margin-bottom: 20px;
      b {
        position: absolute;
        top: -12px;
        left: 0;
        right: 0;
        width: 100%;
        height: 22px;
        background: 0 0 no-repeat;
        background-size: 100% auto;
        z-index: 9;
      }
      .pic {
        position: relative;
        display: block;
        padding-bottom: 140%;
        height: 0;
        overflow: hidden;
        box-shadow: 0 5px 7px 0 rgb(0 0 0 / 9%), 0 2px 2px 0 rgb(0 0 0 / 3%);
        border-radius: 4px;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      .info {
        color: #333;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        h4 {
          font-size: 15px;
          line-height: 19px;
          height: 38px;
          max-height: 38px;
          margin: 10px 0 5px;
          overflow: hidden;
          color: #222;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p {
          color: #888;
          line-height: 15px;
          height: 15px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .lr {
      margin-bottom: 0;
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
    li:nth-child(1) {
      b:nth-child(1) {
        background-image: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_01.png?5b202029);
      }
    }
    li:nth-child(2) {
      b:nth-child(1) {
        background-image: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_02.png?5c6f851f);
      }
    }
    li:nth-child(3) {
      b:nth-child(1) {
        background-image: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_03.png?96ad2cc6);
      }
    }
  }
  ul {
    ::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
    li {
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
.ShuangwenYcmm {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;

  h3 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 16px;
    a {
      color: #333;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .gradient {
      display: inline-block;
      font-size: 20px;
      color: #1a1a1a;
    }
    .more {
      float: right;
      padding: 0 17px;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      box-sizing: border-box;
      border: 1px solid #f0f0f0;
      border-radius: 28px;
    }
  }
  .m-book-silie {
    position: relative;
    margin-bottom: 20px;
    a {
      display: block;

      img {
        float: left;
        width: 82px;
        height: 115px;
        margin-right: 15px;
        box-shadow: 0 5px 7px 0 rgb(0 0 0 / 9%), 0px 2px 2px 0 rgb(0 0 0 / 3%);
        border-radius: 4px;
      }
      h3 {
        font-weight: normal;
        font-size: 17px;
        color: #222;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        margin-bottom: 7px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .p1 {
        line-height: 14px;
        height: 14px;
        margin-bottom: 9px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .p2 {
        line-height: 18px;
        height: 36px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 12px;
        color: #999;
      }
      .tag {
        position: absolute;
        left: 97px;
        bottom: 0;
        white-space: nowrap;
        span {
          display: inline-block;
          margin-right: 2px;
          padding: 0 12px;
          height: 22px;
          line-height: 22px;
          font-size: 10px;
          color: #999;
          background-image: linear-gradient(3deg, #f9f9f9 0, #f0f0f0 100%);
          border-radius: 22px;
        }
      }
    }
  }
  .m-book-silie:nth-child(4) {
    margin-bottom: 0px;
  }
  .c-fd {
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
</style>