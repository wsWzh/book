<template>
  <div class="Bestsellerlist">
    <!-- 畅销榜 -->
    <h3>
      <span class="gradient">重磅推荐</span>
      <a href="#" class="more">更多</a>
    </h3>
    <ul class="list c-fd">
      <li class="lr">
        <b class="rink-1"></b>
        <a href="#" class="pic">
          <img
            src="https://easyreadfs.nosdn.127.net/kLIz2uuOpyk5tJbZMLLbPw==/8796093025009675084?imageView&type=webp&thumbnail=240y336"
            alt=""
          />
        </a>
        <a href="#" class="info">
          <h4>青云直上</h4>
          <p>鹅城知县</p>
        </a>
      </li>

      <li class="lr">
        <b class="rink-2"></b>
        <a href="#" class="pic">
          <img
            src="https://easyreadfs.nosdn.127.net/kLIz2uuOpyk5tJbZMLLbPw==/8796093025009675084?imageView&type=webp&thumbnail=240y336"
            alt=""
          />
        </a>
        <a href="#" class="info">
          <h4>青云直上</h4>
          <p>鹅城知县</p>
        </a>
      </li>

      <li class="lr ll">
        <b class="rink-3"></b>
        <a href="#" class="pic">
          <img
            src="https://easyreadfs.nosdn.127.net/kLIz2uuOpyk5tJbZMLLbPw==/8796093025009675084?imageView&type=webp&thumbnail=240y336"
            alt=""
          />
        </a>
        <a href="#" class="info">
          <h4>青云直上</h4>
          <p>鹅城知县</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
a {
  color: #333;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.Bestsellerlist {
  margin: 0 20px 4px;
  padding: 15px 0 30px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  border-bottom: none;
  padding-bottom: 5px;
    ::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
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
  .list {
    width: 100%;
    transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    li {
      position: relative;
      float: left;
      width: 28%;
      margin-right: 8%;
      margin-bottom: 20px;
      b {
        position: absolute;
        top: -12px;
        left: 0;
        right: 0;
        width: 100%;
        height: 22px;
        background: 0 0 no-repeat;
        background-size: 100% auto;
        z-index: 9;
      }
      .rink-1 {
        background-image: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_01.png?5b202029);
      }
      .rink-2 {
        background-image: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_02.png?5c6f851f);
      }
      .rink-3 {
        background-image: url(https://m.yuedu.163.com/assets/mobile/images/index18/icon_03.png?96ad2cc6);
      }
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
      .info {
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
          -webkit-box-orient: vertical;
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
    .lr {
      margin-bottom: 0;
    }
    .ll {
      margin-right: 0;
    }
  }
  ul {
    ::after {
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
      content: ".";
    }
    li {
      ::after {
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        overflow: hidden;
        content: ".";
      }
    }
  }
}
</style>