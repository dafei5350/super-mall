<template>
  <div class="tab">
    <div v-for="(items, index) in tabs" v-bind:key="index" class="tabs-item" :class="{active: index == curIndex}" @click="itemTabs(index)">
      <div>{{items}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      curIndex: 0
    };
  },

  mounted() {

  },

  methods: {
    itemTabs(index) {
      this.curIndex = index;
      this.$emit('onTabsClicks', index);
    }
  },
};
</script>

<style scoped>
.tab {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  background: #fff;
}
.tabs-item {
  padding: 2px 2px;
}
.active {
  color: #ff6700;
  border-bottom: 3px solid #ff6700;
}
</style>