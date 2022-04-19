<template>
  <div class="main">
    <van-loading v-show="show" style="text-align: center;padding-top: 50%;" type="spinner" size="50">加载中
    </van-loading>
    <div v-show="!show">
      <!-- 头部 -->
      <div class="tb">
        <!-- <div class="icon"><van-icon name="arrow-left" /></div> -->
        <div class="title">
          <router-link to="/ts">
            <van-icon class="icon" name="arrow-left" size="20.8" />
          </router-link>
          {{ title }}
        </div>
      </div>
      <!-- 中部图片 -->
      <div class="img">
        <div class="img1"><img width="120" :src="cover" alt="" /></div>
      </div>
      <div class="conten">
        <span>作者:{{ zz }}</span><span style="margin-left: 8rem">主播:{{ zb }}</span>
        <div>
          <span>集数:{{ js }}</span><span style="margin-left: 8rem">每集价格:{{ jg }}阅点</span>
        </div>
        <div class="nr">
          <span style="font-size: 16px; font-weight: 600"> 书籍简介: </span>
          <br />
          <div style="margin-left: 1rem">{{ nr }}</div>
        </div>
        <div style="width: 80%; margin-left: 10%; margin-top: 1rem">
          <audio-player ref="audioPlayer" :audio-list="audioList.map((elm) => elm.url)" :before-play="handleBeforePlay"
            theme-color="#ff2929" />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import { get } from "../api/https";

  export default {
    data() {
      return {
        show: true,
        currentAudioName: "",
        audioList: [],
        id: this.$route.query.id,
        title: "",
        zz: "",
        zb: "",
        jg: "",
        js: "",
        nr: "",
        cover: "",
      };
    },
    computed: {},
    components: {},
    methods: {
      handleBeforePlay(next) {
        // There are a few things you can do here...
        this.currentAudioName =
          this.audioList[this.$refs.audioPlayer.currentPlayIndex].name;

        next(); // Start playing
      },
      getbook() {
        let id = this.id;
        get(
          `https://apis.netstart.cn/yunyuedu/ting/source.json?sourceUuid=${id}`
        ).then((res) => {
          if (res.code == 0) {
            this.show = false;
          }
          console.log(res.data.sources[0]);
          this.title = res.data.sources[0].title;
          this.zb = res.data.sources[0].anchor;
          this.zz = res.data.sources[0].author;
          this.js = res.data.sources[0].articleCount;
          this.jg = res.data.sources[0].price;
          this.nr = res.data.sources[0].description;
          this.cover = res.data.sources[0].cover;
        });
        get(
          `https://apis.netstart.cn/yunyuedu/ting/catalog.json?sourceUuid=${id}`
        ).then((res) => {
          console.log(res);
        });
        get("https://apis.netstart.cn/yunyuedu/ting/download.json").then(
          (res) => {
            console.log(res.data.urls);
            let audioList = res.data.urls;
            audioList.forEach((element) => {
              let arr = {
                name: element.articleUuid,
                url: element.downloadUrl,
              };
              this.audioList.push(arr);
            });
            console.log(this.audioList);
          }
        );
      },
    },
    created() {
      this.getbook();
    },
    mounted() { },
  };
</script>
<style scoped>
  .nr {
    height: 10rem;
    overflow: hidden;
  }

  .main {
    position: relative;
    background-image: linear-gradient(45deg, black, white);
    height: 80rem;
    width: 100%;
    color: black;
  }

  .tb {
    position: relative;
  }

  .icon {
    position: absolute;
    /* width: 20%; */
    /* top: 1rem; */
    left: 1rem;
    /* height: 20.8px; */
    /* float: left; */
    /* margin-left: 1rem; */
  }

  .title {
    position: absolute;
    top: 1rem;
    width: 100%;
    text-align: center;
  }

  .img {
    width: 100%;
    margin-top: 4rem;
    position: absolute;
    /* padding-top: 4rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
  }

  .conten {
    position: absolute;
    top: 20rem;
  }

  span {
    margin-left: 1rem;
    display: inline-block;
    height: 2rem;
    color: white;
    font-size: 13px;
    font-weight: 500;
  }

  #app {
    background-color: aquamarine;
  }
</style>