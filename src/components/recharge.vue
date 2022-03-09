<template>
<!-- 充值 -->
  <div>
    <div class="recharge">
      <div class="title f-cb">
        <a class="mid"> 充值 </a>
        <router-link tag="p" to="/" class="left"
          ><span class="ui-leftaw-2"></span
        ></router-link>
        <a class="right" href="/">首页</a>
      </div>
      <div class="g-bd j-g-bd">
        <div class="m-account">
          <p><label>充值帐号：</label><span>15766723069(手机号)</span></p>
          <p>
            <label>账户余额：</label>
            <span><em>0</em>阅点(0元)</span>
          </p>
          <p>
            <label>当前可用红包：</label>
            <span>0阅点</span>
          </p>
        </div>
        <div class="m-rechargelist" id="J_rechargeMeans">
          <h3>
            选择充值方式<span class="tip"
              >赠送的红包将在充值完成后自动到账，有效期7天</span
            >
          </h3>
          <div class="m-rechargeitem" data-gatype="alipay" data-type="alipay">
            <h4><b class="zfb"></b>支付宝</h4>
            <ul class="f-cb">
            
              <van-popup v-model="faaag">
                <div style="font-size: 16px">
                  <h2 style="text-align: center">打钱?</h2>
                  <img
                    src="../assets/QQ图片20220112232938.jpg"
                    alt=""
                    width="250px"
                    height="350px"
                  /></div
              ></van-popup>
              <li
                @click="showa"
                class="item odd"
                data-value="29"
                data-productid="4008"
                data-hbactivityid="7001"
                data-hbconfigid="0"
                data-log="wk1-2:category=recharge,eventId=click,money=29"
              >
                <p class="money">29元</p>
                <p class="yd">2900阅点</p>
              </li>
              <li
               @click="showa"
                class="item even"
                data-value="49"
                data-productid="1009"
                data-hbactivityid="7001"
                data-hbconfigid="6001"
                data-log="wk1-2:category=recharge,eventId=click,money=49"
              >
                <p class="money">49元</p>
                <p class="yd">4900阅点 + <em>700红包</em></p>
                <b class="hot-icon"
                  ><img
                    src="https://easyreadfs.nosdn.127.net/oOalO9Di7wAwdmt9EFYBdw==/8796093023796584327"
                /></b>
              </li>
              <li
               @click="showa"
                class="item odd"
                data-value="99"
                data-productid="5002"
                data-hbactivityid="7001"
                data-hbconfigid="1027006"
                data-log="wk1-2:category=recharge,eventId=click,money=99"
              >
                <p class="money">99元</p>
                <p class="yd">9900阅点 + <em>1450红包</em></p>
              </li>
              <li
               @click="showa"
                class="item even"
                data-value="198"
                data-productid="5005"
                data-hbactivityid="7001"
                data-hbconfigid="1027007"
                data-log="wk1-2:category=recharge,eventId=click,money=198"
              >
                <p class="money">198元</p>
                <p class="yd">19800阅点 + <em>3000红包</em></p>
                <b class="hot-icon"
                  ><img
                    src="https://easyreadfs.nosdn.127.net/cXLmF-Jp_qIlPi2QMR-8JA==/8796093023813026100"
                /></b>
              </li>
            </ul>
          </div>
          <div class="m-rechargeitem" data-gatype="MWEB" data-type="wxpay">
            <h4><b class="wx"></b>微信支付</h4>
            <ul class="f-cb">
               <van-popup v-model="show">
                <div style="font-size: 16px">
                  <h2 style="text-align: center">打钱?</h2>
                  <img
                    src="../assets/微信图片_20220112193407.jpg"
                    alt=""
                    width="250px"
                    height="350px"
                  /></div
              ></van-popup>
              <li
               @click="showPopup"
                class="item odd"
                data-value="29"
                data-productid="2007"
                data-hbactivityid="7001"
                data-hbconfigid="0"
                data-log="wk1-3:category=recharge,eventId=click,money=29"
              >
                <p class="money">29元</p>
                <p class="yd">2900阅点</p>
              </li>
              <li
               @click="showPopup"
                class="item even"
                data-value="49"
                data-productid="2008"
                data-hbactivityid="7001"
                data-hbconfigid="6001"
                data-log="wk1-3:category=recharge,eventId=click,money=49"
              >
                <p class="money">49元</p>
                <p class="yd">4900阅点 + <em>700红包</em></p>
                <b class="hot-icon"
                  ><img
                    src="https://easyreadfs.nosdn.127.net/9BYSaDn3WgXffOjUuiOGmg==/8796093023796592913"
                /></b>
              </li>
              <li
               @click="showPopup"
                class="item odd"
                data-value="99"
                data-productid="5004"
                data-hbactivityid="7001"
                data-hbconfigid="1027006"
                data-log="wk1-3:category=recharge,eventId=click,money=99"
              >
                <p class="money">99元</p>
                <p class="yd">9900阅点 + <em>1450红包</em></p>
              </li>
              <li
               @click="showPopup"
                class="item even"
                data-value="198"
                data-productid="3007"
                data-hbactivityid="7001"
                data-hbconfigid="1027007"
                data-log="wk1-3:category=recharge,eventId=click,money=198"
              >
                <p class="money">198元</p>
                <p class="yd">19800阅点 + <em>3000红包</em></p>
                <b class="hot-icon"
                  ><img
                    src="https://easyreadfs.nosdn.127.net/0rVqIXD-t7-chPs_Lw0mIA==/8796093023813024065"
                /></b>
              </li>
            </ul>
          </div>
        </div>
        <p class="recharge_tip">注：虚拟商品充值到账不支持退款</p>
        <div class="m-feedback f-cb">
          <h4>欢迎反馈宝贵意见给我们</h4>
          <div class="f-fl">
            <p>客服：<a href="tel:0571-89853801">0571-89853801</a></p>
            <p>邮件：<a href="mailto:reader@188.com">reader@188.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      faaag:false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showa(){
      this.faaag = true;
    }
  },
};
</script>
<style lang="less">
.recharge {
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
  .m-account {
    padding: 12px 15px;
    background-color: #fff;
    p {
      height: 24px;
      line-height: 24px;
      color: #6c6358;
      overflow: hidden;
      font-size: 15px;
      em {
        color: #ed6460;
        font-style: normal;
      }
    }
  }
  .m-rechargelist {
    h3 {
      font-size: 16px;
      font-weight: normal;
      color: #595550;
      margin: 13px 15px;
      .tip {
        display: block;
        font-size: 14px;
        color: #ed6460;
        margin-top: 5px;
      }
    }
    .m-rechargeitem {
      margin-bottom: 10px;
      padding: 0 15px;
      background: #fff;
      color: #6c6358;
      h4 {
        padding: 13px 0 15px;
        font-size: 15px;
        font-weight: normal;
        height: 28px;
        line-height: 28px;
        b {
          float: left;
          width: 28px;
          height: 28px;
          margin-right: 12px;
          background: url(https://yuedust.yuedu.126.net/assets/mobile/images/icon-pay-1.png?c8008229);
          background-size: 28px;
        }
        .wx {
          background-position: 0 -99px;
        }
      }
      .f-cb:after,
      .f-cbli li:after {
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        overflow: hidden;
        content: ".";
      }
      ul {
        li {
          position: relative;
          display: block;
          float: left;
          width: 47.8%;
          height: 60px;
          margin-bottom: 10px;
          text-align: center;
          background: transparent;
          border: 1px solid #cacaca;
          border-radius: 4px;
          .money {
            font-size: 16px;
            color: #ed6460;
            margin-top: 11px;
          }
          .yd {
            font-size: 12px;
            margin-top: 8px;
          }
          .hot-icon {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 25px;
            height: 25px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .odd {
          float: left;
        }
        .even {
          float: right;
        }
      }
    }
  }
  .recharge_tip {
    margin: 0 15px;
    font-size: 12px;
    line-height: 1.14;
    color: #333;
  }
  .m-feedback {
    position: absolute;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
    padding: 20px 15px;
    color: #807a73;
    h4 {
      margin-bottom: 7px;
      font-size: 14px;
      font-weight: normal;
      line-height: 17px;
    }
    .f-fl {
      float: left;
    }
    p {
      line-height: 18px;
      color: #807a73;
      font-size: 12px;
      a {
        color: #60aaed;
      }
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .block {
      width: 120px;
      height: 120px;
      background-color: #fff;
    }
  }
}
</style>