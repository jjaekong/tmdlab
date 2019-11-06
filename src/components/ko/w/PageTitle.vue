<template>
    <div class="page-title">
      <slot name="category"></slot>
      <h3 class="title"><slot name="title"></slot></h3>
      <slot name="brand"></slot>
    </div>
</template>

<script>
export default {
    props: {
        category: null,
        brand: null,
    },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.page-title {
  margin-top: pxtovw(120px);
  display: flex;
  justify-content: center;
  align-items: center;
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: pxtovw(15px);
    padding-right: pxtovw(15px);
    //width: pxtovw(100px);
    height: pxtovw(40px);
    border: 1px solid #c5c5c5;
    border-radius: pxtovw(5px);
    color: #8b8b8b;
    font-size: pxtovw(18px);
    margin-right: pxtovw(20px);
  }
  .title {
    margin: 0;
    font-size: pxtovw(34px);
    line-height: pxtovw(40px);
    color: #222;
    font-weight: 900;
  }
  .brand {
    margin-left: pxtovw(15px);
    font-family: 'MontSerrat', sans-serif;
    font-weight: 900;
    color: #0160a1;
    font-size: pxtovw(20px);
  }
}
</style>