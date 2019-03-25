export default {    
    handleGoods(state,params){
        state.goodsList =params;
        
    },
    handleClick(state,index){
       state.goodsList[index].flag = !state.goodsList[index].flag;
        
       var bStop = true;
        for(var i =0; i<state.goodsList.length;i++){
            if(!state.goodsList[i].flag){
                bStop  = false;
                break;
            }
        }
        state.allChecked = bStop;
    },
    handleAll(state){
        state.allChecked = !state.allChecked;
        
        state.goodsList.map((item)=>{
          item.flag = state.allChecked;
        })
    }
    
}