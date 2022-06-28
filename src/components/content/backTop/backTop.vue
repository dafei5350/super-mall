<template>
	<div class="back-top">
		<img src="~assets/images/back-top.png" />
	</div>
</template>

<script>
	export default {
		name: 'BackTop',
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.back-top {
		img {
			width: 30px;
			height: 30px;
		}
    background: white;
    padding: 10px;
    border-radius: 50%;
		position: fixed;
		bottom: 75px;
		right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}
</style>