<template>
    <div id="scroll-down">
        <div class="arrow">
            <span class="arrowbody"></span>
            <span class="arrowhead left"></span>
            <span class="arrowhead right"></span>
        </div>
        <span class="text">SCROLL DOWN</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#scroll-down {
    z-index: 10;
    position: fixed;
    bottom: pxtovw(40px);
    left: calc(50% - 3.125vw);
    width: pxtovw(120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
        color: #fff;
        font-size: pxtovw(10px);
        border-bottom: 1px solid rgba(#fff, .5);
        font-family: "MontSerrat", sans-serif;
    }
    .arrow {
        position: relative;
        width: pxtovw(16px);
        height: pxtovw(77px);
        margin-bottom: pxtovw(24px);
    }
    .arrowbody {
        margin: 0 auto;
        display: block;
        width: 1px;
        height: pxtovw(77px);
        background: #fff;
    }
    .arrowhead {
        display: block;
        width: 50%;
        height: 1px;
        background: #fff;
        &.left {
            position: absolute;
            bottom: 0;
            left: 0;
            background: #fff;
            transform: rotate(45deg);
            transform-origin: 100% 0;
        }
        &.right {
            position: absolute;
            bottom: 0;
            left: 50%;
            background: #fff;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
        }
    }
}
</style>