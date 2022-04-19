<template>
  <!-- 书籍详情 -->
  <div>
    <div class="title f-cb">
      <a class="mid">书籍详情</a>

      <router-link tag="p" to="/" class="left"><span class="ui-leftaw-2"></span></router-link>

      <a class="right" href="/">首页</a>
      <a class="left-search">
        <router-link tag="span" to="/category" class="ui-search"></router-link>
      </a>
    </div>

    <!-- 书籍信息 -->

    <div class="m-book-info">
      <div class="info">
        <div class="img">
          <img :src="img" />
        </div>
        <h1>{{ title }}</h1>
        <p>作者:{{ author }}</p>
        <p>分类:{{ category }} | 连载中</p>
        <p>字数:{{ totalArticleCount }}万</p>
        <p>
          {{ subscribe }}
          <span class="w-star2 sep">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p>授权方:{{ company }}</p>
      </div>
      <div class="j-actions">
        <div class="btns">
          <a class="ui-blue two j-log" @click="bookid()">{{yd}}</a>

          <a  id="J_Offline" @click="upda" class="ui-blue-light two J_openClinet j-log">{{shujia}}</a>
        </div>
      </div>
     
    </div>
    <!-- 章节更新 -->
    <div class="m-book-recent">
      <a class="titles">{{ simpleInfo }}</a>
      <p class="time">{{ timeraa }}更新</p>
      <i></i>
    </div>

    <!-- 书籍内容 -->
    <div class="m-book-detail j-intro-wrap">
      <h4 class="m-book-title">内容简介</h4>
      <p class="content j-intro">
        {{ summary }}
      </p>
    </div>

    <!-- 目录 -->
    <div class="m-book-directory" v-if="catalog">
      <h4 class="m-book-title">
        目录<span class="j-cata-length">(共{{ catalog.length }}章)</span><a class="sort j-squece"
          @click="daoxu">倒序<i></i></a>
      </h4>
      <div class="j-cata catalist">
        <ul v-if="!showaad">
          <li class="grade_01">
            <div><i></i></div>
          </li>
          <li class="grade_02" v-for="(item, index) in Arr" :key="index" @click="add(item.uuid, index)">
            <div>{{ item.title }}<i></i></div>
          </li>
        </ul>
        <ul v-if="showaad">
          <li class="grade_02" v-for="(item, index) in newArr" :key="index" @click="add(item.uuid, index)">
            <div>{{ item.title }}<i></i></div>
          </li>
        </ul>
        <router-link tag="div" :to="{ path: '/catalogue', query: { id: sourceUuid } }" class="more">
          <span>更多目录</span>
          <i></i>
        </router-link>
        <van-divider />
        <h4>
          精彩评论<span>({{ plnum }})</span>
        </h4>
        <div class="pl" v-for="(item, index) in plnr" :key="index">
          <div class="img1" style="border-radius: 50%">
            <img width="34" src="	https://yuedust.yuedu.126.net/assets/mobile/images/tx-default.png" alt="" />
          </div>
          <div class="jt">
            <div>{{ item.nickName }}</div>
            <!-- 评分 -->
            <!-- <div><van-rate size="10px" v-model="item.userLevel" /></div> -->
            <div>{{ item.comment }}</div>
            <van-divider />
          </div>
        </div>
      </div>
      <!-- 精彩评论 -->

      <!-- <div class="m-book-directory">
        <h4 class="m-book-title">
          精彩评论<span class="j-cata-length">(共{{ catalog.length }}章)</span
          ><a class="sort j-squece" @click="daoxu">倒序<i></i></a>
        </h4>
      </div> -->
    </div>
  </div>
</template>
<script>
  import { getSub, getSimpleInfo, getCatalog } from "../api/base";
  import { get } from "../api/https";
  import { Toast } from "vant";
  // import { update } from "../api/user";
  import { post } from '@/api/request'
  import { findAll,dele } from "../api/user";
  export default {
    data() {
      return {
        shujia: '加入书架',
        yd: '',
        show2: window.localStorage.getItem("uuid"),
        value: 5,
        show: false,
        sourceUuid: "", //书籍id
        source: null, //内容
        title: null,
        summary: null, //简介
        img: null, //照片
        author: null, //作者
        company: null, //公司
        category: null, //类型
        subscribe: null, //双击
        totalArticleCount: null, //字数
        id: null, //书籍id
        sourceUrl: null, //分类书籍链接
        simpleInfo: null, //最新章节
        update: null, //时间
        timeraa: null, //更新时间
        catalog: "", //章节列表
        uuid: null, //章节id
        newArr: [], //倒序
        showaad: false,
        rankUrl: null, //排行榜url
        Arr: [],
        plnum: 0,
        plnr: "",
        ycid:''
      };
    },
    methods: {
      findAll(id){
        findAll().then(res=>{
          console.log(res,'书架');
          let data=res.data
          for(let i=5;i<data.length;i++){
            if(id==data[i].introduce){
              this.ycid=data[i].id
            }
          }
          let arr=[]
          data.forEach(element => {
            arr.push(
              element.introduce
            )
          });
          console.log(arr);
          let a=arr.indexOf(id)
          if(a>-1){
            this.shujia='移除书架'
          }
        })
      },
      // 添加书架or移除书架
      async upda() {
        if(this.shujia=='移除书架'){
          dele(this.ycid).then(res=>{
            console.log(res);
            if(res.status==200){
            this.shujia='添加书架'
            Toast('移除成功')
            }
          })
        }else{
          let data = {};
        // 书id

        // 书名
        data.name = this.title;
        // 作者
        data.introduce = this.id;
        // 图片
        data.url = this.img;
        const res = await post('/carousel/saveOrUpdate', data)
        if (res.status == 200) {
          Toast('添加成功')
          this.shujia='移除书架'
        } else {
          Toast('添加失败')
        }
        console.log(res);
   

        }
       
      },
      //评论
      getpl() { },
      bookid(index) {
        this.$router.push({
          path: "/reader",
          query: {
            index,
          },
        });
      },
      showPopup() {
        this.show = true;
      },
      // 书籍详情
      getSubFun() {

        if (this.$route.query.index == 1) {
          console.log("分类");
          let url = this.$store.state.sourceUrl;
          this.sourceUuid = url.slice(8);
          this.$store.commit("bookidData", this.sourceUuid);
        } else {
          this.sourceUuid = this.$store.state.bookid; //书籍id
        }
        // this.sourceUuid = "654ebfbcccd64b3ea0a51934953f300e_4";
        console.log(this.$store.state.bookid, 12);
        //分类id
        console.log(this.sourceUuid, 123);
        this.sourceUrl = this.$store.state.sourceUrl;
        console.log(this.sourceUrl, 111);
        let disName = this.sourceUrl;
        let diaNameLegth = disName.length;
        let showetName = disName.substring(diaNameLegth - 37, diaNameLegth);
        // this.sourceUuid = showetName;
        console.log(showetName, 1234);

        this.rankUrl = this.$store.state.rankUrl;
        console.log(this.rankUrl);
        var rankf = this.rankUrl;
        var rankLen = rankf.length;
        var rankFsssa = rankf.substring(rankLen - 37, rankLen);
        console.log(rankFsssa);
        console.log(1111555)
        if (window.localStorage.getItem(`uuid${this.sourceUuid}`)) {
          this.yd = '继续阅读'
        }else{
          this.yd = '立即阅读'

        }
        this.findAll(this.sourceUuid)
        // this.sourceUuid = rankFsssa
        console.log(this.sourceUuid, 1);
        getSub({ id: this.sourceUuid }).then((data) => {
          console.log("书籍详情", data);
          this.source = data.feed.entry;
          this.title = data.feed.entry.title;
          this.summary = data.feed.entry.summary;
          this.img = data.feed.entry.link[2].href;
          this.author = data.feed.entry.author.name;
          this.company = data.feed.entry["pris:book"].authorizer;
          this.category = data.feed.entry["pris:book"].category;
          // pris:subscribe
          this.subscribe = data.feed.entry["pris:subscribe"].clicks;
          this.totalArticleCount =
            data.feed.entry["pris:book"].totalArticleCount[0];
          this.id = data.feed.entry.id;
          console.log(this.source);
          console.log(this.title);
          console.log(55, this.id);
        });
        //最新章节
        getSimpleInfo({ id: this.sourceUuid }).then((data) => {
          console.log(data);
          this.simpleInfo = data.item.latestArticleTitle;
          //时间戳转换
          this.update = data.item.update;
          var timers = new Date(this.update);
          // console.log(timers);
          var srr =
            timers.toLocaleDateString().replace(/\//g, "-") +
            " " +
            timers.toTimeString().substr(0, 8);
          this.timeraa = srr;
          // console.log(srr);
        });

        //章节列表
        getCatalog({ source_uuid: this.sourceUuid }).then((data) => {
          this.catalog = data.data.catalog; //章节列表
          for (let i = 0; i < 5; i++) {
            this.Arr.push(this.catalog[i]);
          }
          for (let i = 0; i < 5; i++) {
            this.newArr.unshift(this.catalog[i]); //倒序
          }

          console.log(this.Arr, "zx");
        });
        //pl
        get(
          `https://apis.netstart.cn/yunyuedu/comment/getComments.json?bookId=${this.sourceUuid}`
        ).then((res) => {
          console.log(res, "评论");
          this.plnum = res.all.list.length;
          this.plnr = res.all.list;
          this.value = Math.ceil(Math.random());
          // console.log(value,'评分');
        });
      },

      add(uuid, index) {
        this.uuid = uuid;
        this.$store.commit("getUUid", uuid);
        this.$router.push({
          path: "/reader",
          query: {
            uuid,
            index,
          },
        });
      },
      //倒序
      daoxu() {
        this.showaad = !this.showaad;
      },
    },
    created() {
      this.getSubFun(); //书籍详情
      this.getpl();
      // this.findAll();
    },
  };
</script>
<style lang="less">
  .jt {
    position: absolute;
    left: 45px;
    top: 1px;
    font-size: 12px;
  }

  .pl {
    position: relative;
    margin-top: 1rem;
    height: 5rem;
  }

  .img1 {
    width: 34px;
    height: 34px;
  }

  .f-cb,
  .f-cbli li {
    &::after {
      display: block;
      clear: both;
      visibility: hidden;
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
        background: url(https://yuedust.yuedu.126.net/assets/mobile/images/common/arrow-left.png?62b78c05) 0 0;
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
        background: url(https://yuedust.yuedu.126.net/assets/mobile/images/common/search.png?9b6cd016) 0 0;
        background-size: 100% 100%;
      }
    }
  }

  .m-book-info {
    padding: 15px;
    background: #fff;
    color: #888;

    .info {
      .img {
        float: left;
        position: relative;
        margin-right: 10px;
        line-height: 0;

        img {
          width: 93px;
          height: 130px;
        }
      }

      h1 {
        font-size: 16px;
        margin-bottom: 5px;
        color: #1d2c33;
        height: 1.14em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      p {
        line-height: 1.8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;

        .w-star2.sep {
          margin-left: 5px;
        }

        .w-star2 {
          display: inline-block;
        }

        .w-star2,
        .w-star2 span {
          height: 10px;
          overflow: hidden;
        }

        .w-star2 span {
          float: left;
          width: 10px;
          margin-right: 5px;
          background-image: url(https://yuedust.yuedu.126.net/assets/mobile/images/book-detail/star-light.png?13871f2f);
          background-size: 100% 100%;
        }

        .w-star2,
        .w-star2 span {
          height: 10px;
          overflow: hidden;
        }
      }
    }

    .j-actions {
      .btns {
        &::after {
          content: " ";
          display: table;
          clear: both;
          height: 0;
        }

        clear: both;
        padding-top: 15px;
        position: relative;

        a.two:first-child {
          float: left;
        }

        a.two {
          width: 44%;
        }

        a {
          border-width: 1px px;
        }

        .ui-blue {
          background-color: #3c98c9;
          border: #3c98c9 solid 1px;
          color: #fff;
          --webkit-box-sizing: border-box;
          display: inline-block;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          vertical-align: middle;
          border-radius: 3px;
        }

        a.two:last-child {
          float: right;
        }

        .ui-blue-light {
          background-color: #fff;
          border: #3b98c9 solid 1px;
          color: #3b98c9;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          display: inline-block;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          vertical-align: middle;
          border-radius: 3px;
        }
      }
    }
  }

  .m-book-recent {
    position: relative;
    padding: 20px 15px 20px 45px;
    background-color: #ebe8e6;
    border-top: 1px solid #e8e7e6;

    .titles {
      font-size: 14px;
      color: #3a98c9;
    }

    .time {
      color: #aba499;
      margin-top: 5px;
      font-size: 12px;
    }

    i {
      position: absolute;
      top: 20px;
      left: 15px;
      display: block;
      width: 25px;
      height: 15px;
      background: url(https://yuedust.yuedu.126.net/assets/mobile/images/book-detail/icon-recent.png?48ed274f) 0 0 no-repeat;
      background-size: 100% 100%;
      text-indent: -9999px;
    }
  }

  .m-book-detail {
    background: #faf7f5;
    padding: 15px 15px 20px;
    border-top: 1px solid #e8e7e6;

    .m-book-title {
      color: #1d2c33;
      font-size: 16px;
    }

    .content {
      font-size: 14px;
      color: #979999;
      line-height: 20px;
      -webkit-line-clamp: 4;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding-top: 12px;
    }
  }

  // 目录
  .m-book-directory {
    background: #faf7f5;
    padding: 15px 15px 20px;
    border-top: 1px solid #e8e7e6;
    border-bottom: 1px solid #e8e7e6;

    .m-book-title {
      color: #1d2c33;
      font-size: 16px;

      span {
        color: #aba49a;
        font-size: 12px;
        font-weight: normal;
      }

      .sort {
        position: relative;
        margin-top: 2px;
        color: #3a98c9;
        font-size: 14px;
        float: right;
        padding-right: 13px;
        font-weight: normal;

        i {
          position: absolute;
          top: 3px;
          right: 0;
          width: 9px;
          height: 10px;
          display: block;
          background: url(https://yuedust.yuedu.126.net/assets/mobile/images/book-detail/arrow-up.png?12603ac3) 0 0 no-repeat;
          background-size: 100% 100%;
        }
      }
    }

    .catalist {
      position: relative;
      padding-top: 12px;

      ul {
        li {
          list-style: none;

          div {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            line-height: 1.7;
            display: block;
            color: #979999;
          }
        }

        .grade_02 {
          text-indent: 2em;
        }
      }

      .more {
        display: block;
        margin-top: 14px;
        height: 29px;
        line-height: 27px;
        background-color: #faf7f5;
        color: #998d7f;
        text-align: center;
        border: 1px solid #e4e0dd;
        border-radius: 3px;
        line-height: 27px;
        text-align: center;
        font-size: 12px;

        i {
          width: 6px;
          height: 9px;
          vertical-align: middle;
          display: inline-block;
          margin-left: 3px;
          background: url(https://yuedust.yuedu.126.net/assets/mobile/images/book-detail/arrow-right.png?f11cbfe1) 0 0 no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
</style>