import Vue from 'vue'
import Router from 'vue-router'
import My from "../components/my";
import List from "../components/list";
import Home from "../components/home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect :"/home"
    },{
      path:"/home",
      component:Home,
      name:"home"
    },
    {
      path:"/my",
      component:My,
      name:"my"
    },
    {
      path:"/list",
      component:List,
      name:"list",
    }
  ]
})
