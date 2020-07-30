<template>
  <body id="app">
    <WebHeader />
    <fade-transition origin="center" mode="out-in" :duration="250">
      <router-view :key="$route.path" />
    </fade-transition>
    <WebFooter />
  </body>
</template>

<script>
import WebHeader from "./layout/WebHeader";
import WebFooter from "./layout/WebFooter";

export default {
  created() {
    this.$nextTick(() => {
      // 禁用右鍵
      document.oncontextmenu = new Function("event.returnValue=false");
      // 禁用選擇
      document.onselectstart = new Function("event.returnValue=false");
    });
  },

  components: {
    WebFooter,
    WebHeader
  }
};
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;*/
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
