<template>
  <div id="app">
    <!-- 首页 -->
    <div class="gg" v-if="statu">
      <img
        src="https://easyreadfs.nosdn.127.net/EwDS9h-WJhjxsXIwzUZgXg==/8796093025060935621#640960"
        alt="广告"
        width="100%"
      />
      <div class="tg">
        <van-button style="background-color: rgba(86, 83, 83, 0.5)" @click="tg1"
          >{{ times }} 跳过</van-button
        >
      </div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>

    <!-- 底部 -->
  </div>
</template>
<script>
import { getimg } from "./api/app";
export default {
  //获取可视化高度
  data() {
    return {
      // 跳过时间
      times: 5,
      // 广告是否存在
      statu: true,
    };
  },
  methods: {
    // 定时器,关闭广并倒计时
    tg() {
      setTimeout(() => {
        this.statu = false;
        console.log(1);
      }, 5000);
      this.timer = setInterval(() => {
        this.times--;
        if (this.times === 0) {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    // 点击跳过广告
    tg1() {
      this.statu = false;
    },
    get() {
      getimg().then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.get();
    this.tg();
  },
};
</script>

<style lang="less">
@import "./assets/css/base.css";
.gg {
  position: relative;
}
.tg {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .span {
    font-size: 12px;
  }
  background-color: rgba(255, 255, 255);
  .table {
    z-index: 999;
    position: absolute;
    bottom: 0;
  }
  li {
    list-style: none;
  }
}
</style>
