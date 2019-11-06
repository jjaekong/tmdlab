<template>
    <footer id="footer">
        <button class="btn btn-link btn-top" @click="gotoTop()"><img src="@/assets/img/ico_arrow_top.png" alt="위로"></button>
        <h2><img src="@/assets/img/logo_white.png" alt="TMD Lab"></h2>
        <p class="slogan">Beyond a possibility, achievement of high-tech medical advancement</p>
        <address>
            <p>Avison Biomedical Research Center #525, 50-1 Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</p>
        </address>
    </footer>
</template>

<script>
import $ from "jquery";

export default {
    methods: {
        gotoTop: function () {
            $('html, body').stop().animate({ scrollTop: 0 }, 500);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

#footer {
    position: relative;
    padding: pxtovw2(80px) pxtovw2(40px) pxtovw2(100px);
    background: #222;
    color: #fff;
    .btn-top {
        position: absolute;
        top: pxtovw2(-26px);
        right: pxtovw2(44px);
        width: pxtovw2(70px);
        height: pxtovw2(70px);
        border-radius: 50%;
        background: #fff;
        border-radius: 50%;
        border: 0;
        padding: 0;
        box-shadow: 0px pxtovw2(5px) pxtovw2(19.95px) pxtovw2(1.05px) rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            display: block;
            width: pxtovw2(21px);
        }
    }
    h2 {
        height: pxtovw2(36px);
        margin-bottom: pxtovw2(90px);
        opacity: .22;
        img {
            display: block;
            height: 100%;
        }
    }
    .slogan {
        margin-bottom: 0;
        font-size: pxtovw2(28px);
        line-height: pxtovw2(66px);
        text-align: right;
        font-weight: 900;
    }
    address {
        margin-bottom: 0;
        text-align: right;
        p {
            margin-bottom: 0;
            font-size: pxtovw2(18px);
            line-height: pxtovw2(66px);
        }
        small {
            display: block;
            font-size: pxtovw2(16px);
            line-height: pxtovw2(20px);
            color: #7b7b7b;
        }
    }
}
</style>