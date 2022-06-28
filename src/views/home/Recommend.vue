<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" v-bind:key="index"  class="recommend-item">
      <a :href="item.link" >
        <img :src="item.image" alt="" class="recommend-img">
        <div class="text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>


export default ({
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  },
})
</script>
<style lang="less" scoped>
	.recommend {
		display: flex;
		background-color: #fff;
		font-size: 12px;
		padding: 5px 0;
		border-bottom: 10px solid #ededed;
    a {
      text-decoration:none
    }
		.recommend-item {
			flex: 1;
			text-align: center;
			.recommend-img {
				width: 70px;
				height: 70px;

			}
      .text {
        padding: 0;
        text-decoration:none;
        color: pink;
        margin: 5px 0;
      }
		}
	}
</style>