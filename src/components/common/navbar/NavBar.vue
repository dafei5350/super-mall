<template>
  <div class="nav">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="conter">
      <slot name="conter"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

}
</script>

<style  scoped>
  .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: pink;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  }
   .conter {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 44px;
  }
  .left, .right {
    width: 60px;
    min-height: 44px;
  }
</style>