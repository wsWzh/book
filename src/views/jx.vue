<template>
  <div class="main">
    <hea-der v-show="!show"></hea-der>
    <headara></headara>
    <div style="">
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
    </div>
    <book-shelf></book-shelf>
    <seaCh></seaCh>
    <div v-show="show">
      <!-- 轮播 -->
      <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            v-for="item in img"
            :key="item.id"
            @click="bookid(item.id, item.url)"
            ><img width="100%" :src="item.cover" alt=""
          /></van-swipe-item>
        </van-swipe>
      </div>
      <van-divider />
      <!-- 导航 -->
      <div>
        <van-row gutter="30">
          <van-col
            style="text-align: center"
            v-for="(item, index) in dh"
            :key="item.name"
            @click="godh(item.url, item.name, index + 1)"
            ><img width="50px" :src="item.cover" alt="" /><span
              style="font-size: 13px"
              >{{ item.name }}</span
            ></van-col
          >
        </van-row>
      </div>
      <van-divider />
      <!-- 强推 -->
      <div class="qt">
        <div class="qt1">
          <div class="h1">本周强推</div>
          <img
            @click="bookid(qtid)"
            style="margin-left: 6px"
            width="80"
            src="https://easyreadfs.nosdn.127.net/wiHQ5Sh8jUuGB7wX9EYVtA==/8796093025118810736"
            alt="本周强推"
          />
          <h5>世界首富之我是股神</h5>
          <span class="s1">冷夜 / 都市</span>
          <div class="conten">
            前世蹉跎四十年,上天给了李晋重活一次的机会,站在2000年的拐点上李晋发誓:改写未来走上人生巅峰!
          </div>
        </div>

        <van-row style="text-align: center">
          <van-col
            span="6"
            v-for="item in qt"
            :key="item.id"
            @click="bookid(item.id)"
            ><img
              style="padding-left: 10px"
              width="75"
              height="100"
              :src="item.cover"
              alt=""
            />
            <span style="font-size: 13px">{{ item.title }} </span>
            <div style="font-size: 12px">{{ item.author }}</div>
          </van-col>
        </van-row>
      </div>
      <van-divider />
      <!-- 人气NO.1-本周爆款来了 -->
      <div class="qt">
        <div class="h1">人气NO.1-本周爆款来了</div>
        <div
          class="rq"
          v-for="item in rq"
          :key="item.id"
          @click="bookid(item.id)"
        >
          <img
            style="margin-left: 6px"
            width="80"
            :src="item.cover"
            alt="本周强推"
          />
          <div class="rq1">
            <div class="rqtitle">{{ item.title }}</div>
            <span style="font-size: 13px"
              >{{ item.author }}/{{ item.category }}</span
            >
            <div class="conten1">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <van-divider />

      <!--24小时热榜  -->
      <div class="rb">
        <div class="h1">24小时热榜</div>
        <van-row class="row" style="text-align: center">
          <van-col
            span="8"
            v-for="(item, index) in rb"
            :key="index"
            @click="bookid(item.id)"
          >
            <img
              v-if="index == 0"
              style="margin-left: 13px; margin-bottom: -7px; z-index: 100"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_01.png?5b202029"
              alt=""
            />
            <img
              v-if="index == 1"
              style="margin-left: 13px; margin-bottom: -7px"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_02.png?5c6f851f"
              alt=""
            />
            <img
              v-if="index == 2"
              style="margin-left: 13px; margin-bottom: -7px"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_03.png?96ad2cc6"
              alt=""
            />
            <img
              style="margin-left: 13px"
              width="100"
              height="140"
              :src="item.cover"
              alt=""
            />
            <span style="font-size: 13px">{{ item.title }}</span>
          </van-col>
        </van-row>
      </div>
      <van-divider />
      <!-- 精品必读 -->
      <div class="qt">
        <div class="h1">精品必读</div>
        <div
          class="rq"
          v-for="item in jp"
          :key="item.id"
          @click="bookid(item.id)"
        >
          <img style="margin-left: 6px" width="80" :src="item.cover" alt="" />
          <div class="rq1">
            <div class="rqtitle">{{ item.title }}</div>
            <span style="font-size: 13px"
              >{{ item.author }}/{{ item.category }}</span
            >
            <div class="conten1">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <van-divider />
      <!-- 高能剧情 -->
      <div class="qt">
        <div class="h1">高能剧情</div>
        <div
          class="rq"
          v-for="item in gn"
          :key="item.id"
          @click="bookid(item.id)"
        >
          <img style="margin-left: 6px" width="80" :src="item.cover" alt="" />
          <div class="rq1">
            <div class="rqtitle">{{ item.title }}</div>
            <span style="font-size: 13px"
              >{{ item.author }}/{{ item.category }}</span
            >
            <div class="conten1">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <van-divider />
      <!-- 完结榜·超人气爆款小说 -->
      <div class="rb">
        <div class="h1">完结榜·超人气爆款小说</div>
        <van-row class="row" style="text-align: center">
          <van-col
            span="8"
            v-for="(item, index) in wj"
            :key="index"
            @click="bookid(item.id)"
          >
            <img
              v-if="index == 0"
              style="margin-left: 13px; margin-bottom: -7px; z-index: 100"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_01.png?5b202029"
              alt=""
            />
            <img
              v-if="index == 1"
              style="margin-left: 13px; margin-bottom: -7px"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_02.png?5c6f851f"
              alt=""
            />
            <img
              v-if="index == 2"
              style="margin-left: 13px; margin-bottom: -7px"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_03.png?96ad2cc6"
              alt=""
            />
            <img
              style="margin-left: 13px"
              width="100"
              height="140"
              :src="item.cover"
              alt=""
            />
            <span style="font-size: 13px">{{ item.title }}</span>
          </van-col>
        </van-row>
      </div>
      <van-divider />
      <!-- 优质好文 -->
      <div class="qt">
        <div class="h1">优质好文</div>
        <div
          class="rq"
          v-for="item in yz"
          :key="item.id"
          @click="bookid(item.id)"
        >
          <img style="margin-left: 6px" width="80" :src="item.cover" alt="" />
          <div class="rq1">
            <div class="rqtitle">{{ item.title }}</div>
            <span style="font-size: 13px"
              >{{ item.author }}/{{ item.category }}</span
            >
            <div class="conten1">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <van-divider />
      <!-- 大家都在看 -->
      <div class="qt" v-if="dj">
        <div class="h1">大家都在看</div>
        <div
          class="rq"
          v-for="item in dj"
          :key="item.id"
          @click="bookid(item.id)"
        >
          <img style="margin-left: 6px" width="80" :src="item.cover" alt="" />
          <div class="rq1">
            <div class="rqtitle">{{ item.title }}</div>
            <span style="font-size: 13px"
              >{{ item.author }}/{{ item.category }}</span
            >
            <div class="conten1">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <van-divider />
      <!-- 最热新书榜 -->
      <div class="rb" v-if="xs">
        <div class="h1">最热新书榜</div>
        <van-row class="row" style="text-align: center">
          <van-col
            span="8"
            v-for="(item, index) in xs"
            :key="index"
            @click="bookid(item.id)"
          >
            <img
              v-if="index == 0"
              style="margin-left: 13px; margin-bottom: -7px; z-index: 100"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_01.png?5b202029"
              alt=""
            />
            <img
              v-if="index == 1"
              style="margin-left: 13px; margin-bottom: -7px"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_02.png?5c6f851f"
              alt=""
            />
            <img
              v-if="index == 2"
              style="margin-left: 13px; margin-bottom: -7px"
              width="100"
              src="https://m.yuedu.163.com/assets/mobile/images/index18/icon_03.png?96ad2cc6"
              alt=""
            />
            <img
              style="margin-left: 13px"
              width="100"
              height="140"
              :src="item.cover"
              alt=""
            />
            <span style="font-size: 13px">{{ item.title }}</span>
          </van-col>
        </van-row>
      </div>
      <van-divider />
    </div>
  </div>
</template>

<script>
import { getShowFree } from "../api/free"; //免费导航
import bookShelf from "../components/bookshelf.vue"; //书架
import heaDer from "../components/load.vue"; //加载模块
import headara from "../components/header.vue"; //头部
import seaCh from "../components/seach.vue"; //搜索
import {
  getNavi,
  // getMadr
} from "../api/yc";
export default {
  data() {
    return {
      gender: "", //性别
      gen: true, //是否弹出选择性别
      type: "", //精选请求
      img: "", //图片
      qt: "", //本周强推
      dh: "", //导航
      qtid: "ts_01ad3076e1f640f594fb43a55a6d4b46_4", //强推id
      rq: "", //人气
      rb: "", //热榜
      jp: "", //精品
      gn: "", //高能
      wj: "", //完结
      yz: "", //优质
      dj: "", //大家
      xs: "", //新书
      show:false,
    };
  },
  components: {
    headara, //头部
    bookShelf, //书架组件
    // shuangWen, //都市爽文
    seaCh, //搜索
    heaDer, //加载
  },
  computed: {},
  methods: {
    // 轮播图跳转
    bookid(id, url) {
      console.log(1, id, url);
      this.$store.commit("bookidData", id);
      this.$router.push("/source");
    },
    // 导航跳转
    godh(url, name, index1) {
      let index;
      sessionStorage.setItem("rankname", name);
      sessionStorage.setItem("rankurl", url);
      if (name == "人气") {
        index = 0;
      } else if (name == "完结") {
        index = 4;
      } else {
        index = index1;
      }

      if (name == "种田" || name == "古言") {
        this.$router.push("/nvzt");
      } else if (name == "完本") {
        this.$router.push("/nvwb");
      } else if (name == "精品" || name == "奇文") {
        this.$router.push("/wl");
      } else {
        this.$router.push({
          path: "/dh",
          query: {
            index,
          },
        });
      }
    },
    ifgen() {
      if (sessionStorage.getItem("gender")) {
        this.gen = false;
      }
    },
    genfun() {
      sessionStorage.setItem("gender", this.gender);
      getNavi({ gender: this.gender }).then((res) => {
        // if()
        console.log(res,1);
        sessionStorage.setItem("jx", res.data.navi[0].url);
        sessionStorage.setItem("mf", res.data.navi[1].url);
        this.getjx();
      });
    },
    getjx() {
      if (sessionStorage.getItem("jx")) {
        this.type = sessionStorage.getItem("jx");
        getShowFree(this.type).then((res) => {
          console.log(res, "精选");
          if(res.resCode==0){
          if (sessionStorage.getItem("gender") == 1) {
            console.log("男");
            this.img = res.data.list[0].banners; //轮播
            this.dh = res.data.list[1].shortCut; //导航
            this.qt = res.data.list[2].list; //强推
            this.qt.shift();
            this.rq = res.data.list[3].list; //人气
            this.rb = res.data.list[4].list; //热榜
            this.jp = res.data.list[5].list; //精品
            this.gn = res.data.list[6].list; //高能
            this.wj = res.data.list[7].list; //完结
            this.yz = res.data.list[8].list; //优质
            this.dj = res.data.list[9].list; //大家
            this.xs = res.data.list[10].list; //最热新书榜
          } else {
            console.log("女");
            this.img = res.data.list[0].banners; //轮播
            this.dh = res.data.list[1].shortCut; //导航
            this.qt = res.data.list[2].list; //强推
            this.qt.shift();
            this.rq = res.data.list[3].list; //人气
            this.rb = res.data.list[4].list; //热榜
            this.jp = res.data.list[5].list; //精品
            this.gn = res.data.list[6].list; //高能
            this.wj = res.data.list[7].list; //完结
            this.yz = res.data.list[8].list; //优质
            //this.dj = res.data.list[9].list; //大家
            //this.xs=res.data.list[10].list
          }
          this.show=true
          
          }
        });
      }
    },
  },
  created() {
    this.ifgen();
    this.getjx();
  },
  mounted() {},
};
</script>
<style  scoped>
/* .main{
    margin: 0 20px 4px;
  padding: 15px 0 30px;
} */
.div0 {
  background: url("https://m.yuedu.163.com/assets/mobile/images/index18/icon_01.png?5b202029");
}
.rink-1 {
}
.conten1 {
  font-size: 12px;
  padding-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.rq {
  position: relative;
  margin-bottom: 1rem;
}
.rqtitle {
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 1rem;
}
.rq1 {
  position: absolute;
  top: 0;
  left: 100px;
}
/* 强推 */
.qt {
  position: relative;
}
.qt1 {
  margin-bottom: 1rem;
}
.h1 {
  font-size: 17px;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 6px;
}
h5 {
  position: absolute;
  left: 100px;
  top: 2rem;
}
.s1 {
  position: absolute;
  left: 110px;
  top: 4rem;
  font-size: 13px;
}
.conten {
  position: absolute;
  left: 100px;
  top: 6rem;
  font-size: 13px;
  right: 10px;
}
</style>