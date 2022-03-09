<template>
  <div class="main">
    <!-- 加载插件 -->
    <hea-Der v-if="!flag"></hea-Der>
    <!-- <div style="">
      <van-dialog v-model="gen" title="选择您的性别" @confirm="genfun">
        <van-radio-group v-model="gender" direction="horizontal">
          <van-radio name="1" style="margin-left: 5rem; margin-top: 1rem"
            >男</van-radio
          >
          <van-radio name="2" style="margin-left: 3rem; margin-top: 1rem"
            >女</van-radio
          >
        </van-radio-group>
      </van-dialog>
    </div> -->

    <van-dialog v-model="show" title="新人福利" show-cancel-button>
      <div @click="go">
        <img
          width="100%"
          src="https://easyreadfs.nosdn.127.net/doZYGq9BeNPKb8tm36aOGA==/8796093024681838377"
        />
      </div>
    </van-dialog>
    <div>
      <!-- 头部组件 -->
      <headara></headara>
      <!-- 书架 -->
      <book-shelf></book-shelf>

      <div class="recommend">
        <div class="xs" @click="show = true">
          <span>全场免费看五天</span>
        </div>
        <!-- 重榜推荐 -->
        <h3>
          <span class="gradient">重磅推荐</span>
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
              <router-link tag="img" to="/reader" :src="item.cover" />
            </a>
            <a href="#" class="info">
              <h4>{{ item.title }}</h4>
              <p>作者:{{ item.author }}</p>
            </a>
          </li>
        </ul>
        <ul class="m-book-list">
          <li
            @click="bookid(item.id)"
            class="m-book-single"
            v-for="item in newArr2"
            :key="item.index"
          >
            <a href="#">
              <img :src="item.cover" />
              <h3>{{ item.title }}</h3>
              <p class="p1">作者:{{ item.author }}</p>
              <p class="p2">简介:{{ item.content }}</p>
              <p class="tag">
                <span>连载</span>
                <span>{{ item.category }}</span>
                <span>{{ item.clickCount }}万字</span>
              </p>
            </a>
          </li>

          <!-- 一个 -->
          <li class="m-book-single">
            <a href="#">
              <img
                src="https://easyreadfs.nosdn.127.net/FarMfGKWqJW64LKRbYhI4A==/8796093025060088072"
                alt=""
              />
              <h3>水浒之梁山太子</h3>
              <p class="p1">挑灯看剑</p>
              <p class="p2">
                特种兵晁云穿越到了水浒世界，附身在晁盖傻儿子身上，刚清醒过来才发现老爹已经前往曾头市送死了，千钧一发！偏偏二叔宋公明不鸟自己，咋办？盘他！赵宋朝廷欺负人，咋办？盘他！靖康之耻，女真入侵，咋办？还是两个字——盘他！两个字，揍他！水泊是我的，梁山是我的，整个大宋都是我的！谁跟我过不去，那就盘他！
              </p>
              <p class="tag">
                <span>连载</span>
                <span>历史</span>
                <span>315.29万字</span>
              </p>
            </a>
          </li>
        </ul>
      </div>

      <!--24小时热销榜  -->
      <div class="ShuangwenLook" v-if="Hotsale">
        <h3>
          <span class="gradient">24小时热销榜</span>

          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in Hotsale.list"
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

      <!-- 精品必读-->
      <div class="ShuangwenLook" v-if="Boutique">
        <h3>
          <span class="gradient">精品必读</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in Boutique.list"
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
              <span v-else>都市</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!--优质好文  -->
      <div class="ShuangwenLook" v-if="Highqualityessay">
        <h3>
          <span class="gradient">优质好文</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in Highqualityessay.list"
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
              <span v-else>都市</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- 人气NO.1-本周爆款来了 -->
      <div class="ShuangwenLook" v-if="Strong">
        <h3>
          <span class="gradient">人气NO.1-本周爆款来了</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in Strong.list"
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
              <span v-else>乡村</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- plot高能剧情 -->
      <div class="ShuangwenLook" v-if="plot">
        <h3>
          <span class="gradient">高能剧情</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in plot.list"
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
              <span v-else>玄幻</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- 大家都在看 -->
      <div class="ShuangwenLook" v-if="evenlook">
        <h3>
          <span class="gradient">大家都爱看</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in evenlook.list"
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
              <span v-else>生活</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>

      <!-- 完结精选 -->
      <div class="ShuangwenLook" v-if="Finishselection">
        <h3>
          <span class="gradient">完本精选</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <li
          @click="bookid(item.id)"
          class="m-book-silie c-fd"
          v-for="item in Finishselection.list"
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
              <span v-else>都市</span>
              <span>501.81万字</span>
            </p>
          </a>
        </li>
      </div>
      <!-- 畅销榜 -->
      <div class="Bestsellerlist" v-if="hotrank">
        <h3>
          <span class="gradient">最新热书榜</span>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="list c-fd">
          <li
            @click="bookid(item.id)"
            class="lr"
            v-for="item in hotrank.list"
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
import bookShelf from "../components/bookshelf.vue"; //书架
// import shuangWen from "../components/Shuangwen.vue"; //都市爽文
import heaDer from "../components/load.vue"; //加载模块
import headara from "../components/header.vue"; //头部
import seaCh from "../components/seach.vue"; //搜索
import {
  // getNavi,
  // getMadr,
  getShow,
  getBookList,
  getMerged,
  getRankList,
  getfl,
} from "../api/yc";
import { getContent } from "../api/base";

export default {
  data() {
    return {
      gender: "",
      gen: true,
      show: false,
      flag: false,
      active: 0,
      lists: null, //书城
      hotrank: null, //最新热书榜
      evenlook: null, ///大家都在看
      Finishselection: null, //完结精选
      Strong: null, //人气爆款
      StrongBook: null, //本周强推
      Boutique: null, //精品必读
      Hotsale: null, //24小时热销
      plot: null, //高能剧情
      Highqualityessay: null, //优质好文
      newArr: [], //存储切割的数组
      newArr1: [],
      newArr2: [],
      type: "recommend&uuid=f2cb32ff209f4010911a77a617add8c4",
      uuid: "f2cb32ff209f4010911a77a617add8c4",
      url: null,
      se: 26,
    };
  },
  components: {
    headara, //头部
    bookShelf, //书架组件
    // shuangWen, //都市爽文
    seaCh, //搜索
    heaDer, //加载
  },
  methods: {

    go() {
      // var url='https://m.yuedu.163.com/gift/index.do?type=0'
      window.location.href = "https://m.yuedu.163.com/gift/index.do?type=0";
    },
    getFl() {
      getfl().then((res) => [console.log(res, "福利")]);
    },
    getRankListFun() {
      getRankList({ rankType: this.se, uuid: this.uuid, all: 0 }).then(
        (data) => {
          console.log("更多", data);
        }
      );
    },
    //排行榜
    getMergedFun() {
      getMerged().then((data) => {
        console.log("", data);
      });
    },

    // getSongUrlFun() {
    //   getNavi({ gender: 1 }).then((data) => {
    //     console.log("书城", data);
    //   });
    // },
    // getMadrFun() {
    //   getMadr().then((data) => {
    //     console.log("广告", data);
    //   });
    // },
    // 书城展示
    getShowFun() {
      getShow().then((data) => {
        console.log("男生展示", data);
        localStorage.setItem("data", data.data);
        localStorage.getItem("data");
        console.log(localStorage.getItem("data"), 11);
        // this.lists = data.data.list;
        // this.url = data.data.list[4].more.url;
        // console.log(this.url);
        this.hotrank = data.data.list[10];
        this.evenlook = data.data.list[9]; //大家都在看
        this.Highqualityessay = data.data.list[8]; //优质好文
        this.Finishselection = data.data.list[7]; //完结精选
        this.Strong = data.data.list[3]; //
        this.Hotsale = data.data.list[4]; //24小时热销
        console.log("24小时,", this.Hotsale);
        this.Boutique = data.data.list[5]; //精品必读
        this.plot = data.data.list[6]; //高能剧情
        this.StrongBook = data.data.list[2].list; //本周强推
        let arrLength = this.StrongBook.length; //数组长度
        let num = 3;
        let index = 0;
        for (let i = 0; i < arrLength; i++) {
          if (i % num === 0 && i !== 0) {
            this.newArr.push(this.StrongBook.slice(index, i));
            index = i;
          }
          if (i + 1 === arrLength) {
            this.newArr.push(this.StrongBook.slice(index, i + 1));
          }
        }
        this.newArr1 = this.newArr[0];
        this.newArr2 = this.newArr[1];
        console.log(this.newArr2);
        // console.log(this.hotrank);
      });
    },
    //书单列表
    getBookListFun() {
      getBookList(this.uuid).then((data) => {
        console.log("书单", data);
      });
    },
    bookid(id) {
      console.log("书籍idid", id);
      this.$store.commit("bookidData", id);
      this.$router.push("/source");
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
    //章节内容
    getContentFun() {
      getContent().then((data) => {
        console.log("章节内容", data);
      });
    },
  },
  created() {
    // this.ifgen();
    // this.getFl();//新手福利
    // this.getSongUrlFun(); //书城导航
    // this.getMadrFun(); //广告
    this.getShowFun(); //书城展示
    // this.getBookListFun();
    // this.getContentFun(); //章节内容
    // this.getMergedFun();
    // this.getRankListFun(); //更多
    this.time();
    // this.bookid();
  },
};
</script>
<style lang="less">
.xs {
  color: white;
  width: 10rem;
  height: 2rem;
  background-color: rgb(205, 50, 84);
  position: fixed;
  bottom: 50px;
  z-index: 999;
  line-height: 2rem;
  text-align: center;
  border-radius: 10px;
}
a {
  color: #333;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.recommend {
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
.ShuangwenLook {
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
.Bestsellerlist {
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
      b:nth-child(1) { background-image: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_01.png?5b202029);
       
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