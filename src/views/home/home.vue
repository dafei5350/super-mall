<template>
  <div id="home">
    <NavBar class="nav">
      <div slot="conter">首页</div>
    </NavBar>
    <Scroll
      ref="scroll"
      :probeType="3"
      :isPullUp="true"
      class="content">

      <HomeSwiper class="swiper-top" :banners="banners"></HomeSwiper>
      <Recommend :recommends="recommends"></Recommend>
      <Feature></Feature>
      <TabControl
        :tabs="['流行','新款','精选']"
        @onTabsClicks="tabsClicks"
        class="tab-top"></TabControl>
      <GoodsList :goods="showGoodList"></GoodsList>
    </Scroll>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar.vue"
import HomeSwiper from "components/content/home/HomeSwiper.vue"
import Scroll from "components/common/scroll/scroll.vue"
import {
  getHomeMultidata,
  getHomeGoods,
  getNewGoods,
  getKingGoods,
  } from "api/home"

import Recommend from "./Recommend.vue"
import Feature from "./Feature.vue"
import TabControl from "components/content/tabControl/tabControl.vue"
import GoodsList from "components/content/goodsList/goodsList.vue"

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      testData: {},
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell': {page: 0, list:[]}
      },
      currentType: 'pop',
      // isShowBackTop: false,
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0,
      itemImgLister: null
    };
  },
  created() {
    getHomeMultidata().then(res =>{
      console.log(res)
      this.testData = res.data
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    this.getHomeGoods('pop')
    this.getNewGoods('new')
    this.getKingGoods('sell')
  },
  computed: {
    showGoodList() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // 因为原接口废弃，此只是为了模拟数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(page,0, 30).then(res =>{
        this.goods[type].list.push(...res.data);//将数值保存在list中
        this.goods[type].page += 1;//page加1
        this.$refs.scroll.finishPullUp()
      })
    },
    getNewGoods(type) {
      const page = this.goods[type].page + 1;
      getNewGoods(page,2, 30).then(res =>{
        this.goods[type].list.push(...res.data);//将数值保存在list中
        this.goods[type].page += 1;//page加1
        this.$refs.scroll.finishPullUp()
      })
    },
    getKingGoods(type) {
      const page = this.goods[type].page + 1;
      getKingGoods(page,3, 30).then(res =>{
        this.goods[type].list.push(...res.data);//将数值保存在list中
        this.goods[type].page += 1;//page加1
        this.$refs.scroll.finishPullUp()
      })
    },

    tabsClicks(index) {
				switch(index){
					case 0:
					this.currentType = 'pop'
					break;
					case 1:
					this.currentType = 'new'
					break;
					case 2:
					this.currentType = 'sell'
					break;
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
    },
  }
}

</script>

<style>
	#home {
		position: relative;
		height: 100vh;
	}
	.nav {
		color: #fff;
		background-color: deeppink;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.tab-control-top {
		position: relative;
		top: 44px;
		z-index: 9;
	}
  .swiper-top {
    margin-top:44px;
  }
	.content {
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
	}
  .tab-top {
    position: sticky;
    top: 44px;
  }

</style>
