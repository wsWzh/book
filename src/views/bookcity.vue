<template>
  <div class="seachBox">
    <div class="seach">
      <span class="iconfont icon-wangyiqiyu man"></span>
      <div class="input">
        <input type="text" />
        <span class="iconfont icon-sousuo"></span>
      </div>
    </div>

    <van-tabs class="van-tables" v-model="active" swipeable animated sticky>
      <van-tab title="精选">
        <!-- 轮播图 -->
        <ban-ner></ban-ner>
        <!-- 排行榜 -->
        <div class="tubiaoBox">
          <ul>
            <li>
              <p class="iconfont icon-paihangbang1 red"></p>
              <span>排行</span>
            </li>

            <li>
              <p class="iconfont icon-xunzhang blue"></p>
              <span>人气</span>
            </li>

            <li>
              <p class="iconfont icon-wanjie blue"></p>
              <span>完结</span>
            </li>

            <li>
              <p class="iconfont icon-kafei blue"></p>
              <span>奇文</span>
            </li>

            <li>
              <p class="iconfont icon-jingpinguan oakie"></p>
              <span>精品</span>
            </li>
          </ul>
        </div>

        <!-- 本周强推 -->

        <div class="thisWeek">
          <h2>本周强推</h2>

          <!-- 348 117 -->
          <div class="thisWeek-up">
            <div class="left">
            
                <img
                  src="https://img2.baidu.com/it/u=3866578928,1688389579&fm=26&fmt=auto"
                  alt=""
                />
            
            </div>
            <div class="right">
              <h1>官场奇才</h1>
              <h3>风和暖阳/都市</h3>
              <p>
                奇谋算尽官场事,正气浩然天地魂.,正气浩然天地魂奇谋算尽官场事,正气浩然天地魂
              </p>
            </div>
          </div>
          <div class="thisWeek-bottom">
            <!-- 一个 -->
            <div class="thisWeek-bottom-Img">
                <div class="img">
              <img
                  src="https://img2.baidu.com/it/u=3866578928,1688389579&fm=26&fmt=auto"
                  alt=""
                />
            </div>

            <h3>随时事件事件求物</h3>
            <p>条疼可将</p>
            </div>

             <!-- 一个 -->
            <div class="thisWeek-bottom-Img">
                <div class="img">
              <img
                  src="https://img2.baidu.com/it/u=3866578928,1688389579&fm=26&fmt=auto"
                  alt=""
                />
            </div>

            <h3>随时事件事件求物</h3>
            <p>条疼可将</p>
            </div> <!-- 一个 -->
            <div class="thisWeek-bottom-Img">
                <div class="img">
              <img
                  src="https://img2.baidu.com/it/u=3866578928,1688389579&fm=26&fmt=auto"
                  alt=""
                />
            </div>

            <h3>随时事件事件求物</h3>
            <p>条疼可将</p>
            </div> <!-- 一个 -->
            <div class="thisWeek-bottom-Img">
                <div class="img">
              <img
                  src="https://img2.baidu.com/it/u=3866578928,1688389579&fm=26&fmt=auto"
                  alt=""
                />
            </div>

            <h3>随时事件事件求物</h3>
            <p>条疼可将</p>
            </div>

          
          </div>
        </div>

        <!-- 人气周本 -->
        <div class="hotweek">
          <h2>人气No.1-本周爆款来了</h2>
        </div>


      </van-tab>
      <van-tab title="免费"
        >内
        <h1>
          内容4546555555 1内容4546555555 1内容4546555555 内容4546555555
          1内容4546555555 1内容4546555555 内容4546555555 1内容4546555555
          1内容4546555555 内容4546555555 1内容4546555555 1内容4546555555
          内容4546555555 1内容4546555555 1内容4546555555
        </h1>
        内容4546555555 内容4546555555 1内容4546555555 1内容4546555555
        1内容4546555555 1容 2</van-tab
      >
      <van-tab title="男生"
        >
       <!-- 轮播图 -->
        <ban-ner></ban-ner>
        <h1>
          内容4546555555 1内容4546555555 1内容4546555555 内容4546555555
          1内容4546555555 1内容4546555555 内容4546555555 1内容4546555555
          1内容4546555555 内容4546555555 1内容4546555555 1内容4546555555
          内容4546555555 1内容4546555555 1内容4546555555
        </h1>
        内容4546555555 内容4546555555 1内容4546555555 1内容4546555555
        1内容4546555555 1 3</van-tab
      >
      <van-tab title="女生"
        >
       <!-- 轮播图 -->
        <ban-ner></ban-ner>
        <h1>
          内容4546555555 1内容4546555555 1内容4546555555 内容4546555555
          1内容4546555555 1内容4546555555 内容4546555555 1内容4546555555
          1内容4546555555 内容4546555555 1内容4546555555 1内容4546555555
          内容4546555555 1内容4546555555 1内容4546555555
        </h1>
        内容4546555555 容4546555555 1内容4546555555 1内容4546555555
        1内容4546555555 1 4</van-tab
      >
      <van-tab title="出版"
        >内内容45465
        <h1>
          内容4546555555 1内容4546555555 1内容4546555555 内容4546555555
          1内容4546555555 1内容4546555555 内容4546555555 1内容4546555555
          1内容4546555555 内容4546555555 1内容4546555555 1内容4546555555
          内容4546555555 1内容4546555555 1内容4546555555
        </h1>
        内容4546555555 55555 1内容4546555555 1内容4546555555 1容 4</van-tab
      >
      <van-tab title="听书"
        >内容内容4546
        <h1>
          内容4546555555 1内容4546555555 1内容4546555555 内容4546555555
          1内容4546555555 1内容4546555555 内容4546555555 1内容4546555555
          1内容4546555555 内容4546555555 1内容4546555555 1内容4546555555
          内容4546555555 1内容4546555555 1内容4546555555
        </h1>
        内容4546555555 555555 1内容4546555555 1内容4546555555 1 4</van-tab
      >
    </van-tabs>
  </div>
</template>
<script>
import banNer from "../components/banner";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    banNer,
  },
};
</script>
<style lang="less">
.seachBox{
  // height: 100%;
  margin-bottom: 40px;
  // z-index: 9999;
  position: relative;
  .seach {
  padding: 10px 18px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  .man {
    // height: 20px;
    font-size: 26px;
    line-height: 35px;
    box-shadow: 1px 1px 11px #f5eaea;
    display: inline-block;
    border-radius: 50%;
  }
  .input {
    width: 90%;
    position: relative;
    border-radius: 15px;
    box-shadow: 1px 1px 11px #f5eaea;
    height: 35px;

    input {
      border-radius: 15px;
      height: 28px;
      width: 90%;
      padding-left: 15px;
      height: 100%;
      border: none;
      //  box-shadow: 1px 1px 11px #888888;
    }
    span {
      position: absolute;
      right: 15px;
      top: 8px;
      font-size: 18px;
    }
  }
}
.van-tables{
  padding-bottom: 50px;
}
.tubiaoBox {
  padding: 11px 14px;
  background-color: rgb(255, 255, 255);
  ul {
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid rgb(251, 251, 251);
    li {
      text-align: center;
      .red {
        color: rgb(255, 110, 94);
      }
      p {
        font-size: 33px;
        text-align: center;
      }
      span {
        text-align: center;
        font-size: 10px;
        line-height: 26px;
      }
      .blue {
        color: rgb(113, 149, 242);
      }
      .oakie {
        color: rgb(87, 199, 230);
      }
    }
  }
}
// 推荐
.thisWeek {
  padding: 0px 14px;
  border-bottom: 2px solid #fbfbfb;
  h2 {
    padding: 14px 0px;
    font-size: 16px;
    color: rgb(69, 69, 69);
  }
  .thisWeek-up {
    display: flex;
    padding-bottom: 20px;
    .left {
      height: 117px;
      flex: 1;
      img {
        height: 100%;
         width: 88px;
      }
    }
    .right {
      padding: 0px 10px;
       overflow: hidden;
       height: 117px;
      h1 {
        font-size: 14px;
        color: rgb(2, 2, 2);
        font-weight: 500;
        padding-bottom: 11px;
      }
      h3{
        font-size: 10px;
        color: rgb(152, 152, 154);
        font-weight: 400;
        padding-bottom: 16px;
      }
      p{
        font-size: 9px;
        color: rgb(152, 152, 154);
        line-height: 18px;
      }
    }
  }
  .thisWeek-bottom{
    display: flex;
    .thisWeek-bottom-Img{
      .img{
        img{
          height: 107px;
          width: 75px;
        }
         
      }
      h3{
         font-size: 10px;
        color: rgb(2, 2, 2);
        font-weight: 500;
        padding-top: 10px;
      }
      p{
        font-size: 8px;
        color: rgb(164, 164, 164);
        padding-top: 8px;
        padding-bottom: 16px;
      }
     
    }
  }
}
//人气推荐
.hotweek{
   padding: 0px 14px;
  border-bottom: 2px solid #fbfbfb;
   h2 {
    padding: 14px 0px;
    font-size: 16px;
    color: rgb(69, 69, 69);
  }

}
}

</style>
