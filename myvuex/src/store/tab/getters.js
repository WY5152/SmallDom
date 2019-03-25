export default {
    handleCunt(state){
        let goodsPrices = 0;
        let goodsSums = 0;
        state.goodsList.map((item)=>{
            if(item.flag){
                goodsPrices += (item.price*item.num),
                goodsSums += item.num
            }
        })
        return{
            goodsPrices,
            goodsSums
        }
    }
}