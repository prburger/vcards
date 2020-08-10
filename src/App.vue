<template>
  <div id="app">
    <div id="nav">
      <topheader></topheader>
    </div>
    <router-view />
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";

export default {
  name: "app",
  components: {
    topheader: TopHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: Calibri, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.insert_button {
  width: 200px;
  float: left;
}

table {
  width: 100%;
  border: 0;
}
</style>
