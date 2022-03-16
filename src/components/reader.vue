<template>
  <!-- 小说阅读 -->
  <!-- touchmove 拖拽事件-->
  <!-- //相当于body -->
  <div
    :class="[
      'g-wrap',
      'reader',
      { 'mode-light': !isCloned },
      { 'mode-dark': isCloned },
      'reader-box',
    ]"
    @touchmove="tuozuai"
    @touchstart="cs"
  >
    <!-- 小说内容盒子 -->
    <div class="g-main ui-main" :style="{ 'font-size': coclsize + 'px' }">
      <div class="jiazai" v-if="false">
        <van-loading size="34px">拼命加载中...</van-loading>
      </div>
      <div
        class="content j-content"
        style="font-size: 1.2em; opacity: 1; height: 100vh; overflow: auto"
        @click="btn"
        ref="scetion_container"
      >
        <div class="m-content" ref="section_height">
          <!-- 内容 -->
          <div v-if="content">
            <div v-html="content">{{ content }}</div>
            <div class="jiazai" v-if="hade">
              <van-loading size="34px">拼命加载中...</van-loading>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 头部和尾部菜单 -->
    <nav class="nav j-top-nav j-panning show" v-if="falg">
      <ul class="tb">
        <router-link tag="li" to="/source" class="j-back back"
          ><i></i
        ></router-link>
        <li class="down j-down"></li>
        <router-link tag="li" to="/recharge" class="rechargegg"
          ><i></i>充值</router-link
        >
        <li class="add-book j-add-book"><i></i>加入书架</li>
        <router-link tag="li" to="/" class="home"><i></i>首页</router-link>
      </ul>
    </nav>

    <div v-if="falg" class="nav j-content-nav nav-bot j-panning">
      <ul class="tbbb">
        <li class="shang" @click="shang">
          <i class="iconfont icon-shangyizhang- color"></i><br />
          上一章
        </li>
        <li class="xia" @click="xia1">
          <i class="iconfont icon-xiayizhang- color"></i> <br />
          下一章
        </li>
      </ul>
    </div>
    <nav class="nav j-bottom-nav nav-bot j-panning show" v-if="falg">
      <ul class="tb">
        <li class="j-cata cata" @click="showPopup"><i></i><br />目录</li>
        <li class="read-list"><i></i><br />最近阅读</li>
        <li class="j-set-reader set-reader-off" @click="abbdwe"><i></i>设置</li>
        <li class="mode j-mode" @click="togglePay"><i></i><br />夜间模式</li>
      </ul>
    </nav>

    <van-popup v-model="shoa" :style="{ height: '10%' }" position="bottom">
      <div class="sizeaa">
        <p>
          字号
          <a class="j-font-larger font-larger" @click="ajj">A+</a>
          <a class="j-font-smaller font-smaller" @click="all">A-</a>
        </p>
      </div>
    </van-popup>

    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      :style="{ width: '80%', height: '100%' }"
      position="left"
    >
      <div v-if="bookIndex">
        <ul class="caidna" v-if="uuid">
          <li
            v-for="(item, index) in catalog"
            :key="index"
            @click="add(item.uuid)"
          >
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { getContent, getCatalog } from "../api/base";
import { Toast } from "vant";
export default {
  data() {
    return {
      y: "",
      hade: true,
      falg: false,
      content: null, //内容
      isCloned: false,
      show: false, //是否弹出
      shoa: false,
      catalog: null, //章节列表
      uuid: "", //章节id
      sourceUuid: null, //书籍id
      loading: false,
      finished: false,
      arr: 0, //列表id点击哪个变哪个
      list: [],
      innerHeight: 0,
      keii: true,
      bookIndex: '',
      code: null,
      coclsize: 10,
      rankUrl: null,
    };
  },
  watch: {
    arr() {
      // console.log(this.arr);
      this.getContentFun();
    },
  },
  methods: {
    // 存储哪本小说阅读到第几章
    setid(){
       console.log(this.uuid,'lk');
       window.localStorage.setItem(`uuid${this.sourceUuid}`, this.uuid);
    },
    // 初始y,用于判断上滑还是下滑
    cs(e) {
      this.y = parseInt(e.touches[0].screenY);
      
    },
    //章节列表
    getCatalogFun() {
      this.sourceUuid = this.$store.state.bookid; //书籍id
      // console.log(this.$store.state.bookid);
      //排行榜书籍id
      this.rankUrl = this.$store.state.rankUrl;
      // console.log(this.rankUrl);
      var rankf = this.rankUrl;
      var rankLen = rankf.length;
      var rankFsssa = rankf.substring(rankLen - 37, rankLen);
      console.log(rankFsssa);
      // this.sourceUuid = rankFsssa

      getCatalog({ source_uuid: this.sourceUuid }).then((data) => {
        console.log(data);
        this.catalog = data.data.catalog; //章节列表

        // console.log("书籍id", data.data.book.sourceUuid);
        this.sourceUuid = data.data.book.sourceUuid;
        // this.uuid = data.data.catalog[this.bookIndex].uuid;
        this.code = data.code;
        // console.log("vip", this.code);
        //  let i = this.catalog.findIndex(item => item.id == this.uuid)
        // console.log(this.uuid);

        this.getContentFun();
        //章节内容  /传入书籍id和章节id
      });
    },
    //章节内容
    getContentFun() {
      getContent({
        source_uuid: this.sourceUuid,
        content_uuid: this.uuid,
      }).then((data) => {
        // console.log(data);
        this.keii = true;
        this.content += data.data.content;
        this.code = data.code;
        if (this.code == -1) {
          Toast("此章节为付费内容,请充值");
        }
      });
    },
    // 首次进入获取章节内容
    getbook() {
        getCatalog({ source_uuid: this.sourceUuid }).then(res=>{
        this.catalog = res.data.catalog;
      this.bookIndex = this.$route.query.index || this.catalog.findIndex((item) => item.uuid == this.uuid);
      console.log(this.bookIndex,'章节下标');
      if(res.code==0){
              console.log(this.catalog[0],'oh');
      let i = window.localStorage.getItem(`uuid${this.sourceUuid}`)
      let uuid = this.$route.query.uuid;
      this.uuid=uuid || i ||this.catalog[0].uuid
      getContent({
        source_uuid: this.sourceUuid,
        content_uuid: this.uuid,
      }).then((data) => {
        // console.log(data);
        this.keii = true;
        this.content += data.data.content;
        this.code = data.code;
        if (this.code == -1) {
          Toast("此章节为付费内容,请充值");
        }
    
      });
      }
      })

    },
    ajj() {
      this.coclsize += 1;
      // console.log(11);
    },
    all() {
      this.coclsize -= 1;
      // console.log(22);
    },

    //获取高度
    // getSroll(dom) {
    //   this.htmlHeight = document.documentElement.offsetHeight; //获取html页面高度
    //   this.scrollHeight = dom.scrollTop; //获取卷曲高度
    //   this.windHeighr = dom.clientHeight; //获取页面高度
    //   this.offHeight = document.documentElement.scrollHeight; //获取页面总高度
    //   //如果触顶加载上一章,章节列表id下标-1
    //   if (this.htmlHeight == this.scrollHeight + this.windHeighr) {
    //     this.arr -= 1;
    //     this.getContendaa();
    //   }
    // },
    //拖拽显示或者隐藏
    tuozuai(e) {
      let y = parseInt(e.touches[0].screenY);
      let disy = this.y - y;

      // console.log(event.touches,event.changedTouches,event.targetTouches);
      this.falg = false;
      // 大
      let top = Math.ceil(this.$refs.scetion_container.scrollTop + 668);
      // 小
      let conHeight = this.$refs.section_height.offsetHeight;
      if (this.keii) {
        if (conHeight - top < 50) {
          this.xia();
        } else if (top == 668 && disy < 0) {
          console.log(event, "上");

          this.shang();
          // this.getContentFun()
          // this.keii = false;
        }
      }
      if (this.code == -1) {
        alert("此章节为付费内容,请充值");
      }
    },
    //点击显示
    btn() {
      this.falg = true;
    },
    //切换背景颜色
    togglePay() {
      this.isCloned = !this.isCloned;
    },
    showPopup() {
      this.show = true;
    },
    abbdwe() {
      this.shoa = true;
    },
    //获取章节id
    add(uuid) {
      // this.uuid = uuid;
      // console.log(this.catalog,'获取');
      this.bookIndex = this.catalog.findIndex((item) => item.uuid == uuid);
      this.getContentFun();
      // console.log("章节id", uuid);
    },
    //上一章
    shang() {
      if (this.bookIndex > 1) {
        this.content = "";
        this.bookIndex -= 1;
        this.uuid = this.catalog[this.bookIndex].uuid;
        this.keii = false;
        this.getContentFun();
      }
      // console.log("上");
    },
    //下一章
    xia() {
      console.log(this.bookIndex,'下一章下标');
      this.bookIndex += 1;
      this.keii = false;
      this.uuid = this.catalog[this.bookIndex].uuid;
      this.getContentFun();
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(document.documentElement.scrollTop);
      console.log(top);
      // console.log("下");
    },
    xia1() {
      this.content = "";
      this.bookIndex += 1;
      this.keii = false;
      this.uuid = this.catalog[this.bookIndex].uuid;
      this.getContentFun();
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(document.documentElement.scrollTop);
      console.log(top);
      // console.log("下");
    },
    //定时器
    time() {
      if (this.hade == false) {
        setTimeout(t);
      }

      let t = setTimeout(() => {
        this.hade = false;
        this.xia();
        if (this.code == -1) {
          Toast("此章节为付费内容,请充值");
        }
        // console.log("定时器结束");
      }, 1000);
    },

    //获取内容
    //
    //   });
    // },
    //内容
    // getContendaa() {
    //   getContent({
    //     source_uuid: this.sourceUuid,
    //     content_uuid: this.uuid,
    //   }).then((data) => {
    //     this.content = data.data.content;
    //     this.keii = true;
    //   });
    // },
  },
  created() {
    // console.log(this.rankUrl);

    this.getCatalogFun(); //章节列表
    // this.add();
    // this.getContentFun(); //章节内容
    // this.time();
    this.getbook();
  },
  mounted() {
    // this.$nextTick(() => {
    //   document.addEventListener("scroll", () => {
    //     this.getSroll(document.documentElement);
    //   });
    // });
    // window.addEventListener("scroll", true);
  },
  // 离开阅读页面时保存对应小说章节
  destroyed(){
 this.setid();
}
};
</script>

<style>
/* vip */
.caidna .vip::after {
  content: "";
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader/lock.png?975cdd6d)
    0 0 no-repeat;
  background-size: 14px;
  float: right;
  margin: 20px 20px 0 0;
  text-align: center;
  width: 14px;
  height: 14px;
  text-indent: 0;
}
.caidna li {
  height: 45px;
  border-bottom: #aeaeae dotted 1px;
  font-size: 14px;
}
.caidna li span {
  line-height: 45px;
  height: 45px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #566166;
  text-indent: 2em;
}
.reader.mode-light {
  background-color: #f7f5f2;
}
.reader.mode-dark {
  background-color: #2f2f2f;
}
.g-wrap {
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  background: #f5f5f5;
  box-sizing: border-box;
  font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  padding-bottom: 0;
  overflow: hidden;
  max-width: 600px;
}

.ui-main {
  position: relative;

  transition: transform 350ms ease;
  -webkit-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
  z-index: 1;
}
.g-main {
  min-height: 100%;

  font-size: 18px;
}
.reader .content {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  line-height: 1.8;
  padding: 0 20px;
  min-height: 100%;
  width: 100%;
  margin-bottom: 0;
  -webkit-overflow-scrolling: touch;
}
.reader .content div {
  color: #222;
  text-align: justify;
  text-indent: 2em;
  margin-bottom: 36px;
}
.reader .nav.show {
  display: block;
  position: fixed;
  overflow: hidden;
}
.reader .nav.j-top-nav {
  top: 0;
}
.reader .nav {
  height: 56px;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  z-index: 10;
  box-sizing: border-box;
  display: none;
  max-width: 600px;
  position: static;
}
.reader.mode-dark .nav {
  background: #343434;
}
.reader .nav.show .tb {
  display: flex;
  justify-content: space-around;
  display: -ms-flexbox;
  width: 100%;
  height: 56px;
}
.reader .nav.show .tb li {
  font-size: 12px;
  text-align: center;
  color: #666;
}
.reader .nav .back {
  flex: 0.5;
  padding-left: 10px;
  text-align: left;
}
.reader .nav a {
  box-sizing: border-box;
  display: block;
}
.reader .nav .back i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_return@2x.png?5eadb82d)
    4px 4px no-repeat;
  background-size: 24px 24px;
  margin-top: 12px;
  width: 32px;
  height: 34px;
  display: block;
}
.reader .nav .down i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_download_app@2x.png?cf2817d6https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_download_app@2x.png?cf2817d6)
    4px 4px no-repeat;
  background-size: 24px 24px;
  display: block;
  margin: 0 auto;
  width: 32px;
  height: 34px;
}
.reader .nav .rechargegg i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_buy@2x.png?5ab8e2bd)
    4px 4px no-repeat;
  background-size: 24px 24px;
  display: block;
  margin: 0 auto;
  width: 32px;
  height: 34px;
}
.reader .nav .add-book i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_books@2x.png?bbef7e73)
    4px 4px no-repeat;
  background-size: 24px 24px;
  display: block;
  margin: 0 auto;
  width: 32px;
  height: 34px;
}
.reader .nav .home i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_home@2x.png?26d4cab3)
    4px 4px no-repeat;
  background-size: 24px 24px;
  display: block;
  margin: 0 auto;
  width: 32px;
  height: 34px;
}
.reader nav.nav.nav-bot {
  height: 55px;
}
.reader .nav.show {
  display: block;
  position: fixed;
}
.reader .nav.j-bottom-nav {
  bottom: 0;
}
.reader .nav.j-content-nav {
  bottom: 50px;
  display: block;
  position: fixed;
}
.reader .nav .cata i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_liast@2x.png?df7bf3a1)
    4px 4px no-repeat;
  background-size: 24px 24px;
  display: inline-block;
  width: 32px;
  height: 34px;
}
.reader .nav .read-list i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_time@2x.png?2df19854)
    4px 4px no-repeat;
  background-size: 24px 24px;
  display: inline-block;
  width: 32px;
  height: 34px;
}
.reader .nav .set-reader-off i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_text@2x.png?9d5b3adc)
    5px 4px no-repeat;
  background-size: 24px 24px;
  display: block;
  margin: 0 auto;
  width: 32px;
  height: 34px;
}
.reader .nav .mode i {
  background: url(https://yuedust.yuedu.126.net/assets/mobile/images/reader18/sdk_icon_switch@2x.png?fc9555bc)
    4px 4px no-repeat;
  background-size: 24px 24px;
  display: inline-block;
  width: 32px;
  height: 34px;
}
.reader .content h1 {
  font-size: 1.3em;
  text-indent: 0;
  line-height: 1.5em;
  margin-bottom: 20px;
}
.reader.mode-light .content h1,
.reader.mode-light .content h2,
.reader.mode-light .content h3 {
  color: #222;
  margin-top: 60px;
}
.reader.mode-light .content p,
.reader.mode-light .content div {
  color: #222;
  text-align: justify;
}
.reader .content p,
.reader .content div {
  text-indent: 2em;
  margin-bottom: 36px;
}
.reader.mode-dark .content p,
.reader.mode-dark .content div {
  color: #787878;
}
.reader.mode-dark img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  background: #ccc;
}
.content img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  background: #ccc;
}
.tbbb {
  display: flex;
  justify-content: space-around;
}
.tbbb li {
  font-size: 12px;
  text-align: center;
  color: #666;
}
.tbbb li i {
  display: inline-block;
  width: 32px;
  height: 34px;
  /* color: #222; */
  font-size: 16px;
  text-align: center;
  line-height: 34px;
}
.sizeaa {
  /* position: absolute; */
  padding-top: 10px;
  width: 100%;
  left: 0;
  bottom: 54px;
  background-color: #fff;
}
.sizeaa p {
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  font-size: 16px;
  color: #555;
}
.sizeaa .font-larger,
.sizeaa .font-smaller {
  width: 20%;
  height: 30px;
  line-height: 30px;
  border: #d2cdc8 solid 1px;
  float: right;
  border-radius: 16px;
  margin: 7px 0 0 10px;
  color: #666;
}
.sizeaa a {
  text-align: center;
  box-sizing: border-box;
  display: block;
}
</style>