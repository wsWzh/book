<template>
  <div>
    <div class="login">
      <!-- 头部 -->
      <div class="header">
        <h1 class="logo"></h1>
      </div>

      <!-- 密码 -->
      <div class="content">
        <!-- 手机 -->
        <div class="m-login-header" style="margin-bottom: 3rem">
          <a class="left back" id="goBack" @click="dd1"></a>
          <span class="">{{ title }}</span>
          <a class="right" @click="dd" id="goHome">首页</a>
        </div>
        <!-- <div class="m-login-content">
          <div class="getCode-block">
            <van-form @submit="onSubmit"></van-form>
            <input
              type="text"
              class="u-input phone-number"
              placeholder="请输入手机号码"
              v-model="loginForm.username"
            />
            <input
              type="password"
              class="u-input phone-number"
              placeholder="请输入密码"
              v-model="loginForm.password"
            />

            <a
              href="javascript:;"
              id="getCode"
              class="u-button disable"
              tabindex="2"
              @click="getCode"
              >下一步</a
            >
          </div>
        </div> -->
        <van-form @submit="getCode">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div v-if="show" style="margin: 26px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
          <div v-else style="margin: 26px">
            <van-button round block type="info" native-type="submit"
              >注册</van-button
            >
          </div>
          <div v-if="show" style="text-align: center; font-size: 13px">
            <span>没有账号?</span>
            <a class="zc" @click="zc">点击注册</a>
          </div>
          <div v-else style="text-align: center; font-size: 13px">
            <span>已有账号?</span>
            <a class="zc" @click="dl">点击登录</a>
          </div>
        </van-form>
      </div>

      <div class="m-login-switch">
        <div class="line-title">
          <h4>以下帐号直接登录</h4>
        </div>
        <ul class="f-cb">
          <li
            class="mail"
            onclick="_gaq.push(['_trackEvent', 'reglog', 'easypass_click'])"
          >
            <a
              href="/login/urs.do?target_url=https%3A%2F%2Fm.yuedu.163.com%2Fmyinfo.do"
              ><span></span>网易邮箱</a
            >
          </li>
          <li
            class="weibo"
            onclick="_gaq.push(['_trackEvent', 'reglog', 'sinaweibo_click'])"
          >
            <a
              href="/ext/oauth/authorize.do?vendor_type=sinamblog&amp;version=2&amp;module=login_redirect&amp;target_url=https%3A%2F%2Fm.yuedu.163.com%2Fmyinfo.do"
              ><span></span>新浪微博</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { login, userzc } from "../api/user";
// import {post} from '../api/request'
export default {
  data() {
    return {
      title: "快速登录",
      username: "",
      phone: "",
      userName: "",
      password: "",
      isBtnLoading: false,
      show: true, //登录还是注册
    };
  },
  methods: {
    dd1(){
      this.$router.go(-1)
    },
    dd(){
      this.$router.push('/jx')
    },
    dl() {
      (this.title = "快速登录"), (this.show = true);
      this.username = "";
      this.password = "";
    },
    zc() {
      (this.title = "快速注册"), (this.show = false);
      this.username = "";
      this.password = "";
    },
    getCode() {
      let form = {};
      form.username = this.username;
      form.password = this.password;
      if (this.show) {
        login(form).then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$router.push("/yc");
            window.localStorage.setItem("token", res.data.token);
            Toast("登录成功");
          }
        });
      } else {
        userzc(this.username, this.password).then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.username = "";
            this.password = "";
            this.show = true;
          }
        });
        // post()
      }

      // Toast("账号密码错误");
      // 1.验证手机号码
      // let reg =
      //   /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      // if (!reg.test(this.phone)) {
      //   Toast("请输入正确手机号码");
      //   return;
      // }

      //密码
      // let regPassword = /^[a-zA-Z]\w{5,17}$/;
      // if (!regPassword.test(this.password)) {
      //   Toast("请填写正确信息");
      //   return;
      // }
      // Toast("登陆成功");

      // this.phone = JSON.parse(localStorage.getItem("user")).phone;
      // this.password = JSON.parse(localStorage.getItem("user")).password
      // window.localStorage.setItem("login");
      // window.localStorage.setItem("token",1);
      // window.localStorage.setItem("uid");

      //登陆成功跳回个人中心页面
      // this.$router.push("/yc");
      // this.$router.push("/recommend");
    },
  },
};
</script>
<style lang="less">
.zc {
  color: blue;
}
.login {
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  background: #fff;
  padding-bottom: 86px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  .header {
    background-color: #fff;
    position: relative;
    ::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
    h1 {
      float: left;
      width: 110px;
      height: 40px;
      margin-left: 20px;
      background: url(https://yuedust.yuedu.126.net/assets/mobile/images/index18/icon_logo@2x.png?eeb4dc67)
        center center no-repeat;
      background-size: contain;
    }
  }
  .content {
    background-color: #fff;
    .m-login-header {
      height: 44px;
      line-height: 44px;
      border-bottom: 1px solid #ededed;
      padding: 0 15px;
      text-align: center;
      font-size: 18px;
      color: #595550;
      .back {
        float: left;
        margin-top: 11px;
        display: block;
        height: 22px;
        width: 22px;
        background: url(https://yuedust.yuedu.126.net/assets/mobile/images/login_v2.7/arrow-left.png?fb1cce9e)
          center center no-repeat;
        background-size: 9.5px 17px;
      }
      .right {
        float: right;
        font-size: 15px;
      }
    }
    .m-login-content {
      padding: 0 15px;
      .getCode-block {
        margin-top: 50px;
        position: relative;
        .u-input {
          display: block;
          outline: none;
          box-shadow: none;
          border: none;
          width: 100%;
          height: 40px;
          background-color: #f5f5f5;
          border-radius: 3px;
          font-size: 16px;
          line-height: 16px;
          padding: 12.5px 10px;
          box-sizing: border-box;
          color: #595550;
          margin-bottom: 15px;
        }
        .u-button.disable {
          background-color: rgba(237, 99, 95, 0.5);
        }
        .u-button {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 40px;
          line-height: 40px;
          border-radius: 3px;
          background-color: #ed6460;
          color: #fff;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
  .m-login-switch {
    margin-top: 40px;
    padding: 0 15px;
    .line-title {
      height: 20px;
      position: relative;
      overflow: hidden;
      zoom: 1;
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 0;
        border-top: 1px solid #ededed;
        left: 0;
        top: 10px;
        z-index: 9;
      }
      h4 {
        position: absolute;
        left: 50%;
        top: 0;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        text-align: center;
        font-size: 14px;
        color: #c8c8c8;
        height: 20px;
        line-height: 20px;
        font-weight: normal;
        z-index: 10;
        background: #fff;
        padding: 0 5px;
      }
    }
    ul {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-box;
      margin: 20px auto;
      display: flex;
      li {
        flex: 1;
        a {
          position: relative;
          display: block;
          color: #807a73;
          text-align: center;
          span {
            display: block;
            width: 44px;
            height: 44px;
            margin: 0 auto 8px;
          }
        }
      }
      .weibo {
        span {
          background: url(https://yuedust.yuedu.126.net/assets/mobile/images/login_v2.7/weibo.png?4426e58b)
            no-repeat;
          background-size: 44px 44px;
          background-position: center top;
        }
      }
      .mail {
        span {
          background: url(https://yuedust.yuedu.126.net/assets/mobile/images/login_v2.7/mail.png?05d79c87)
            no-repeat;
          background-size: 44px 44px;
          background-position: center top;
        }
      }
    }
  }
}
</style>