<template>
  <div class="gooods" > 
    <div class="goodsItem"  v-for="(item,index) in goodsList" :key="index">
      <input type="checkbox" checked="falg" @click="handleClick(index)">
      <div class="goodsInfo">
        <img :src ="item.img">
        <p>{{item.goodsName}}</p>
      </div>
      <div class="price">￥{{item.price}}</div>
      <div class="count">
        <button>-</button>
        <input type="text" :value="item.num">
        <button>+</button>
      </div>
      <div class="total">11</div>
      <div class="del">删除</div>
    </div>
  </div>
</template> 

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      goodsList:state=>state.tab.goodsList,
    })
  },
  methods:{
    ...Vuex.mapMutations({
       handleClick:"tab/handleClick",

    })
  }
};
</script>

<style lang="">
.goodsItem {
  width: 100%;
  height: 80px;
  display: flex;
  background: #c1c1c1;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
}
.goodsInfo {
  display: flex;
  width: 300px;
}
.goodsInfo > img {
  width: 60px;
  height: 60px;
}
.price {
  margin-left: 64px;
}
.count > * {
  float: left;
}

.total {
  margin-left: 45px;
}
.del {
  margin-left: 80px;
}
</style>