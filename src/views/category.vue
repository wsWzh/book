<template>
  <!-- 分类 -->
  <div>
    <!-- 加载插件 -->
    <hea-Der v-if="!flag"></hea-Der>
    <div class="category" v-if="flag">
      <!-- 头部组件 -->
      <headara></headara>
      <div class="m-lib men" v-for="item in BoysNovels" :key="item.id">
        <h3>
          <a><em class="sep"></em>{{ item.name }}</a>
        </h3>
        <ul>
          <li v-for="vale in item.cates" :key="vale.id">
            <a @click="cate(vale.cateId, item.name)">{{ vale.cateName }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import heaDer from "../components/load.vue"; //加载模块
import headara from "../components/header.vue"; //头部
import {
  getSimpleCategroy,
  // getOriginal
} from "../api/category";
export default {
  data() {
    return {
      flag: false,
      BoysNovels: null, //数据
      cateIndex: 0, //下标
      cateId: null, //id
    };
  },
  methods: {
    cate(cateId, name) {
      console.log(cateId, name);
      // this.cateId = cateId;
      this.$store.commit("cateBook", cateId);
      this.$router.push({
        path: "/original",
        query: {
          name
        },
      });
    },
    time() {
      if (this.flag == true) {
        setTimeout(t);
      }
      let t = setTimeout(() => {
        this.flag = true;
        console.log("定时器没了");
      }, 1000);
    },
    //分类
    getSimpleCategroyFun() {
      getSimpleCategroy().then((data) => {
        console.log(data);
        this.BoysNovels = data;
        // this.cateId = data[this.cateIndex].cates[this.cateIndex].cateId;
        // console.log(this.cateId);
      });
    },
    //分类列表
    // getOriginalFun() {
    //   getOriginal({ id:1 }).then((data) => {
    //     console.log(data,'分类列表');
    //   });
    // },
  },
  created() {
    this.time();
    this.getSimpleCategroyFun();
    // this.getOriginalFun();
  },
  components: {
    heaDer, //加载模块
    headara, //头部
  },
};
</script>
<style lang="less">
.category {
  background: #f5f5f5;
}
.men {
  border-top: none;
}
.m-lib {
  background-color: #fff;
  margin-bottom: 8px;
  padding: 15px;
  h3 {
    height: 19px;
    line-height: 19px;
    font-size: 16px;
    a {
      display: block;
      font-size: 18px;
      color: #ed6460;
      .sep {
        display: inline-block;
        background: #ed6460;
        border-radius: 3px;
        width: 2.5px;
        height: 12px;
        margin-right: 6px;
      }
    }
  }
  ul {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 33%;
      text-align: center;
      height: 50px;
      font-size: 14px;
      a {
        display: block;
        width: 85px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        background: #f5f5f5;
        color: #3b352d;
        border-radius: 4px;
      }
    }
  }
}

.m-lib table {
  width: 100%;
  margin: 5px 0 0;
  table-layout: fixed;
}
footer {
  padding: 15px 20px;
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0px auto 0;
  nav {
    color: #333;
    height: 28px;
    line-height: 28px;
    margin: 0 0 0 -22px;
    text-align: center;
    font-size: 0;
    a {
      color: #999;
      font-size: 12px;
      margin: 0 0 0 22px;
    }
    .cur {
      color: #e64d2e;
    }
  }
  .channel {
    margin: 0 0 0 -39px;
    a {
      color: #999;
      font-size: 12px;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      margin: 0 0 0 39px;
    }
  }
  .m-right {
    padding: 10px 0;
    color: #999;
    p {
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>