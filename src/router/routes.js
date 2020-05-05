import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    //如果用params只能和name来组使用因为地址指定了以后后面带：号 如果用query可以和name搭配只用前提是地址不加：
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    //吧parames和query参数映射成属性传入路由组件
    props: (route) => ({
      keyword3: route.params.keyword,
      keyword4: route.query.keyword2,
    }),
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },
];
