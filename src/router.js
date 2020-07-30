import Vue from "vue";
import Router from "vue-router";
// import WebHeader from "./layout/WebHeader";
// import WebFooter from "./layout/WebFooter";
import Home from "./views/Home.vue";
import Bio from "./views/Bio.vue";
import Collection from "./views/Collection.vue";
import Photography from "./views/Photography.vue";
// const a_chance_to_teach = () => import(/*webpackChunkName:"a_chance_to_teach"*/"./components/a_chance_to_teach.vue")
Vue.use(Router);

export default new Router({

  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        title: "Homepage"
      },
      component: Home,
      props: true
    },
    {
      path: "/Bio",
      name: "Bio",
      component: Bio,
      props: true
    },
    {
      path: "/Collection",
      name: "Collection",
      meta: {
        title: "Collection"
      },
      component: Collection,
      props: true
    },

    {
      path: "/Collection/:projectname",
      name: "CollectionDetails",
      props: true,
      component: () =>
        import(
          /*webpackChunkName:"a_chance_to_teach"*/ "./views/CollectionDetails.vue"
        )
    },
    {
      path: "/Photography",
      name: "Photography",
      props: true,
      component: Photography
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});



