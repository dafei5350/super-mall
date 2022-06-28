<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "@better-scroll/core"
export default {
  name: 'SuperMallScroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    isPullUp: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      scroll: null,
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0,
      itemImgLister: null
    };
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.isPullUp,
      scrollbar: {
        fade: false,
        interactive: true,
        interactiveScrollbar: true,
        speedRatioY: 0.2,
        size: '5px'
      }
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', position =>{
        this.$emit('scroll', position);
      });
    }
    if (this.isPullUp) {
      this.scroll.on('pullingUp', () =>{
        this.$emit('pullingUp');
      });
    }
  },

  methods: {

  },
};
</script>