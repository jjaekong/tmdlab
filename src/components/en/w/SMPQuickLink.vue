<template>
    <a id="smp-is" href="#">
        <img src="@/assets/img/ico_smp.png"> 형상 기억 고분자란?
    </a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

#smp-is {
    z-index: 10;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: pxtovw(70px);
    //background: rgba(#000, .8);
    background-image: url(../../../assets/img/bg_smp_link.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    color: #fff;
    font-size: pxtovw(14px);
    box-shadow: 0px -5px 7px 0px rgba(42, 42, 42, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-right: 5px;
    }
}
</style>