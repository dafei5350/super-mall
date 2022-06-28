<template>
	<div class="goods-list-item">
		<img :src="item.ImgUrl" class="goods-list-img">
		<div class="goods-list-text">
			<div class="goods-list-name one-txt-cut">{{item.LongGoodsName}}</div>
			<div class="goods-list-price">
				<div class="text-pink">{{item.GoodsPrice}}</div>
				<!-- <div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div> -->
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'goodsItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },

  methods: {

  },
};
</script>
<style lang="less" scoped>
	.goods-list-item {
		width: 48%;
		height: auto;
		padding-top: 6px;
		font-size: 14px;
		.goods-list-img{
			width: 100%;
			height: auto;
			border-radius: 4px;
		}
		.goods-list-price {
			display: flex;
			justify-content: space-between;
			margin: 6px 0;
			.collect-icon {
				display: inline-block;
				width: 20px;
				height: 20px;
				background: url(~assets/images/home/collect_icon.png) no-repeat;
				background-size: cover;
				vertical-align: bottom;
			}
		}
	}
</style>
