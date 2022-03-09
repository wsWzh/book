<template>
  <div class="sell">
    <div class="title f-cb">
      <a class="mid">女生小说畅销榜</a>

      <router-link tag="p" to="/" class="left"
        ><span class="ui-leftaw-2"></span
      ></router-link>

      <a class="right" href="/">首页</a>
      <a class="left-search"
        ><router-link tag="span" to="/seach" class="ui-search"></router-link
      ></a>
    </div>

    <van-tabs class="van-tables" v-model="active" swipeable animated sticky>
      <van-tab title="日榜">
        <div class="m-list-box wrap j-empty-hide">
          <div
            class="m-book-single"
            v-for="(item, index) in ranks"
            :key="index"
            @click="rankSB"
          >
            <div class="wrap f-cb">
              <img class="img" :src="item.iconUrl" alt="巅峰红人" />
              <h3>
                <b class="rank rank-0">TOP.{{ index + 1 }}</b> {{ item.title }}
              </h3>
              <p class="p1">{{ item.author }}</p>
              <p class="abstract">
                {{ item.description }}
              </p>
              <p class="tag">
                <span>连载中</span>

                <span>{{ item.category }}</span>
                <span>{{ item.showTotalCount }}</span>
              </p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="周榜">
        <div class="m-list-box wrap j-empty-hide">
          <div
            class="m-book-single"
            v-for="(item, index) in moudday"
            :key="index"
            @click="rankSB"
          >
            <div class="wrap f-cb">
              <img class="img" :src="item.iconUrl" alt="巅峰红人" />
              <h3>
                <b class="rank rank-0">TOP.{{ index + 1 }}</b> {{ item.title }}
              </h3>
              <p class="p1">{{ item.author }}</p>
              <p class="abstract">
                {{ item.description }}
              </p>
              <p class="tag">
                <span>连载中</span>

                <span>{{ item.category }}</span>
                <span>{{ item.showTotalCount }}</span>
              </p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="月榜">
        <div class="m-list-box wrap j-empty-hide">
          <div
            class="m-book-single"
            v-for="(item, index) in month"
            :key="index"
            @click="rankSB"
          >
            <div class="wrap f-cb">
              <img class="img" :src="item.iconUrl" alt="巅峰红人" />
              <h3>
                <b class="rank rank-0">TOP.{{ index + 1 }}</b> {{ item.title }}
              </h3>
              <p class="p1">{{ item.author }}</p>
              <p class="abstract">
                {{ item.description }}
              </p>
              <p class="tag">
                <span>连载中</span>
                <span>{{ item.category }}</span>
                <span>{{ item.showTotalCount }}</span>
              </p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getOriginal } from "../api/rank";
import { getRankweek } from "../api/week"; //周榜
import { getRankmonth } from "../api/month"; //月榜
export default {
  data() {
    return {
      ranks: null,
      moudday: null,
      week: "week",
      male: "male",
      month: null,
      uuid: null,
      uuidIndex: 0,
      active: 0,
    };
  },
  methods: {
    // 原创小说排行榜-M
    getOriginalFun() {
      getOriginal({ gender: "female", sortType: "day" }).then((data) => {
        console.log("原创小说排行榜-M", data);
        this.ranks = data.data.books;
        this.uuid = data.data.books[this.uuidIndex].sourceUrl;
        console.log(this.ranks);
        console.log(this.uuid);
      });
    },
    // 周榜
    getRankweekFun() {
      getRankweek({ gender: "female", sortType: "week" }).then((data) => {
        console.log("原创小说排行榜-周", data);
        this.moudday = data.data.books;
        console.log(this.moudday);
      });
    },
    //月榜
    getRankmonthFun() {
      getRankmonth({ gender: "female", sortType: "month" }).then((data) => {
        console.log("原创小说排行榜-yue", data);
        this.month = data.data.books;
        console.log(this.month);
      });
    },
    rankSB() {
      this.$store.commit("ranksData", this.uuid);
      this.$router.push("/reader");
    },
  },
  created() {
    this.getOriginalFun();
    this.getRankweekFun();
    this.getRankmonthFun();
  },
};
</script>
<style lang="less">
.sell {
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
  .m-list-box.wrap {
    padding: 17px 20px;
    .m-book-single {
      position: relative;
      margin-bottom: 20px;
      .f-cb:after,
      .f-cbli li:after {
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        overflow: hidden;
        content: ".";
      }
      .wrap {
        img {
          float: left;
          width: 82px;
          height: 115px;
          margin-right: 15px;
          box-shadow: 0 5px 7px 0 rgb(0 0 0 / 9%), 0px 2px 2px 0 rgb(0 0 0 / 3%);
          border-radius: 4px;
        }
        h3 {
          font-weight: normal;
          font-size: 17px;
          color: #222;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          margin-bottom: 7px;
          text-overflow: ellipsis;
          white-space: nowrap;
          .rank-0:nth-of-type(1) {
            color: #e64d2e;
          }
          .rank-0:nth-of-type(2) {
            color: #ff9828;
          }
          .rank-0:nth-of-type(3) {
            color: #fcc951;
          }
        }
        p {
          font-size: 12px;
          color: #999;
        }
        p:nth-of-type(1) {
          line-height: 14px;
          height: 14px;
          margin-bottom: 9px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        p:nth-of-type(2) {
          line-height: 18px;
          height: 36px;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tag {
          position: absolute;
          left: 97px;
          bottom: 0;
          white-space: nowrap;
          span {
            display: inline-block;
            margin-right: 2px;
            padding: 0 12px;
            height: 22px;
            line-height: 22px;
            font-size: 10px;
            color: #999;
            background-image: linear-gradient(3deg, #f9f9f9 0, #f0f0f0 100%);
            border-radius: 22px;
          }
        }
      }
    }
  }
}
</style>