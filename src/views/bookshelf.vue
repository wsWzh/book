<template>
  <div>
    <!-- 加载 -->
    <hea-Der v-if="!flag"></hea-Der>
    <div v-if="flag">
      <!-- 头部 -->
      <div class="headerBox">
        <div class="content">
          <span>书架</span>
          <span class="iconfont icon-quanbufenlei-zhutitouzi-1"></span>
        </div>
        <div class="right">
          <span class="iconfont icon-sousuo"></span>
          <span class="iconfont icon-jilu"></span>
          <span class="iconfont icon-caidan"></span>
        </div>
      </div>

      <!-- 内容 -->
      <div class="content">
        <ul>
          <li>
            <div class="img">
              <img
                src="https://img0.baidu.com/it/u=606961737,1909528827&fm=26&fmt=auto"
                alt=""
              />
            </div>
            <h3>江先生,阿巴巴</h3>
            <p>883章未读</p>
          </li>
          <li>
            <div class="img">
              <img
                src="https://img0.baidu.com/it/u=606961737,1909528827&fm=26&fmt=auto"
                alt=""
              />
            </div>
            <h3>江先生,阿巴巴</h3>
            <p>883章未读</p>
          </li>
          <li>
            <div class="img">
              <img
                src="https://img0.baidu.com/it/u=606961737,1909528827&fm=26&fmt=auto"
                alt=""
              />
            </div>
            <h3>江先生,阿巴巴</h3>
            <p>883章未读</p>
          </li>
          <li>
            <div class="img">
              <img
                src="https://img0.baidu.com/it/u=606961737,1909528827&fm=26&fmt=auto"
                alt=""
              />
            </div>
            <h3>江先生,阿巴巴</h3>
            <p>883章未读</p>
          </li>
          <li>
            <div class="img">
              <img
                src="https://img0.baidu.com/it/u=606961737,1909528827&fm=26&fmt=auto"
                alt=""
              />
            </div>
            <h3>江先生,阿巴巴</h3>
            <p>883章未读</p>
          </li>
          <li>
            <div class="img">
              <img
                src="https://img0.baidu.com/it/u=606961737,1909528827&fm=26&fmt=auto"
                alt=""
              />
            </div>
            <h3>江先生,阿巴巴</h3>
            <p>883章未读</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import heaDer from "../components/load.vue"; //头部

export default {
  data() {
    return {
      flag: false,
    };
  },
  components: {
    heaDer, //加载组件
  },
  methods: {
    time() {
      if (this.flag == true) {
        setTimeout(t);
      }

      let t = setTimeout(() => {
        this.flag = true;
        console.log("定时器结束");
      }, 500);
    },
  },
  created() {
    this.time();
  },
};
</script>
<style lang="less">
// 头部
.headerBox {
  display: flex;
  height: 18px;
  justify-content: space-between;
  padding: 14px;
  .left {
    span {
      font-size: 14px;
      color: rgb(0, 0, 0);
    }
  }
  .right {
    span {
      display: inline-block;
      margin-left: 8px;
      font-size: 18px;
      color: rgb(118, 118, 118);
    }
  }
}
.content {
  padding: 0px 18px;

  height: 100%;
  ul {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      height: 182px;
      margin-bottom: 14px;
      .img {
        width: 94px;
        height: 130px;
        border-radius: 3px;
        img {
          width: 94px;
          height: 130px;
          border-radius: 3px;
        }
      }
      h3 {
        color: rgb(85, 83, 84);
        font-size: 9px;
        line-height: 33px;
        margin-bottom: 5px;
      }
      p {
        color: rgb(178, 178, 178);
        font-size: 8px;
        line-height: 22px;
      }
    }
  }
}
</style>