<template>
  <div id="app">
    <router-view/>
    <Footer-com/>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  components: {
    "Footer-com":Footer,
  }
};
</script>

<style>
</style>
