<template>
  <!-- 目录 -->
  <div>
    <div class="title f-cb">
      <a class="mid">目录</a>

      <router-link tag="p" to="/source" class="left"
        ><span class="ui-leftaw-2"></span
      ></router-link>

      <a class="right" href="/">首页</a>
    </div>

    <div class="zj">
      <ul>
        <li
          class="grade_02"
          v-for="(item, index) in catalog"
          :key="index"
          @click="add(item.uuid)"
        >
          <div >{{ item.title }}<i></i></div>
          <van-divider />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getCatalog } from "../api/base";

export default {
  data() {
    return {
      show: false,
      catalog: [],
    };
  },
  methods: {
    get() {
      getCatalog({ source_uuid: this.sourceUuid }).then((data) => {
        this.catalog = data.data.catalog; //章节列表
        console.log(this.catalog);
      });
    },
  },
  created() {
    this.get();
  },
};
</script>
<style lang="less">
.zj {
  margin-top: 2rem;
  li {
    text-indent: 2em;
    padding-left: 1rem;
    
  }
}
.zjnr {
  margin-top: 1rem;
  text-align: center;
}
.zj {
  position: relative;
}
.xs1 {
  position: absolute;
  top: 21.8px;
  background-color: #998d80;
  width: 100%;
  height: 200px;
}
.xs2 {
  position: absolute;
  top: 1px;
  text-align: center;
}
.f-cb,
.f-cbli li {
  &::after {
    display: block;
    clear: both;
    // visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }
}
.title {
  position: relative;
  height: 44px;
  line-height: 44px;
  background-color: #e64d2e;
  a {
    color: #fff;
  }
  a.mid {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 18px;
    z-index: 999;
  }
  .left {
    float: left;
    font-size: 14px;
    position: relative;
    z-index: 1000;
    .ui-leftaw-2 {
      display: inline-block;
      margin-bottom: 3px;
      margin-left: 15px;
      margin-right: 15px;
      text-indent: -9999px;
      vertical-align: middle;
      width: 10px;
      height: 18px;
      background: url(https://yuedust.yuedu.126.net/assets/mobile/images/common/arrow-left.png?62b78c05)
        0 0;
      background-size: 100% 100%;
    }
  }
  a.right {
    float: right;
    font-size: 14px;
    padding: 0 15px 0 15px;
    position: relative;
    z-index: 1000;
  }
  a.left-search {
    float: right;
    font-size: 14px;
    position: relative;
    z-index: 1000;
    padding: 0 5px 0 15px;
    .ui-search {
      display: inline-block;
      margin-bottom: 3px;
      text-indent: -9999px;
      vertical-align: middle;
      width: 15px;
      height: 15px;
      background: url(https://yuedust.yuedu.126.net/assets/mobile/images/common/search.png?9b6cd016)
        0 0;
      background-size: 100% 100%;
    }
  }
}
.m-catalist-big {
  position: relative;
  z-index: 5001;
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  overflow: hidden;
  .curbiglist {
    padding: 0 15px;
    display: block;
    text-align: center;
    color: #aaa;
    i {
      display: inline-block;
      margin-left: 4px;
      width: 9px;
      height: 6px;
      background-size: 100% 100%;
      background-position: 0 0;
      background-repeat: no-repeat;
    }
    .icon-down {
      background-image: url(https://yuedust.yuedu.126.net/assets/mobile/images/book-catalist/arrow-down-grey.png?54863b72);
    }
  }
  .list {
    box-sizing: border-box;
    width: 100%;
    padding: 13px 15px 0;
    // background-color: #faf7f5;
    background-color: yellow;
    font-size: 14px;
    position: absolute;
    color: #000;
    top: 36px;
    left: 0;
    overflow: hidden;
    ul {
      padding-bottom: 13px;
      position: relative;
      z-index: 9999;
      li {
        box-sizing: border-box;
        width: 30%;
        height: 32px;
        line-height: 32px;
        float: left;
        margin-right: 4%;
        margin-bottom: 13px;
        color: #998d80;
        border-radius: 16px;
        background-color: #fff;
        border: 1px solid #d1ccc7;
      }
      .crt {
        background-color: #d1cfcd;
        color: #000;
      }
    }
  }
}
</style>