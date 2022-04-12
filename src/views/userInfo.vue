<template>
  <div>
    <div class="user">
      <!-- 个人中心里面 -->
      <div class="title f-cb">
        <a class="mid">账户</a>

        <router-link tag="p" to="/" class="left"
          ><span class="ui-leftaw-2"></span
        ></router-link>

        <a class="right" href="/">首页</a>
        <a class="left-search"
          ><router-link tag="span" to="/seach" class="ui-search"></router-link
        ></a>
      </div>

      <div class="m-acinfo">
        <img width="70" height="70" :src="img" />
        <h2>
          用户名：{{ name }}
          <span class="lv">Lv 9</span>
        </h2>
        <p>登录Id：{{ zh }}</p>
      </div>

      <div class="m-acmore">
        <div class="group">
          <p>
            <a>
              <span class="label">余额</span>
              <span class="value">充值送红包</span>
              <span class="fr"
                ><router-link
                  tag="span"
                  to="/recharge"
                  class="ui-red-light btn-x"
                  id="J_recharge"
                  >充值</router-link
                ></span
              >
            </a>
          </p>
          <p class="notfirst">
            <a>
              <span class="label">当前可用红包</span>
              <span class="value">红包抵阅点</span>
              <span class="fr"
                ><span class="ui-red-light btn-x" id="J_exchange"
                  >兑换</span
                ></span
              >
            </a>
          </p>
          <p class="notfirst">
            <a>
              <span class="label">积分</span
              ><span class="value">还没有积分哦</span>
            </a>
          </p>
        </div>

        <div class="group">
          <p class="notfirst">
            <a>
              <span class="label">我的书架</span><span class="value">4本</span>
              <span class="fr"><span class="ui-rightaw">&gt;</span></span>
            </a>
          </p>
        </div>

        <div class="group group-bottom">
          <a class="ui-gray-dark logout" @click="tuichu">退出登录</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { getUserInfo } from "../api/base";
import { info } from "../api/user";
export default {
  data() {
    return {
      UserInfo: null,
      tonken: window.localStorage.getItem("token"),
      zh: "",
      name: "",
      img: "",
    };
  },
  methods: {
    userInfo() {
      info(this.tonken).then((res) => {
        console.log(res);
        this.zh = res.data.id;
        this.name = res.data.username;
        this.img = res.data.userFace;
      });
    },
    // getUserInfoFun() {
    //   getUserInfo({ userId: 4043564469243 }).then((data) => {
    //     console.log(data);
    //   });
    // },
    //退出
    tuichu() {
      localStorage.removeItem("token");
      console.log("退出登录成功");
      this.$router.push("/login");
    },
  },
  created() {
    this.userInfo();
  },
};
</script>
<style lang="less">
.user {
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  background: #f5f5f5;
  padding-bottom: 86px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
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
  .m-acinfo {
    height: 70px;
    background-color: #fff;
    margin: 0 0 10px 0;
    padding: 15px;
    img {
      float: left;
      margin: 0 15px 0 0;
      border-radius: 50%;
    }
    h2 {
      margin: 6px 0 8px;
      font-size: 17px;
      color: #626358;
      height: 24px;
      line-height: 24px;
      overflow: hidden;
      .lv {
        font-size: 12px;
        padding: 0 2px;
        color: #fff;
        background-color: #ff6501;
        border-radius: 3px;
        font-weight: normal;
      }
    }
    p {
      color: #aba59a;
      line-height: 24px;
      font-size: 12px;
    }
  }
  .m-acmore {
    .group {
      background-color: #fff;
      margin: 10px 0 0 0;
      p {
        height: 55px;
        margin-left: 15px;
        padding-right: 15px;
        font-size: 16px;
        a {
          display: block;
          height: 55px;
          line-height: 55px;
          color: #6c6358;
          overflow: hidden;
          .label {
            display: inline-block;
            width: 115px;
          }
          .value {
            position: absolute;
            font-size: 15px;
            color: #aba59a;
          }
          .fr {
            float: right;
            font-size: 14px;
            .btn-x {
              display: inline-block;
              height: 28px;
              line-height: 28px;
              padding: 0 13px;
            }
            .ui-red-light {
              border: 1px solid #ed6460;
              color: #ed6460;
              background-color: #fff;
              border-radius: 5px;
              font-size: 16px;
              text-align: center;
            }
            .ui-rightaw {
              display: inline-block;
              margin: 14px 5px 0 0;
              text-indent: -9999px;
              width: 7px;
              height: 14px;
              background: url(https://yuedust.yuedu.126.net/assets/mobile/images/arrow-right.png?1a704bcf)
                0 center no-repeat;
              background-size: 100% auto;
            }
          }
        }
      }
      p.notfirst {
        border-top: #ededed solid 1px;
      }
    }
    .group-bottom {
      padding: 50px 15px 25px;
      .logout {
        margin-top: 10px;
      }
      .ui-gray-dark {
        height: 40px;
        line-height: 40px;
        color: #545454;
        background-color: #f5f5f5;
        display: block;
        border-radius: 5px;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>