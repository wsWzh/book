<template>
  
    <!-- 书架 -->
    <div class="book">
      <span>还没有最近阅读的书籍哦</span>
      <router-link to="/reado">
       <a class="href">书架</a>
      </router-link>
     
      <i></i>
    </div>
       
</template>
<style lang="less">
.book {
  position: relative;
  overflow: hidden;
  font-size: 15px;
  height: 55px;
  line-height: 55px;
  margin: 0 20px;
  border-bottom: 1px solid #ededed;
  span {
    float: left;
    color: #999;
    display: block;
    margin-right: 5px;
  }
  .href {
    display: block;
    float: right;
    color: #595550;
    background: url(https://easyreadfs.nosdn.127.net/web/trunk/1533607652166/icon_return.png)
      right center no-repeat;
    background-size: 8px;
    padding-right: 12px;
  }
}
</style>