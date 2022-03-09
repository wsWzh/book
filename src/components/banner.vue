<template>
  <!-- 轮播图 -->
  <div>
    <div class="banner">
      <div class="imgs">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              src="https://img1.baidu.com/it/u=692595149,1514152469&fm=26&fmt=auto"
              alt=""
            />
          </van-swipe-item>

          <van-swipe-item>
            <img
              src="https://img1.baidu.com/it/u=692595149,1514152469&fm=26&fmt=auto"
              alt=""
            />
          </van-swipe-item>

          <van-swipe-item>
            <img
              src="https://img1.baidu.com/it/u=692595149,1514152469&fm=26&fmt=auto"
              alt=""
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container-01", {
      // pagination: '.swiper-pagination-01',
      slidesPerView: 4, //显示个数
      paginationClickable: true,
      observer: true,
      observeParents: true,
      // spaceBetween: 30 //div之间间距
    });
    new Swiper(".swiper-container-02", {
      pagination: ".swiper-pagination-02",
      slidesPerView: 3,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
    });
  },
};
</script>

<style lang="less">
.banner {
  height: 132px;
  position: relative;
  margin: 10px 0 0;
  .imgs {
    position: relative;
    left: 0px;
    right: 0px;
    top: 0px;
    margin: auto;
    width: 92%;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 126px;
    }
  }
}
</style>