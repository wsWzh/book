<template>
  <div class="mian">
    <!-- 左侧导航和回退按钮 -->

    <!-- 右侧标签页 -->
    <div class="rigth">
      <van-tabs  v-model="gender" @change="change" style="width:100%" >
        <van-tab  to="/" style="width:60px">
          <template #title> <van-icon name="arrow-left" size="20"/> </template>
        </van-tab>
        <van-tab title="男生" name="1"
          ><nsdh :gender="this.gender"></nsdh
        ></van-tab>
        <van-tab title="女生" name="2"
          ><nsdh :gender="this.gender"></nsdh
        ></van-tab>
        <van-tab title="出版" name="3"
          ><nsdh :gender="this.gender"></nsdh
        ></van-tab>
        <van-tab title="听书" name="4"
          ><nsdh :gender="this.gender"></nsdh
        ></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import nsdh from "../components/nsdh.vue"; //男生

export default {
  components: { nsdh },
  data() {
    return {
      activeName: "c",
      activeKey: "",
      gender: "", //性别
    };
  },
  comments: {
    nsdh,
  },
  computed: {},
  methods: {
    // 标签改变时
    change() {},
    // 判断展示的内容
    ifconten() {
      this.gender = sessionStorage.getItem("gender");
      console.log(this.gender);
    },
  },
  created() {
    this.ifconten();
  },
  mounted() {},
};
</script>
<style  scoped lang="less">
.rigth{
  width: 100%;
  position: sticky;
  top: 0;
}
</style>