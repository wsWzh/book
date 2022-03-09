<template>
  <div class="main">
    <div class="total">
      <router-link to="/" style="float: left; margin-left: 1rem">
        <van-icon name="arrow-left" to="/" size="20"
      /></router-link>
      <span class="zt">{{name}}</span>
    </div>
    <div class="content">
      <iframe
        style="margin-top: 2rem; height: 1000px; width: 100%"
        :src="type"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      name:'',
    };
  },
  computed: {},
  methods: {
    geturl() {
      this.type = sessionStorage.getItem("rankurl")
      this.name = sessionStorage.getItem("rankname")
console.log(sessionStorage.getItem("rankname"));
      console.log(this.type);
    },
  },
  created() {
    this.geturl();
  },
  mounted() {},
};
</script>
<style  scoped>
.main {
  position: relative;
}
.total {
  width: 100%;
  font-weight: 600;
  margin-top: 10px;
}
.zt {
  margin-left: 8rem;
}
iframe {
}
</style>