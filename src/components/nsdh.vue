<template>
  <div class="mian">
    <div class="bq">
      <keep-alive>
        <van-sidebar v-model="activeKey" style="width: 100%; position: fixed">
          <van-sidebar-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.name"
            @click="clickgetbook(item.naviInfos[0].url)"
          />
        </van-sidebar>
      </keep-alive>
    </div>
    <div class="book1" v-if="book.length">
      <div
        class="book2"
        v-for="(item, index) in book"
        :key="index"
        style="margin-top: 10px"
        @click="go(item.id)"
      >
        <img class="img" width="70" :src="item.cover" alt="" />

        <h5 class="title1">
          {{ item.title }}
          <div class="index">{{ index + 1 }}</div>
        </h5>

        <div class="conten">
          {{ item.content }}
        </div>
        <div class="mz">{{ item.author }} | {{ item.category }}</div>
      </div>
    </div>
    <div class="book1" v-else>
      <span>暂无书籍</span>
    </div>
  </div>
</template>

<script>
import { get } from "../api/https";
import { getRankNavi } from "../api/rank";
export default {
  props: ["gender"],
  data() {
    return {
      type: "", //排行
      activeKey: this.$route.query.index,
      list: "",
      book: "",
      url: "",
    };
  },
  computed: {},
  methods: {
    go(id){
      this.$store.commit("bookidData", id);
      this.$router.push("/source");
    },
    getbook() {
      if (this.activeKey == 0) {
        this.url =
          "/store/rankList.json?rankType=34&uuid=ca03da7b64ca443ab25ec3b662fa91e2&all=0"; //人气榜
      } else if (this.activeKey == 1) {
        let xb = sessionStorage.getItem("gender");
        console.log(xb, "性别");
        if (xb == 1) {
          this.url =
            "/store/rankList.json?rankType=26&uuid=ca03da7b64ca443ab25ec3b662fa91e2&all=0"; //男畅销榜
        } else {
          this.url =
            "/store/rankList.json?rankType=27&uuid=017de2274aa5400e9dabe30f173e98d9&all=0"; //女畅销榜
        }
      } else {
        this.url =
          "/store/rankList.json?rankType=806&uuid=ca03da7b64ca443ab25ec3b662fa91e2&all=0"; //完结榜
      }
      get(`https://apis.netstart.cn/yunyuedu/${this.url}`).then((res) => {
        console.log(res);
        this.book = res.list;
      });
    },
    clickgetbook(url) {
      console.log(url, "索引");
      get(`https://apis.netstart.cn/yunyuedu/${url}`).then((res) => {
        console.log(res.list);
        this.book = res.list;
      });
      // getRankListsss(url).then((res) => {
      //   console.log(res);
      // });
    },

    getrank() {
      this.type = sessionStorage.getItem("rankurl"); //书籍id
      console.log(this.type, "url11");
      getRankNavi(this.type).then((res) => {
        this.list = res.data.list;
        // 男生
        console.log(this.gender);
        if (this.gender == 1) {
          this.list = res.data.list[0].subNavis;
          console.log(this.list, "男生");
        } else if (this.gender == 2) {
          this.list = res.data.list[1].subNavis;
          console.log(this.list, "女生");
        } else if (this.gender == 3) {
          this.list = res.data.list[2].subNavis;
          console.log(this.list, "免费");
        } else if (this.gender == 4) {
          this.list = res.data.list[3].subNavis;
          console.log(this.list, "听书");
        }
      });
    },
  },
  created() {
    this.getrank();
    this.getbook();
  },
  mounted() {},
};
</script>
<style  scoped>
.index {
  float: right;
}
.mian {
  position: relative;
}
.bq {
  width: 20%;
  position: absolute;
}
.book1 {
  position: relative;
  position: absolute;
  left: 21%;
  width: 75%;
  top: 2%;
}
/* .book2{
  position: absolute;
  left: 21%;
  width: 75%;
  top: 10rem;
  text-align: center;
} */
.title1 {
  /* float: left;
  margin-left: 80px;
  margin-top: -90px; */
  position: absolute;
  top: 1px;
  left: 80px;
  width: 70%;
}
.item {
  position: absolute;
  left: 80px;
  top: 5px;
}
.conten {
  font-size: 12px;
  height: 2rem;
  padding-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-top: 3px;
  position: absolute;
  top: 1rem;
  left: 80px;
}
.book2 {
  position: relative;
}
.mz {
  position: absolute;
  top: 80%;
  font-size: 12px;
  left: 80px;
}
.van-sidebar-item {
  background-color: rgb(255, 255, 255);
}
</style>