<template>
  <div>
    <!-- 加载插件 -->
    <hea-Der v-if="!flag"></hea-Der>
    <div v-if="flag">
      <!-- 头部组件 -->
      <headara></headara>
      <!-- 精品限时免费 -->
      <div class="m-list-box" v-if="Boutique">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">{{ title1 }}</span>
          </div>
          <div class="m-freecount f-fl J_TimeLeft">
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="m-free-list">
          <router-link
            tag="li"
            to="/reader"
            v-for="item in Boutique.list"
            :key="item.index"
          >
            <a class="f-cb">
              <img :src="item.cover" />
              <h3>{{ item.title }}</h3>
              <p class="p1">
                {{ item.author }} |
                <span>完结</span>
              </p>
              <p class="p2">
                {{ item.content }}
              </p>
              <p>
                <em>{{ item.discountDesc }}</em
                ><del>{{ item.clickCount }}阅点</del>
              </p>
            </a>
          </router-link>
        </ul>
      </div>
      <!-- 好书 -->
      <div class="m-list-box" v-if="Goodbook">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">{{ title2 }}</span>
          </div>
          <!-- 倒计时 -->
          <div class="m-freecount f-fl J_TimeLeft">
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="m-free-list">
          <router-link
            tag="li"
            to="/reader"
            v-for="item in Goodbook.list"
            :key="item.id"
          >
            <a class="f-cb">
              <img :src="item.cover" />
              <h3>{{ item.title }}</h3>
              <p class="p1">
                {{ item.author }}|

                <span>完结</span>
              </p>
              <p class="p2">
                {{ item.content }}
              </p>
              <p>
                <em>免费</em><del>{{ item.clickCount }}阅点</del>
              </p>
            </a>
          </router-link>
        </ul>
      </div>

      <!-- 猜你喜欢 -->
      <div class="m-list-box" v-if="Guessyoulikeit">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">{{ title3 }}</span>
          </div>
          <!-- 倒计时 -->
          <div class="m-freecount f-fl J_TimeLeft">
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <router-link to="/column">
            <a class="more">更多</a>
          </router-link>
        </h3>
        <ul class="m-free-list">
          <router-link
            tag="li"
            to="/reader"
            v-for="item in Guessyoulikeit.list"
            :key="item.id"
          >
            <a class="f-cb">
              <img :src="item.cover" />
              <h3>{{ item.title }}</h3>
              <p class="p1">
                {{ item.author }}|

                <span>完结</span>
              </p>
              <p class="p2">
                {{ item.content }}
              </p>
              <p>
                <em>免费</em><del>{{ item.clickCount }}阅点</del>
              </p>
            </a>
          </router-link>
        </ul>
      </div>

      <!-- 搜索 -->
      <sea-ch></sea-ch>
    </div>
  </div>
</template>
<script>
import { getShowFree } from "../api/free"; //免费导航
import seaCh from "../components/seach.vue"; //搜索
import heaDer from "../components/load.vue"; //加载模块
import headara from "../components/header.vue"; //头部
export default {
  data() {
    return {
      time: null,
      flag: false,
      type: "", //免费导航接口
      Boutique: { list: "" }, //精品免费
      Goodbook: null, //好书专区
      Guessyoulikeit: null, //猜你喜欢
      title1: null, //标题1
      title2: null, //标题2
      title3: null, //标题3
    };
  },
  components: {
    headara, //头部
    seaCh, //搜索
    heaDer, //加载
  },
  methods: {
    times() {
     
      if (this.flag == true) {
        setTimeout(t);
      }
      let t = setTimeout(() => {
        this.flag = true;
        console.log("定时器结束");
      }, 1000);
    },
    //免费书城导航
    getShowFreeFun() {
      this.type = sessionStorage.getItem("mf");
      console.log(this.type);
      if (
        this.type ===
        "/store/show.json?type=female_free&uuid=19ef3f613db44231983a48a570fc0a9a"
      ) {
        getShowFree(this.type).then((data) => {
          console.log("免费", data);
          this.time = data.data.list[0].time_limit;
          this.title1 = "猜你喜欢"; //标题
          this.title2 = data.data.list[1].name;
          this.title3 = data.data.list[2].name;
          this.Boutique.list = data.data.list[0].banners;
          console.log(this.Boutique, 11);
          this.Goodbook = data.data.list[1];
          this.Guessyoulikeit = data.data.list[2];
          // console.log(this.Boutique);
        });
      } else {
        getShowFree(this.type).then((data) => {
          console.log("免费", data);
          this.time = data.data.list[0].time_limit;
          this.title1 = data.data.list[0].name; //标题
          this.title2 = data.data.list[1].name;
          // this.title3 = data.data.list[2].name;
          this.Boutique = data.data.list[0];
          this.Goodbook = data.data.list[1];
          // this.Guessyoulikeit = data.data.list[2];
          // console.log(this.Boutique);
        });
      }
    },
  },
  created() {
    this.times();
    this.getShowFreeFun();
  },
};
</script>
<style lang="less">
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.m-list-box {
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
    .f-fl {
      float: left;
    }
    .m-freecount {
      color: #e64d2e;
      margin-left: 15px;
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
    ::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
  }
  ul {
    margin: 0;
    padding: 0;
    li {
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
          border-radius: 3px;
        }
        h3 {
          font-size: 17px;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #222;
          margin-bottom: 7px;
        }
        p {
          font-size: 12px;
          color: #999;
          em {
            margin-right: 4px;
            font-size: 12px;
            font-weight: normal;
            color: #e64d2e;
          }
        }
        .p1 {
          line-height: 14px;
          height: 14px;
          margin-bottom: 9px;
        }
        .p2 {
          margin-bottom: 14px;
          height: 36px;
          line-height: 18px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      ::after {
        position: absolute;
        top: -3px;
        left: -4px;
        display: inline-block;
        content: "";
        width: 32px;
        height: 20px;
        background: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_free@2x.png?a6822ded)
          0 0 no-repeat;
        background-size: contain;
      }
    }
    li:nth-child(3n) {
      margin-bottom: 0;
    }
  }
}
</style>