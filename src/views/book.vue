<template>
  <!-- 出版 -->
  <div>
    <hea-Der v-if="!flag"></hea-Der>

    <div v-if="flag">
      <!-- 头部组件 -->
      <headara></headara>
      <!-- 轮播图 -->

      <!-- 书架 -->
      <book-shelf></book-shelf>
      <!-- 主编推荐 -->
      <div class="m-list-boxbook" v-if="Bytheeditor">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">主编推荐</span>
          </div>
           <router-link to="/column">
           <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="m-book-list f-cb">
          <li
           @click="bookid(item.id)"
            class="lr"
            v-for="item in Bytheeditor.list"
            :key="item.index"
          >
            <a class="pic"> <img :src="item.cover" /></a>
            <a class="info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.author }}</p>
            </a>
          </li>

          <li class="ll lr">
            <a
              href="/reader/book/ea2b13797a7742d4a86571dcbc532f84_4"
              data-log="wc2-1:category=public,eventId=click,bookId=ea2b13797a7742d4a86571dcbc532f84_4"
              class="pic"
            >
              <img
                src="https://easyreadfs.nosdn.127.net/MhKWF8Nuu54ERRGCY_aA1g==/8796093024891277228?imageView&amp;thumbnail=240y336"
                srcset="
                  https://easyreadfs.nosdn.127.net/MhKWF8Nuu54ERRGCY_aA1g==/8796093024891277228?imageView&amp;thumbnail=240y336 2x,
                  https://easyreadfs.nosdn.127.net/MhKWF8Nuu54ERRGCY_aA1g==/8796093024891277228?imageView&amp;thumbnail=360y504 3x
                "
            /></a>
            <a
              href="/reader/book/ea2b13797a7742d4a86571dcbc532f84_4"
              data-log="wc2-1:category=public,eventId=click,bookId=ea2b13797a7742d4a86571dcbc532f84_4"
              class="info"
            >
              <h4>白先勇细说红楼梦</h4>
              <p>白先勇</p>
            </a>
          </li>
        </ul>
      </div>

      <!-- 新书上线 -->
      <div class="m-list-boxbook" v-if="newBooklist">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">新书上线</span>
          </div>
          <router-link to="/column">
           <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="m-book-list f-cb">
          <li
           @click="bookid(item.id)"
            class="lr"
            v-for="item in newBooklist.list"
            :key="item.index"
          >
            <a class="pic"> <img :src="item.cover" /></a>
            <a class="info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.author }}</p>
            </a>
          </li>

          <li class="ll lr">
            <a
              href="/reader/book/ea2b13797a7742d4a86571dcbc532f84_4"
              data-log="wc2-1:category=public,eventId=click,bookId=ea2b13797a7742d4a86571dcbc532f84_4"
              class="pic"
            >
              <img
                src="https://easyreadfs.nosdn.127.net/MhKWF8Nuu54ERRGCY_aA1g==/8796093024891277228?imageView&amp;thumbnail=240y336"
                srcset="
                  https://easyreadfs.nosdn.127.net/MhKWF8Nuu54ERRGCY_aA1g==/8796093024891277228?imageView&amp;thumbnail=240y336 2x,
                  https://easyreadfs.nosdn.127.net/MhKWF8Nuu54ERRGCY_aA1g==/8796093024891277228?imageView&amp;thumbnail=360y504 3x
                "
            /></a>
            <a
              href="/reader/book/ea2b13797a7742d4a86571dcbc532f84_4"
              data-log="wc2-1:category=public,eventId=click,bookId=ea2b13797a7742d4a86571dcbc532f84_4"
              class="info"
            >
              <h4>白先勇细说红楼梦</h4>
              <p>白先勇</p>
            </a>
          </li>
        </ul>
      </div>

      <!-- "本周人气榜单" -->
      <div class="BestsellerlistBook" v-if="Listbook">
        <h3>
          <span class="gradient">本周人气榜单</span>
           <router-link to="/column">
           <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="list c-fd">
          <li
           @click="bookid(item.id)"
            class="lr"
            v-for="item in Listbook.list"
            :key="item.id"
          >
            <b class="rink-1"></b>
            <a href="#" class="pic">
              <img :src="item.cover" />
            </a>
            <a href="#" class="info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.author }}</p>
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
import bookShelf from "../components/bookshelf.vue"; //书架

import seaCh from "../components/seach.vue"; //搜索
import heaDer from "../components/load.vue"; //加载模块
import headara from "../components/header.vue"; //头部

import { getShowBook } from "../api/book";
export default {
  data() {
    return {
      flag: false,
      type: "publish&uuid=b5648dd3c4f24d9796f590cd81ca076e",
      Bytheeditor: null, //主编推荐
      newBooklist: null, //新书速递
      Listbook: null, //今日榜单
    };
  },
  components: {
    bookShelf, //书架组件
    headara, //头部
    seaCh, //搜索
    heaDer, //加载
  },
  methods: {
    time() {
      if (this.flag == true) {
        setTimeout(t);
      }
      let t = setTimeout(() => {
        this.flag = true;
        console.log("定时器结束");
      }, 200);
    },
    getShowBookFun() {
      getShowBook(this.type).then((data) => {
        console.log("出版", data);
        this.Bytheeditor = data.data.list[2]; //主编推荐
        this.Listbook = data.data.list[3]; //榜单
        this.newBooklist = data.data.list[4]; //新书速递
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
    this.getShowBookFun(); //出版导航
  },
};
</script>
<style lang="less">
.m-list-boxbook {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  h3 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 16px;
    .f-fl {
      float: left;
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
  .f-cb {
    &::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
  }
  .m-book-list {
    width: 100%;
    transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    .lr {
      margin-bottom: 0;
    }
    li {
      position: relative;
      float: left;
      width: 28%;
      margin-right: 8%;
      margin-bottom: 20px;
      a.pic {
        position: relative;
        display: block;
        padding-bottom: 140%;
        height: 0;
        overflow: hidden;
        box-shadow: 0px 5px 7px 0px rgb(0 0 0 / 9%),
          0px 2px 2px 0px rgb(0 0 0 / 3%);
        border-radius: 4px;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      a.info {
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
    li:nth-child(3n) {
      margin-right: 0;
    }
  }
}
.BestsellerlistBook {
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
</style>