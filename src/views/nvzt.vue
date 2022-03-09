<template>
  <div class="main">
    <!-- 头部 -->
    <div class="total">
      <router-link to="/" style="float: left; margin-left: 1rem">
        <van-icon name="arrow-left" to="/" size="20"
      /></router-link>
      <span class="zt">{{ title }}</span>
    </div>
    <!-- 索引 -->
    <div class="sy">
      <!-- 索引1 -->
      <van-row
        ><van-col span="3" v-for="item in sy1" :key="item.value"
          ><a @click="getbook(item.value)">{{ item.name }}</a></van-col
        >
        <van-col offset="14"
          ><a v-show="sy1" @click="show = !show">更多</a></van-col
        >
      </van-row>

      <!-- 是否展示的索引 -->
      <transition name="van-fade">
        <div v-show="show">
          <!-- 索引2 -->
          <van-row>
            <van-col span="3" v-for="item in sy2" :key="item.value"
              ><a @click="getbook1(item.value)">{{ item.name }}</a></van-col
            >
          </van-row>
          <!-- 索引3 -->
          <van-row>
            <van-col span="3" v-for="item in sy3" :key="item.value"
              ><a @click="getbook2(item.value)">{{ item.name }}</a></van-col
            >
          </van-row>
          <!-- 索引4 -->
          <van-row gutter="10">
            <van-col v-for="item in sy4" :key="item.value"
              ><a @click="getbook3(item.value)">{{ item.name }}</a></van-col
            >
          </van-row>
          <!-- <van-divider /> -->
        </div>
      </transition>
      <!-- <van-divider v-show="!show" /> -->
      <!-- 小说展示 -->

      <transition name="van-fade">
        <div class="book2">
          <van-grid :column-num="3">
            <van-grid-item v-for="item in book" :key="item.id" @click="go1(item.id)">
              <!-- <van-image :src="item.cover" /> -->
              <img height="140" :src="item.cover" alt="暂无书籍封面" />
              <div style="width: 100px; font-size: 13px">{{ item.title }}</div>
              <div style="width: 100px; font-size: 10px; font-weight: 100">
                {{ item.author }}
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { get } from "../api/https";
export default {
  data() {
    return {
      title: "", //标题
      show: false, // 索引是否显示
      sy1: "", //索引1
      sy2: "", //索引2
      sy3: "", //索引3
      sy4: "", //索引4
      sort: "", //排序
      pay: "", //是否免费
      bookStatus: "", //是否完结
      wordCount: "", //字数
      catId: 17, //是否种田,17种田24古言
      book: "", //小说
      type: "https://apis.netstart.cn/yunyuedu/source/v2/searchBook.json?catId=17", //古言还是种田请求的url
    };
  },
  computed: {},
  methods: {
    go1(id){
      this.$store.commit("bookidData", id);
      this.$router.push("/source");
    },
    // 字数索引
    getbook3(value) {
      if (this.title == "古言") {
        this.type =
          "https://apis.netstart.cn/yunyuedu/source/v2/searchBook.json?catId=24";
      }
      let wordCount = value;
      get(`${this.type}&wordCount=${wordCount}`).then((res) => {
        console.log(res.list);
        this.book = res.list;
      });
    },
    // 是否连载索引
    getbook2(value) {
      if (this.title == "古言") {
        this.type =
          "https://apis.netstart.cn/yunyuedu/source/v2/searchBook.json?catId=24";
      }
      let bookStatus = value;
      get(`${this.type}&bookStatus=${bookStatus}`).then((res) => {
        console.log(res.list);
        this.book = res.list;
      });
    },
    // 是否免费索引
    getbook1(value) {
      let pay = value;
      if (this.title == "古言") {
        this.type =
          "https://apis.netstart.cn/yunyuedu/source/v2/searchBook.json?catId=24";
      }
      get(`${this.type}&pay=${pay}`).then((res) => {
        console.log(res.list);
        this.book = res.list;
      });
    },
    // sort索引
    getbook(value) {
      let sort = value;
      // 根据索引获取小说,catId是种田分类的id
      if (this.title == "古言") {
        this.type =
          "https://apis.netstart.cn/yunyuedu/source/v2/searchBook.json?catId=24";
      }
      get(`${this.type}&sort=${sort}`).then((res) => {
        console.log(res.list);
        this.book = res.list;
      });
    },
    go() {
      let url = sessionStorage.getItem("rankurl");
      console.log(url);
      get(`https://apis.netstart.cn/yunyuedu/${url}`).then((res) => {
        console.log(res.title);
        this.title = res.title;
        this.sy1 = res.categories[3].catArray;
        this.sy2 = res.categories[0].catArray;
        this.sy3 = res.categories[1].catArray;
        this.sy4 = res.categories[2].catArray;
      });
    },
  },
  created() {
    // 获取索引
    this.go();
  },
  mounted() {},
};
</script>
<style lang="less"  scoped>
.main {
  position: relative;
}
.total {
  width: 100%;
  font-weight: 600;
  margin-top: 10px;
}
.zt {
  position: absolute;
  left: 48%;
}
.sy {
  width: 100%;
  position: absolute;
  top: 2rem;
  font-size: 13px;
  a:active {
    color: #0000ff;
  }
}
.book2 {
  height: 1000px;
}
</style>