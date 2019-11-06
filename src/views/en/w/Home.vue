<template>
    <div class="web home">
        <Header />
        <div class="swiper-container swiper-container-v">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <Welcome />
                </div>
                <div class="swiper-slide">
                    <Introduce />
                </div>
                <div class="swiper-slide">
                    <TechSMP />
                </div>
                <div class="swiper-slide">
                    <TechCNV />
                </div>
                <div class="swiper-slide">
                    <Promotion />
                </div>
                <div class="swiper-slide">
                    <Qna />
                </div>
            </div>
        </div>
        <Footer />
        <ScrollDown />
    </div>
</template>

<script>
import Header from '@/components/en/w/Header.vue'
import Footer from '@/components/en/w/Footer.vue'
import ScrollDown from '@/components/en/w/ScrollDown.vue'

import Welcome from '@/views/en/w/home/Welcome.vue'
import Introduce from '@/views/en/w/home/Introduce.vue'
import TechSMP from '@/views/en/w/home/TechSMP.vue'
import TechCNV from '@/views/en/w/home/TechCNV.vue'
import Promotion from '@/views/en/w/home/Promotion.vue'
import Qna from '@/views/en/w/home/Qna.vue'

import $ from 'jquery'
import Swiper from 'swiper'

// import { Swiper, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/dist/js/swiper.esm.js'
// Swiper.use([Navigation, Pagination, Mousewheel, Keyboard])

// import 'swiper/dist/css/swiper.min.css'

export default {
    components: {
        Header, Footer,
        ScrollDown,
        Welcome,
        Introduce,
        TechSMP,
        TechCNV,
        Promotion,
        Qna
    },
    data: function() {
        return {
            swiperVerical: null,
            showFooter: false,
            // swiperHorizontal: null,
        }
    },
    mounted: function() {
        //console.log('home mounted')
        this.swiperVerical = new Swiper ('.home.web .swiper-container-v', {
            slidesPerView: 'auto',
            direction: 'vertical',
            spaceBetween: 0,
            allowTouchMove: false,
        })
        var self = this
        $(window).on('mousewheel', function(e) {
            //console.log(e.originalEvent.deltaY)
            if (self.swiperVerical.animating) return;
            if (e.originalEvent.deltaY > 0) {
                // console.log('메인 아래로', self.swiperVerical.realIndex)
                if (self.swiperVerical.realIndex >= self.swiperVerical.slides.length - 1) {
                    self.showFooter = true
                    $('.home.web').stop().animate({ scrollTop: $('#footer').outerHeight() })
                } else {
                    self.swiperVerical.slideNext()
                }
            }
            if (e.originalEvent.deltaY < 0) {
                // console.log('메인 위로', self.swiperVerical.realIndex)
                if (self.showFooter) {
                    $('.home.web').stop().animate({ scrollTop: 0 }, function() {
                        self.showFooter = false
                    })
                } else {
                    self.swiperVerical.slidePrev()
                }
            }
        })
    },
    destroyed: function() {
        //console.log('home destroyed')
        $(window).off('mousewheel');
    }
}
</script>

<style lang="scss">
.home.web {
    .slide {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scale(1);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
        }
    }
    .swiper-slide-active {
        .slide {
            .bg {
                transform: scale(1.1);
                transition: transform 20s .5s;
            }
        }
    }
    .welcome {
        height: 100% !important;
        .bg {
            background-image: url('../../../assets/img/bg_home_1_1.jpg');
        }
        .title {
            span:nth-of-type(1) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            .bar {
                width: 0;
            }
        }
        .desc {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .detail {
            position: relative;
            top: 1vw;
            opacity: 0;
            background: transparent;
            &:focus, &:hover {
                background: rgba(#fff, .1);
            }
        }
        .news-list {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
    }
    .swiper-slide-active {
        .welcome {
            .title {
                span:nth-of-type(1) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .5s;
                }
                .bar {
                    width: 7.03125vw;
                    transition: all .3s .8s;
                }
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s 1.1s;
            }
            .detail {
                top: 0;
                opacity: 1;
                transition: opacity .3s 1.2s, top .3s 1.2s, background .2s;
            }
            .news-list {
                top: 0;
                opacity: 1;
                transition: all .3s 1.3s;
            }
        }
    }
    .introduce {
        height: 100% !important;
        .bg {
            background-image: url(../../../assets/img/bg_home_1_2.jpg);
        }
        .category {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .title {
            span:nth-of-type(1) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            span:nth-of-type(2) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            span:nth-of-type(3) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            span:nth-of-type(4) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            .bar {
                width: 0;
            }
            span:nth-of-type(6) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
        }
        .subtitle {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .desc {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .more {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
    }
    .swiper-slide-active {
        .introduce {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .title {
                span:nth-of-type(1) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .6s;
                }
                span:nth-of-type(2) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .7s;
                }
                span:nth-of-type(3) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .8s;
                }
                span:nth-of-type(4) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .9s;
                }
                .bar {
                    width: 7.03125vw;
                    transition: width .3s 1.2s;
                }
                span:nth-of-type(6) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s 1.5s;
                }
            }
            .subtitle {
                top: 0;
                opacity: 1;
                transition: all .3s 1.6s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s 1.7s;
            }
            .more {
                top: 0;
                opacity: 1;
                transition: all .3s 1.8s;
            }
        }
    }
    .tech.smp {
        height: 100% !important;
        .bg {
            background-image: url(../../../assets/img/bg_home_2_1.jpg);
        }
        .category {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .title {
            span:nth-of-type(1) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            span:nth-of-type(2) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            span:nth-of-type(3) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            .bar {
                width: 0;
            }
            span:nth-of-type(5) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
        }
        .subtitle {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .desc {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .more {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .quick-link {
            opacity: 0;
        }
    }
    .swiper-slide-active {
        .tech.smp {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .title {
                span:nth-of-type(1) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .6s;
                }
                span:nth-of-type(2) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .7s;
                }
                span:nth-of-type(3) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .8s;
                }
                .bar {
                    width: 7.03125vw;
                    transition: width .3s 1.1s;
                }
                span:nth-of-type(5) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s 1.4s;
                }
            }
            .subtitle {
                top: 0;
                opacity: 1;
                transition: all .3s 1.7s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s 1.8s;
            }
            .more {
                top: 0;
                opacity: 1;
                transition: all .3s 1.9s;
            }
            .quick-link {
                opacity: 1;
                transition: all .3s 2.0s;
            }
        }
    }
    .tech.cnv {
        height: 100% !important;
        .bg {
            background-image: url(../../../assets/img/bg_home_3_1.jpg);
        }
        .category {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .title {
            span:nth-of-type(1) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            span:nth-of-type(2) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
            .bar {
                width: 0;
            }
            span:nth-of-type(4) {
                position: relative;
                top: 1vw;
                opacity: 0;
            }
        }
        .subtitle {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .desc {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .more {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .quick-link {
            opacity: 0;
        }
    }
    .swiper-slide-active {
        .tech.cnv {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .title {
                span:nth-of-type(1) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .6s;
                }
                span:nth-of-type(2) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .7s;
                }
                .bar {
                    width: 7.03125vw;
                    transition: width .3s 1.0s;
                }
                span:nth-of-type(4) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s 1.3s;
                }
            }
            .subtitle {
                top: 0;
                opacity: 1;
                transition: all .3s 1.4s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s 1.5s;
            }
            .more {
                top: 0;
                opacity: 1;
                transition: all .3s 1.6s;
            }
            .quick-link {
                opacity: 1;
                transition: all .3s 1.7s;
            }
        }
    }
    .promotion {
        height: 100% !important;
        .bg {
            background-image: url(../../../assets/img/bg_home_4_1.jpg);
        }
        .category {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .more {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .news {
            li {
                position: relative;
                opacity: 0;
                &:nth-of-type(1) {
                    top: pxtovw(40px);
                }
                &:nth-of-type(2) {
                    top: pxtovw(20px);
                }
                &:nth-of-type(3) {
                    top: pxtovw(60px);
                }
                &:nth-of-type(4) {
                    top: pxtovw(40px);
                }
            }
        }
    }
    .swiper-slide-active {
        .promotion {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .more {
                top: 0;
                opacity: 1;
                transition: all .3s .6s;
            }
            .news {
                li {
                    &:nth-of-type(1) {
                        top: pxtovw(20px);
                        opacity: 1;
                        transition: all .3s .9s;
                    }
                    &:nth-of-type(2) {
                        top: 0;
                        opacity: 1;
                        transition: all .3s 1.1s;
                    }
                    &:nth-of-type(3) {
                        top: pxtovw(40px);
                        opacity: 1;
                        transition: all .3s 1.3s;
                    }
                    &:nth-of-type(4) {
                        top: pxtovw(20px);
                        opacity: 1;
                        transition: all .3s 1.5s;
                    }
                }
            }
        }
    }
    .qna {
        height: 100% !important;
        .bg {
            background-image: url(../../../assets/img/bg_home_5_1.jpg);
        }
        .category {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .title {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .subtitle {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .desc {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .contact a {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
        .more {
            top: pxtovw(-70px);
            opacity: 0;
        }
        .qna-form {
            position: relative;
            top: 1vw;
            opacity: 0;
        }
    }
    .swiper-slide-active {
        .qna {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .title {
                top: 0;
                opacity: 1;
                transition: all .3s .6s;
            }
            .subtitle {
                top: 0;
                opacity: 1;
                transition: all .3s .7s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s .8s;
            }
            .contact {
                a:nth-of-type(1) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .9s;
                }
                a:nth-of-type(2) {
                    top: 0;
                    opacity: 1;
                    transition: all .3s 1.0s;
                }
            }
            .more {
                top: pxtovw(-90px);
                opacity: 1;
                transition: all .3s 1.1s;
            }
            .qna-form {
                top: 0;
                opacity: 1;
                transition: all .3s 1.2s;
            }
        }
    }
    .slide {
        display: flex;
        align-items: center;
        color: #fff;
        .container-fluid {
            max-width: 80.2083333333vw;
        }
        // section {
            .category {
                display: inline-block;
                margin: 0 0 3.125vw 0;
                font-size: 0.833333333333vw;
                border-bottom: 1px solid #fff;
                line-height: 1.5625vw;
            }
            .title {
                display: flex;
                font-size: pxtovw(44px);
                font-weight: 700;
                line-height: 3.4375vw;
                align-items: center;
                margin-bottom: 0; 
                letter-spacing: -.1rem;
                .bar {
                    // width: 7.03125vw;
                    height: 2px;
                    background: #fff;
                }
                .plus {
                    position: absolute;
                    top: -0.260416666667vw;
                    left: calc(100% + 0.260416666667vw);
                }
                span {
                    position: relative;
                }
                span + span {
                    //margin-left: 5.20833333333vw;
                    // margin-left: 3.125vw;
                    margin-left: pxtovw(40px);
                }
            }
            .subtitle {
                margin: 2.08333333333vw 0 1.04166666667vw;
                font-size: 1.5625vw;
                line-height: 2.60416666667vw;
                font-weight: bold;
                sup {
                    position: relative;
                    top: -1.04166666667vw;
                    margin-left: 0.78125vw;
                    font-family: "MontSerrat", sans-serif;
                    font-size: 0.78125vw;
                }
            }
            p.desc {
                margin: 1.04166666667vw 0;
                font-size: 0.833333333333vw;
                // line-height: 1.5625vw;
                line-height: 1.35416666667vw;
            }
            a.detail {
                display: flex;
                justify-content: center;
                align-items: center;
                width: pxtovw(300px);
                height: 3.02083333333vw;
                border: 1px solid #fff;
                font-size: 0.9375vw;
                color: #fff;
                text-decoration: none;
            }
            a.more {
                display: inline-flex;
                align-items: center;
                font-size: 0.729166666667vw;
                color: #fff;
                text-decoration: none;
                .box {
                    margin-left: 1.04166666667vw;
                    width: 3.54166666667vw;
                    height: 0.520833333333vw;
                    border: 1px solid #fff;
                    span {
                        display: block;
                        width: 0;
                        height: 100%;
                        background: #fff;
                        transition: width .2s;
                    }
                }
                &:hover, &:focus {
                    .box {
                        span {
                            width: 100%;
                        }
                    }
                }
            }
            .quick-link {
                position: absolute;
                top: pxtovw(210px);
                left: calc(50% - 3.125vw);
                width: pxtovw(539px);
                height: pxtovw(203px);
                border: 1px solid rgba(#fff, .6);
                display: flex;
                a {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    font-size: pxtovw(18px);
                    font-weight: bold;
                    color: #fff;
                    background: transparent;
                    transition: background .2s;
                    & + a {
                        border-left: 1px solid rgba(#fff, .6);
                    }
                    &:hover, &:focus {
                        background: rgba(#fff, .1);
                    }
                }
            }
        // }
    }
}
</style>

<style lang="scss" scoped>
.home.web {
    overflow: hidden;
    position: relative;
    height: 100%;
    .swiper-container-v,
    .swiper-container-h {
        height: 100%;
        .swiper-wrapper {
            height: 100%;
            .swiper-slide {
                height: 100%;
                // width: 100%;
                // height: 100%;
                // display: flex;
                // justify-content: center;
                // align-items: center;
                // &:nth-of-type(1) {
                //     height: 100% !important;
                // }
                // &:nth-of-type(2) {
                //     height: 100% !important;
                // }
                // &:nth-of-type(3) {
                //     height: 100% !important;
                // }
                // &:nth-of-type(4) {
                //     height: 100% !important;
                // }
            }
        }
    }
}
</style>