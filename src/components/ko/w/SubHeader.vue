<template>
    <div id="subheader">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: null
    }
}
</script>

<style lang="scss">
@import "./src/assets/css/functions.scss";

.web.introduce #subheader {
    background-image: url(../../../assets/img/subheader_intro.jpg);
}
.web.product #subheader {
    background-image: url(../../../assets/img/subheader_product.jpg);
}
.web.technology #subheader {
    background-image: url(../../../assets/img/subheader_technology.jpg);
}
.web.promotion #subheader {
    background-image: url(../../../assets/img/subheader_promotion.jpg);
}
.web.qna #subheader {
    background-image: url(../../../assets/img/subheader_qna.jpg);
}
.web.recruit #subheader {
    background-image: url(../../../assets/img/subheader_recruit.jpg);
}
</style>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

#subheader {
    padding-top: pxtovw(86px);
    height: pxtovw(300px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    h2 {
        margin: 0;
        color: #fff;
        font-size: pxtovw(42px);
    }
}
</style>