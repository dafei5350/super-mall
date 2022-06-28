<template>
	<div class="goods-list">
		<goodsItem v-for="(item, index) in goods" v-bind:key="index" :item="item" />
	</div>
</template>
<script>
import goodsItem from "./goodsItem.vue"
export default {
  name: 'GoodsList',
  components: {
    goodsItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style lang="less" scoped>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0 6px;
	}
</style>
