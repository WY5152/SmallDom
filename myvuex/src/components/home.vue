<template>
  <div class="goodsCart">
      <Top-com/>
      <Center-com/>
      <Bottom-com/>
  </div>
</template>

<script>
import Top from "./cart/top";
import Center from "./cart/center";
import Bottom from "./cart/bottom";
import Vuex from "vuex"; 
export default {
  created(){
    this.handleGoods()
  },
  components:{
    "Top-com":Top,
    "Bottom-com":Bottom,
    "Center-com":Center,
  },
  methods:{
    ...Vuex.mapActions({
      handleGoods:"tab/handleGoods"
    })
  }
};
</script>


<style lang="">
.goodsCart{
  width:1000px;
  margin:30px auto;
}
</style>