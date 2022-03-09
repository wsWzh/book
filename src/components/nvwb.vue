<template>
  <div class="main">
    <div class="total">
      <router-link to="/" style="float: left; margin-left: 1rem">
        <van-icon name="arrow-left" to="/" size="20"
      /></router-link>
      <span class="zt">完本畅读</span>
    </div>
    <van-divider />
    <div class="zs" v-for="item in book" :key="item.id" @click="go(item.id)">
      <img width="100" :src="item.cover">
      <div class="tt">{{item.title}}</div>
      <div class="tt1">{{item.author}}/{{item.category}}</div>
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import{getBookList} from '../api/yc'
export default {
  data() {
    return {
      id:"83821f1710b74569a7afb68afac96d1c",//完本id
      book:"",//小说
    };
  },
  computed: {},
  methods: {
    go(id){
      this.$store.commit("bookidData", id);
      this.$router.push("/source");
    },
    getbook(){
      getBookList(this.id).then(res=>[
        this.book=res.data.books,
        console.log(res)
      ])
    }
  },
  created() {
    this.getbook();
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
  margin-left: 7rem;
}
.zs{
  position: relative;
  margin-top: 1rem;
}
.tt{
  position: absolute;
  top: 1%;
  left: 110px;
  font-size: 16px;
  font-weight: 600;
}
.tt1{
  position: absolute;
  top:21%;
  left: 110px;
  font-size: 12px;
}
.content{
  position: absolute;
  top: 46%;
  font-size: 12px;
  left: 110px;
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

}
</style>