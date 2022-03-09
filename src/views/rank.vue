<template>
  <div>
    <!-- 加载插件 -->
    <hea-Der v-if="!flag"></hea-Der>
    <div v-if="flag">
      <!-- 头部组件 -->
      <headara></headara>
      <!-- 男生排行榜 -->
      <div class="m-list-boxxx">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">男生排行榜</span>
          </div>
          <a class="more" @click="routera">更多</a>
        </h3>
        <ul class="m-rank-list f-cb" id="J_sellrank_man" data-dot="wf1-2">
          <li class="top1">
            <a title="官场奇才">
              <em>1</em>
              <img
                src="https://easyreadfs.nosdn.127.net/CVNgl7zHsUSIXLGzyBg3gA==/8796093025003589570?imageView&amp;type=webp&amp;thumbnail=200y284"
                srcset="
                  https://easyreadfs.nosdn.127.net/CVNgl7zHsUSIXLGzyBg3gA==/8796093025003589570?imageView&amp;type=webp&amp;thumbnail=200y284 2x,
                  https://easyreadfs.nosdn.127.net/CVNgl7zHsUSIXLGzyBg3gA==/8796093025003589570?imageView&amp;type=webp&amp;thumbnail=300y426 3x
                "
                alt="官场奇才"
              />
              <h3>官场奇才</h3>
              <p class="p1">风和暖阳/都市</p>
              <p class="p2">
                奇谋算尽官场事，正气浩然天地魂。红颜知己身边伴，悲欢离合生死梦。且看一代官场奇才陆羽，从一个县长秘书到封疆大吏的跌宕起伏官场人生。
              </p>
            </a>
          </li>

          <li class="top top2">
            <a class="info">
              <em>2</em>
              <span>青云直上 </span>
            </a>
          </li>

          <li class="top top3">
            <a class="info">
              <em>3</em>
              <span>权路征途 </span>
            </a>
          </li>

          <li class="top top4">
            <a class="info">
              <em>4</em>
              <span>正义的使命 </span>
            </a>
          </li>

          <li class="top top5">
            <a class="info">
              <em>5</em>
              <span>一路高升 </span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 女生排行榜 -->
      <div class="m-list-boxxx">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">女生排行榜</span>
          </div>
          <a @click="femaleA" class="more">更多</a>
        </h3>
        <ul class="m-rank-list f-cb" id="J_sellrank_woman" data-dot="wf2-2">
          <li class="top1">
            <a title="南方有云烟">
              <em>1</em>
              <img
                src="https://easyreadfs.nosdn.127.net/cY0pDQEGLvLp_b8im88SQA==/8796093024845456648?imageView&amp;type=webp&amp;thumbnail=200y284"
                srcset="
                  https://easyreadfs.nosdn.127.net/cY0pDQEGLvLp_b8im88SQA==/8796093024845456648?imageView&amp;type=webp&amp;thumbnail=200y284 2x,
                  https://easyreadfs.nosdn.127.net/cY0pDQEGLvLp_b8im88SQA==/8796093024845456648?imageView&amp;type=webp&amp;thumbnail=300y426 3x
                "
                alt="南方有云烟"
              />
              <h3>南方有云烟</h3>
              <p class="p1">微微/现言</p>
              <p class="p2">
                十年深爱，却变成了他的嫂子，沦为了人人喊打的潘金莲在世，沦为入狱五年的阶下囚，他却不知那夜的女人是她。五年牢狱，因为霍北冥那句‘好好关照她’折磨的她模样大变，生下死胎。五年前，她求他信她，他不屑一顾，叫她嫂子。五年后，她愿意终身为亡夫守寡，他却死缠不休。南烟说：“霍先生，我错了，我做了五年牢了，求你放过我。”他说：“放过你，除非我死。”
              </p>
            </a>
          </li>

          <li class="top top2">
            <a class="info">
              <em>2</em>
              <span>小妻太娇嫩，枭爷轻点宠 </span>
            </a>
          </li>

          <li class="top top3">
            <a class="info">
              <em>3</em>
              <span>枕上婚宠：小甜妻在线求饶 </span>
            </a>
          </li>

          <li class="top top4">
            <a class="info">
              <em>4</em>
              <span>秘密情人别惹火 </span>
            </a>
          </li>

          <li class="top top5">
            <a class="info">
              <em>5</em>
              <span>将军夫人要休夫 </span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 图书排行榜 -->
      <div class="m-list-boxxx none">
        <h3 class="f-cb">
          <div class="f-fl">
            <em class="sep"></em><span class="gradient">图书排行榜</span>
          </div>
          <a class="more">更多</a>
        </h3>
        <ul class="m-rank-list f-cb" id="J_sellrank_publish" data-dot="wf3-2">
          <li class="top1">
            <a title="上古神话（全四册）">
              <em>1</em>
              <img
                src="https://easyreadfs.nosdn.127.net/aBbHNpx6RX7PZV9rkTMyZA==/8796093024895856292?imageView&amp;type=webp&amp;thumbnail=200y284"
                srcset="
                  https://easyreadfs.nosdn.127.net/aBbHNpx6RX7PZV9rkTMyZA==/8796093024895856292?imageView&amp;type=webp&amp;thumbnail=200y284 2x,
                  https://easyreadfs.nosdn.127.net/aBbHNpx6RX7PZV9rkTMyZA==/8796093024895856292?imageView&amp;type=webp&amp;thumbnail=300y426 3x
                "
                alt="上古神话（全四册）"
              />
              <h3>上古神话（全四册）</h3>
              <p class="p1">钟毓龙/人文历史</p>
              <p class="p2">
                《上古神话·第一卷》：本卷讲述帝喾、帝挚、帝尧三代历史，从少昊氏生于穷桑、帝喾辅佐颛顼述至帝尧师事尹寿、尹寿荐举许由等四贤。其中许多故事流传至今，如共工称霸九州、女娲炼石补天、共工触不周山、后稷初生遭三弃、黄帝与蚩尤争战等。
                《上古神话·第二卷》：本卷讲述帝尧巡守南方、西方等地，寻访贤人传位、舜诞生及九耕历山以德化人等事迹。其中许多故事流传至今，如逢蒙射羿、嫦娥奔月、后羿射日、共工治理黄河、鲧盗息壤、许由作歌、巢父洗耳、仓颉造字、舜耕历山等。
                《上古神话·第三卷》：
                本卷讲述帝尧命禹继承其父任治水之事。禹带领群众逢山山，遇洼筑堤，疏通水道，引洪海，终疏通九河。禹潜心治水，不辞劳苦，三过家门而不，最终消除了水患。
                《上古神话·第四卷》：本卷讲述禹出巡海外的非凡见闻、禹游昆仑时群仙集会、四方诸国来朝之盛景、舜后禹继天子位铸九鼎、禹仙去后启即位等事迹。其中许多故事流传至今，如夸父逐日、奇肱飞车、禹铸九鼎等。
              </p>
            </a>
          </li>

          <li class="top top2">
            <a class="info">
              <em>2</em>
              <span>股市趋势技术分析（原书第10版） </span>
            </a>
          </li>

          <li class="top top3">
            <a class="info">
              <em>3</em>
              <span>我纷纷的情欲 </span>
            </a>
          </li>

          <li class="top top4">
            <a class="info">
              <em>4</em>
              <span>责任：私募股权ESG投资新趋势 </span>
            </a>
          </li>

          <li class="top top5">
            <a class="info">
              <em>5</em>
              <span>如何不喜欢一个人 </span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 搜索 -->
      <sea-ch></sea-ch>
    </div>
  </div>
</template>
<script>
import {
  getShowRank,
  getRankNavi,
  getOriginal,
  getPublish,
  getRankListss,
} from "../api/rank"; //排行导航
import seaCh from "../components/seach.vue"; //搜索
import heaDer from "../components/load.vue"; //加载模块
import headara from "../components/header.vue"; //头部
export default {
  data() {
    return {
      flag: false,
      rankfen: null, //排行榜分类
      rankIndex: 0, //下标
      subNavis: 0,
      type: null, //类型
      rankName: null, //标题
      numberA: null,
    };
  },
  components: {
    seaCh,
    heaDer, //加载
    headara,
  },
  methods: {
    time() {
      if (this.flag == true) {
        setTimeout(t);
      }
      let t = setTimeout(() => {
        this.flag = true;
        console.log("定时器结束");
      }, 1000);
    },
    getShowRankFun() {
      getShowRank().then((data) => {
        console.log("排行导航", data);
      });
    },
    //排行榜分类
    getRankNaviFun() {
      getRankNavi().then((data) => {
        console.log("排行榜分类", data);
        this.rankfen =
          data.data.list[this.rankIndex].subNavis[
            this.subNavis
          ].naviInfos[0].url;
        this.type =
          data.data.list[this.rankIndex].subNavis[
            this.subNavis
          ].naviInfos[0].type;
        this.rankName =
          data.data.list[this.rankIndex].subNavis[
            this.subNavis
          ].naviInfos[0].name;

        //切割字符串
        var rankfenls = this.rankfen;
        var rankLength = rankfenls.length;
        var rankFss = rankfenls.substring(rankLength - 46, rankLength);
        var number = rankFss;
        var numberS = number.substring(0, 2);
        this.numberA = numberS;
        console.log(this.rankfen);
        console.log(this.type);
        console.log("类型", this.numberA);
      });
    },
    //排行榜列表
    getRankListssFun() {
      getRankListss({
        rankType: this.numberA,
        uuid: "ca03da7b64ca443ab25ec3b662fa91e2",
      }).then((data) => {
        console.log("//排行榜列表", data);
      });
    },
    // 原创小说排行榜-M
    getOriginalFun() {
      getOriginal().then((data) => {
        console.log("原创小说排行榜-M", data);
      });
    },
    //出版图书排行榜-M
    getPublishFun() {
      getPublish().then((data) => {
        console.log("出版图书排行榜-M", data);
      });
    },
    //切换列表
    qiehuan() {
      this.rankIndex += 1;
    },
    routera() {
      this.$router.push("/sell");
    },
    femaleA(){
      this.$router.push("/female")
    }
  },
  created() {
    this.time();
    this.getShowRankFun();
    this.getRankNaviFun();
    this.getRankListssFun();
    this.getOriginalFun();
    this.getPublishFun();
    this.qiehuan();
  },
};
</script>
<style lang="less">
.m-list-boxxx {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  h3 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 16px;
    .f-fl {
      float: left;
      .gradient {
        display: inline-block;
        font-size: 20px;
        color: #1a1a1a;
      }
    }
    a {
      color: #333;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .more {
      float: right;
      padding: 0 17px;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      box-sizing: border-box;
      border: 1px solid #f0f0f0;
      border-radius: 28px;
    }
  }
  .f-cd {
    ::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
  }
  .m-rank-list {
    li {
      position: relative;
      height: 18px;
      line-height: 18px;
      padding-bottom: 17px;
      font-size: 15px;
    }
    .top {
      em {
        display: block;
        width: 16px;
        height: 17px;
        color: #fff;
        text-align: center;
        float: left;
        margin-right: 10px;
        color: #6c6358;
      }
    }
    .top1 {
      height: 142px;
      margin-bottom: 15px;
      padding-bottom: 0;
      a {
        text-overflow: clip;
        white-space: normal;
        em {
          background: url(https://easyreadfs.nosdn.127.net/web/trunk/1476860251636/top1.png)
            0 0 no-repeat;
          position: absolute;
          top: -2px;
          display: block;
          width: 18px;
          height: 17px;
          background-size: contain;
          color: #fff;
          text-indent: 4px;
          left: 8px;
        }
        img {
          width: 100px;
          height: 142px;
          float: left;
          margin-right: 10px;
        }
        h3 {
          font-weight: normal;
          font-size: 16px;
          color: #3b352d;
          height: 17px;
          line-height: 17px;
          overflow: hidden;
          margin-bottom: 13px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .p1 {
          font-size: 12px;
          color: #aba59a;
          line-height: 13px;
          height: 13px;
          margin-bottom: 16px;
        }
        .p2 {
          font-size: 14px;
          line-height: 20px;
          height: 80px;
          color: #807a73;
          overflow: hidden;
          -webkit-line-clamp: 4;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
    .top2 {
      em {
        background: url(https://easyreadfs.nosdn.127.net/web/trunk/1476862076943/top2.png)
          0 0 no-repeat;
        background-size: contain;
        color: #fff;
        text-align: center;
      }
    }
    .top3 {
      em {
        background: url(https://easyreadfs.nosdn.127.net/web/trunk/1476862671892/top3.png)
          0 0 no-repeat;
        background-size: contain;
        color: #fff;
        text-align: center;
      }
    }
  }
}
.none {
  padding-bottom: 0;
}
footer {
  padding: 15px 20px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: -86px auto 0;
  nav {
    display: block;
    height: 28px;
    line-height: 28px;
    margin: 0 0 0 -22px;
    text-align: center;
    font-size: 0;
    a {
      margin: 0 0 0 22px;
      color: #999;
      font-size: 12px;
    }
    .cur {
      color: #e64d2e;
    }
  }
  .m-right {
    padding: 10px 0;
    color: #999;
    p {
      font-size: 14px;
      text-align: center;
    }
  }
}
.index {
  background-color: #fff;
  nav {
    a {
      font-size: 14px;
    }
  }
}
</style>