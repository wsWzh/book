<template>
  <div style="height: 1000px">
    <!-- 加载 -->
    <hea-der v-show="false"></hea-der>
    <!-- 头部 -->
    <headara></headara>
    <!-- 查询 -->
    <seaCh></seaCh>
    <!-- 书籍展示 -->
    <div>
      <!-- 轮播 -->
      <div>
        <img
          @click="bookid(qtid)"
          width="100%"
          src="https://easyreadfs.nosdn.127.net/gC3JUXdvMCU9BEPFWtDLSA==/8796093025013536332"
          alt=""
        />
      </div>
      <!-- 重磅推荐 -->
      <div class="qt">
        <div class="qt1">
          <div class="h1">重磅推荐</div>
          <div class="img">
            <img
              @click="bookid(qtid)"
              style="margin-left: 6px"
              width="80"
              src="https://easyreadfs.nosdn.127.net/amsTsTm-eE1v6WCGMpq49w==/8796093024374296757"
              alt="本周强推"
            />
            <van-icon
              color="white"
              class="icon"
              name="play-circle-o"
              size="20"
            />
          </div>

          <h5>重生之商业大亨</h5>
          <span class="s1">墓之声 / 都市</span>
          <div class="conten">
            在国企厮混了十来年的张思源,被老天爷送回了1998年高二学期末。张思源心里想道:上一世,自己错过很多,这一世,一定不能错过了。
          </div>
        </div>

        <van-row style="text-align: center">
          <van-col
            span="6"
            v-for="item in qt"
            :key="item.id"
            @click="bookid(item.id)"
          >
            <div class="img">
              <img
                style="padding-left: 10px"
                width="75"
                height="100"
                :src="item.cover"
                alt=""
              />
              <van-icon
                color="white"
                class="icon"
                name="play-circle-o"
                size="20"
              />
            </div>

            <span style="font-size: 13px">{{ item.title }} </span>
            <div v-show="item.author" style="font-size: 12px">
              {{ item.author }}
            </div>
            <div v-show="!item.author" style="font-size: 12px">匿名</div>
          </van-col>
        </van-row>
      </div>
      <!-- 本周热听 -->
      <div class="qt">
        <div class="h1">本周热听</div>
        <div
          class="rq"
          v-for="item in rt"
          :key="item.id"
          @click="bookid(item.id)"
        >
          <div class="img">
            <img
              style="margin-left: 6px"
              height="112"
              width="80"
              :src="item.cover"
              alt="本周强推"
            />
            <van-icon
              color="white"
              class="icon"
              name="play-circle-o"
              size="20"
            />
          </div>

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
      <!-- 轮播2 -->
      <div>
        <img
          @click="bookid(qtid1)"
          width="100%"
          src="https://easyreadfs.nosdn.127.net/gpde2EJ0gDZaWraaPCKCHw==/8796093024849243938"
          alt=""
        />
      </div>
      <van-divider />

      <!-- 女生精选 -->
      <div class="qt">
        <div class="h1">女生精选</div>

        <van-row style="text-align: center">
          <van-col
            span="6"
            v-for="item in jx"
            :key="item.id"
            @click="bookid(item.id)"
          >
            <div class="img">
              <img
                style="padding-left: 10px"
                width="75"
                height="100"
                :src="item.cover"
                alt=""
              />
              <van-icon
                color="white"
                class="icon"
                name="play-circle-o"
                size="20"
              />
            </div>

            <span style="font-size: 13px">{{ item.title }} </span>
            <div v-show="item.author" style="font-size: 12px">
              {{ item.author }}
            </div>
            <div v-show="!item.author" style="font-size: 12px">匿名</div>
            <br />
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import headara from "../components/header.vue"; //头部
import seaCh from "../components/seach.vue"; //搜索
import heaDer from "../components/load.vue"; //加载模块
import { get } from "../api/https";
export default {
  data() {
    return {
      url: "https://apis.netstart.cn/yunyuedu/book/getsub.json?id=audio_41bf72a6661d4bb18e8972a2a965ea20_4&title=%E9%94%A6%E7%BB%A3%E7%9A%87%E5%90%8E",
      qt: "",
      qtid: "audio_3e873e3055b54604b572f290174e0fc6_4", //轮播
      rt: "",
      qtid1: "audio_4487ba396c814934b6a8d0c3fb7d4060_4", //轮播1
      jx: "",
    };
  },
  components: {
    headara,
    seaCh,
    heaDer,
  },
  computed: {},
  methods: {
    bookid(id) {
      console.log(id);
      this.$router.push({path:'/tsxq',query:{
        id
      }})
    },
    go() {},
    getbook() {
      get(
        "https://apis.netstart.cn/yunyuedu/store/show.json?type=audio&uuid=b67282bb443845fabe5b543795a27618"
      ).then((res) => {
        console.log(res.data.list, "听书");
        this.qt = res.data.list[1].list;
        this.qt.shift();
        this.rt = res.data.list[2].list;
        this.jx = res.data.list[4].list;
      });
    },
  },
  created() {
    this.getbook();
  },
  mounted() {},
};
</script>
<style  scoped>
.rqtitle {
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 1rem;
}
.img {
  position: relative;
}
.icon {
  position: absolute;
  left: 10px;
  top: 80%;
}
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
.rq1 {
  position: absolute;
  top: 0;
  left: 100px;
}
.rq {
  position: relative;
  margin-bottom: 1rem;
}
.conten1 {
  font-size: 13px;
  height: 3rem;
  padding-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>