<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabBar/MainTabBar.vue"
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  created() {

  },
  methods: {


  }
}

</script>

<style>

</style>
