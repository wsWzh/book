<template>
  <div class="boxadd">
    <div class="level2 j-fixedbar">
      <div class="title f-cb">
        <a class="mid">我的书架</a>
        <a class="left" @click="$router.go(-1)"
          ><span class="ui-leftaw-2"></span
        ></a>
        <a class="right" href="/">首页</a>
      </div>
      <!-- <div class="content">
        <van-swipe-cell>
         <div  class="goods-card" v-for="item in list" :key="item.index">
           <h1>{{item.title}}</h1>
         </div>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="del"
            />
          </template>
        </van-swipe-cell>
      </div> -->

      <div class="content">
        <van-divider>系统推荐</van-divider>
        <ul>
          <li v-for="item in content" :key="item.id" @click="bookid(item.id)">
            <div class="img">
              <img :src="item.cover" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>883章未读</p>
          </li>
        </ul>
        <van-divider>个人书架</van-divider>
        <ul>
          <li v-for="item in content1" :key="item.id" @click="bookid(item.id)">
            <div class="img">
              <img :src="item.cover" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>883章未读</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getShelf } from "../api/book"; //推荐阅读
import { findAll } from "../api/user";
export default {
  data() {
    return {
      
      content: null,
      content1: [],
    };
  },
  methods: {
    findAll() {
      findAll().then((res) => {
        console.log(res,1);
        let arr=res.data
        let arr1=[]
        arr.forEach(element => {
          if(element.id>7){
            arr1.push({
              cover:element.url,
              title:element.name,
              id:element.introduce
            })
          }
        });
        console.log(arr1,1);
        this.content1=arr1
      });
    },
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    del() {
      this.list = [];
    },
    //推荐阅读
    getShelfFun() {
      getShelf().then((data) => {
        console.log("tj", data);
        this.content = data.data.list;
        console.log(this.content);
      });
    },
    bookid(id) {
      console.log("书籍idid", id);
      this.$store.commit("bookidData", id);
      this.$router.push("/reader");
    },
  },
  created() {
    this.getShelfFun();
    this.findAll()
  },
};
</script>
<style lang="less">
.boxadd {
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  background: #f5f5f5;

  box-sizing: border-box;
  overflow: hidden;

  .level2 {
    width: 100%;
    z-index: 1;

    .title {
      position: relative;
      height: 44px;
      line-height: 44px;
      background-color: #e64d2e;
      a.mid {
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 18px;
        z-index: 999;
      }
      a {
        color: #fff;
      }
      a.left {
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
    }
    .content {
      padding: 15px 18px;

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
  }
}
.goods-card {
  margin: 0;
  background-color: white;
}
.delete-button {
  height: 100%;
}
</style>