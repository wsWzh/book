<template>
  <div>
    <div class="m-search m-search-bottom">
      <div class="search-input">
        <div class="inner f-cb">
          <input
            name="key"
            id="search-input-bottom"
            autocomplete="off"
            v-model="keyword"
            placeholder="请输入书名或作者"
          />
          <button @click="searchfun">搜索</button>
          <a class="delete" href="/"></a>
          <input type="hidden" name="type" value="detail" />
        </div>
      </div>
    </div>

    <div class="ui-line"></div>
  

    <div id="J_GoTop" class="m-gotop" v-show="gotop" ref="top" @click="toTop">
      <a href="#"></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "", //搜索关键词
      height: "",
      gotop: false,
    };
  },
  methods: {
    //搜索建议
    //向vuex传输入的文字
    searchfun() {
      this.$store.commit("searchfun", this.keyword);
      this.$router.push("/seach");
    },

    showData() {
      console.log("123564", this.$refs.top);
      console.log("123564", this.$refs.top.style);
    },

    //超出高度显示

    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },

  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
};
</script>
<style lang="less">
.m-search-bottom {
  background-color: #fff;
  .search-input {
    padding: 16px;
    height: 32px;
    .inner {
      background-color: #f7f7f7;
      position: relative;
      height: 100%;
      border-radius: 14px;
      padding-left: 14px;
      input {
        border: none;
        height: 100%;
        line-height: 32px;
        width: 80%;
        font-size: 12px;
        vertical-align: middle;
        float: left;
        padding: 2px 0 2px;
        box-sizing: border-box;
        background-color: #f7f7f7;
        font-size: 14px;
      }
      button {
        background-size: 15px 15px;
        width: 50px;
        height: 100%;
        border: none;
        vertical-align: middle;
        float: right;
        text-indent: -9999px;
        background: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_search_s.png?a74261d5)
          center center no-repeat;
        background-size: 14px 14px;
        border-top-right-radius: 14px;
        border-bottom-right-radius: 14px;
      }
    }
  }
}
.m-down-btn {
  padding: 17px 16px 17px;
  a {
    background: #e64d2e;
  }
  .ui-red-dark {
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #ed6460;

    display: block;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
  }
}
.m-gotop {
  position: fixed;
  right: 20px;
  bottom: 65px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  z-index: 4999;
  background: rgba(0, 0, 0, 0.5)
    url(https://m.yuedu.163.com/assets/mobile/images/uptotop.png?d19f6675)
    center center no-repeat;
  background-size: 14px 20px;
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
.ui-line {
  height: 1px;
  background-color: #ededed;
  margin: 0 15px;
}
</style>