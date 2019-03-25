<template>
    <div class="bottom">
        <label class="allSeleted">
            <input type="checkbox">
            <span>全选</span>
        </label>
        <div>删除所有商品</div>
        <div>已选{{handleCunt.goodsSums}}件商品</div>
        <div>总价{{handleCunt.goodsPrices}}</div>
        <div class="btn">结算</div>
       
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    computed:{
        ...Vuex.mapGetters({
            handleCunt:"tab/handleCunt"
        })
    }
}
</script>

<style lang="">
      .bottom{
        background: #ccc;
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 40px;
        align-items: center;
    }

     .bottom>.btn{
         width: 80px;
         height: 100%;
         background: #c33;
         color: #fff;
         text-align: center;
         line-height: 40px;
     }
</style>