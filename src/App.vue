<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  async mounted() {
    console.log(this.$store.state);
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
