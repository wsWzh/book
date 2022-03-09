<template>
  <div class="recommend">
    <!-- 重榜推荐 -->
    <h3>
      <span class="gradient">重磅推荐</span>
      <a href="#" class="more">更多</a>
    </h3>
    <!-- 图片 -->
    <ul class="m-book active">
      <li>
        <a href="#" class="pic">
          <img
            src="https://easyreadfs.nosdn.127.net/deQ1fyWNFDE97O8iFdMELg==/8796093025063783603?imageView&thumbnail=240y336"
            alt=""
          />
        </a>
        <a href="#" class="info">
          <h4>正义的使命</h4>
          <p>旖旎小哥</p>
        </a>
      </li>

      <li>
        <a href="#" class="pic">
          <img
            src="https://easyreadfs.nosdn.127.net/deQ1fyWNFDE97O8iFdMELg==/8796093025063783603?imageView&thumbnail=240y336"
            alt=""
          />
        </a>
        <a href="#" class="info">
          <h4>正义的使命</h4>
          <p>旖旎小哥</p>
        </a>
      </li>

      <li>
        <a href="#" class="pic">
          <img
            src="https://easyreadfs.nosdn.127.net/deQ1fyWNFDE97O8iFdMELg==/8796093025063783603?imageView&thumbnail=240y336"
            alt=""
          />
        </a>
        <a href="#" class="info">
          <h4>正义的使命</h4>
          <p>旖旎小哥</p>
        </a>
      </li>
    </ul>
    <ul class="m-book-list">
      <li class="m-book-single">
        <a href="#">
          <img
            src="https://easyreadfs.nosdn.127.net/FarMfGKWqJW64LKRbYhI4A==/8796093025060088072"
            alt=""
          />
          <h3>水浒之梁山太子</h3>
          <p class="p1">挑灯看剑</p>
          <p class="p2">
            特种兵晁云穿越到了水浒世界，附身在晁盖傻儿子身上，刚清醒过来才发现老爹已经前往曾头市送死了，千钧一发！偏偏二叔宋公明不鸟自己，咋办？盘他！赵宋朝廷欺负人，咋办？盘他！靖康之耻，女真入侵，咋办？还是两个字——盘他！两个字，揍他！水泊是我的，梁山是我的，整个大宋都是我的！谁跟我过不去，那就盘他！
          </p>
          <p class="tag">
            <span>连载</span>
            <span>历史</span>
            <span>315.29万字</span>
          </p>
        </a>
      </li>

      <!-- 一个 -->
      <li class="m-book-single">
        <a href="#">
          <img
            src="https://easyreadfs.nosdn.127.net/FarMfGKWqJW64LKRbYhI4A==/8796093025060088072"
            alt=""
          />
          <h3>水浒之梁山太子</h3>
          <p class="p1">挑灯看剑</p>
          <p class="p2">
            特种兵晁云穿越到了水浒世界，附身在晁盖傻儿子身上，刚清醒过来才发现老爹已经前往曾头市送死了，千钧一发！偏偏二叔宋公明不鸟自己，咋办？盘他！赵宋朝廷欺负人，咋办？盘他！靖康之耻，女真入侵，咋办？还是两个字——盘他！两个字，揍他！水泊是我的，梁山是我的，整个大宋都是我的！谁跟我过不去，那就盘他！
          </p>
          <p class="tag">
            <span>连载</span>
            <span>历史</span>
            <span>315.29万字</span>
          </p>
        </a>
      </li>

      <!-- 一个 -->
      <li class="m-book-single">
        <a href="#">
          <img
            src="https://easyreadfs.nosdn.127.net/FarMfGKWqJW64LKRbYhI4A==/8796093025060088072"
            alt=""
          />
          <h3>水浒之梁山太子</h3>
          <p class="p1">挑灯看剑</p>
          <p class="p2">
            特种兵晁云穿越到了水浒世界，附身在晁盖傻儿子身上，刚清醒过来才发现老爹已经前往曾头市送死了，千钧一发！偏偏二叔宋公明不鸟自己，咋办？盘他！赵宋朝廷欺负人，咋办？盘他！靖康之耻，女真入侵，咋办？还是两个字——盘他！两个字，揍他！水泊是我的，梁山是我的，整个大宋都是我的！谁跟我过不去，那就盘他！
          </p>
          <p class="tag">
            <span>连载</span>
            <span>历史</span>
            <span>315.29万字</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.recommend {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  h3 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 16px;
    .gradient {
      display: inline-block;
      font-size: 20px;
      color: #1a1a1a;
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

  .m-book {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    li {
      position: relative;
      float: left;
      width: 28%;
      margin-right: 8%;
      margin-bottom: 20px;
      .pic {
        position: relative;
        display: block;
        padding-bottom: 140%;
        height: 0;
        overflow: hidden;
        box-shadow: 0 5px 7px 0 rgb(0 0 0 / 9%), 0 2px 2px 0 rgb(0 0 0 / 3%);
        border-radius: 4px;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      a {
        color: #333;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        h4 {
          font-size: 15px;
          line-height: 19px;
          height: 38px;
          max-height: 38px;
          margin: 10px 0 5px;
          overflow: hidden;
          color: #222;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
        }
        p {
          color: #888;
          line-height: 15px;
          height: 15px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
  }
  .m-book-list {
    margin-top: 8px;
    .m-book-single {
      position: relative;
      margin-bottom: 20px;
      a {
        display: block;
        color: #333;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
        }
        p {
          font-size: 12px;
          color: #999;
        }
        .p1 {
          line-height: 14px;
          height: 14px;
          margin-bottom: 9px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .p2 {
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
  ::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }
}
</style>