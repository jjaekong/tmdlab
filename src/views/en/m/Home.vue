<template>
    <div class="mobile home">
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
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import Welcome from '@/views/en/m/home/Welcome.vue'
import Introduce from '@/views/en/m/home/Introduce.vue'
import TechSMP from '@/views/en/m/home/TechSMP.vue'
import TechCNV from '@/views/en/m/home/TechCNV.vue'
import Promotion from '@/views/en/m/home/Promotion.vue'
import Qna from '@/views/en/m/home/Qna.vue'

import Header from '@/components/en/m/Header.vue'

export default {
    components: {
        Header,
        Welcome, Introduce, TechSMP, TechCNV, Promotion, Qna
    },
    data: function() {
        return {
            swiperVerical: null,
            swiperHorizontal: null,
        }
    },
    mounted: function() {
        this.swiperVerical = new Swiper ('.home.mobile .swiper-container-v', {
            slidesPerView: 'auto',
            direction: 'vertical',
            spaceBetween: 0,
        })
        this.swiperHorizontal = new Swiper ('.home.mobile .swiper-container-h', {
            // slidesPerView: 'auto',
            //direction: 'vertical',
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 15,
        })
    }
}
</script>

<style lang="scss">
@import "./src/assets/css/functions.scss";

.en {
    .mobile.home {
        .slide {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 50% !important;
            //padding: pxtovw2(60px) pxtovw2(75px);
            > section {
                padding: pxtovw2(60px) pxtovw2(75px);
            }
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
            .category {
                display: inline-block;
                margin-bottom: 0;
                font-size: pxtovw2(20px);
                line-height: pxtovw2(40px);
                border-bottom: 1px solid #fff;
                color: #fff;
                margin-left: pxtovw2(-25px);
            }
            .title {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: pxtovw2(44px);
                //line-height: pxtovw2(66px);
                line-height: pxtovw2(82px);
                color: #fff;
                font-weight: 900;
                margin-bottom: pxtovw2(5px);
                span {
                    position: relative;
                }
                .plus {
                    position: absolute;
                    top: 0;
                    right: pxtovw2(-30px);
                    width: pxtovw2(26px);
                    height: pxtovw2(26px);
                }
                .bar {
                    margin: 0 pxtovw2(60px);
                    width: pxtovw2(94px);
                    height: pxtovw2(3px);
                    background: #fff;
                }
            }
            .subtitle {
                font-size: pxtovw2(28px);
                line-height: pxtovw2(40px);
                color: #fff;
                font-weight: 600;
                sup {
                    font-size: pxtovw2(20px);
                    margin-left: pxtovw2(20px);
                    font-family: "MontSerrat", sans-serif;
                }
            }
            .desc {
                color: #fff;
                font-size: pxtovw2(22px);
                line-height: pxtovw2(36px);
            }
            .detail {
                width: pxtovw2(288px);
                height: pxtovw2(58px);
                border: 1px solid #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: pxtovw2(22px);
                font-weight: 900;
            }
            .more {
                display: flex;
                align-items: center;
                font-size: pxtovw2(22px);
                line-height: pxtovw2(40px);
                color: #fff;
                .box {
                    margin-left: pxtovw2(20px);
                    width: pxtovw2(68px);
                    height: pxtovw2(10px);
                    border: 1px solid #fff;
                }
            }
            .arrow {
                position: relative;
                width: pxtovw2(18px);
                height: pxtovw2(50px);
                .arrowbody {
                    position: absolute;
                    left: pxtovw2(8px);
                    width: pxtovw2(2px);
                    height: 100%;
                    background: #fff;
                }
                .arrowhead {
                    position: absolute;
                    bottom: pxtovw2(4px);
                    width: pxtovw2(10px);
                    height: pxtovw2(2px);
                    background: #fff;
                    &.left {
                        left: 0;
                        transform: rotate(45deg);
                    }
                    &.right {
                        right: 0;
                        transform: rotate(-45deg);
                    }
                }
            }
            .scrolldown {
                width: pxtovw2(18px);
                margin-left: pxtovw2(-8px);
            }
            .quicklink {
                
                // border: pxtovw2(2px) solid rgba(#fff, .6);
                // display: block;
                a {
                    width: pxtovw2(360px);
                    height: pxtovw2(58px);
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-size: pxtovw2(22px);
                    text-decoration: none;
                    border: 1px solid #fff;
                    font-weight: 900;
                    & + a {
                        margin-top: pxtovw2(30px);
                    }
                }
            }
        }
        .swiper-container-v {
            .swiper-slide-active {
                .slide {
                    .bg {
                        transform: scale(1.1);
                        transition: transform 20s .5s;
                    }
                }
            }
        }
        .welcome {
            height: 100% !important;
            .bg {
                background-image: url('../../../assets/img/m/bg_home_1.jpg');
            }
            .title {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .desc {
                margin-bottom: pxtovw2(60px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .detail {
                margin-bottom: pxtovw2(50px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .scrolldown {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
        }
        .swiper-slide-active
        .welcome {
            .title {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s .6s;
            }
            .detail {
                top: 0;
                opacity: 1;
                transition: all .3s .7s;
            }
            .scrolldown {
                top: 0;
                opacity: 1;
                transition: all .3s 1.0s;
            }
        }
        .introduce {
            height: 100% !important;
            .bg {
                background-image: url('../../../assets/img/m/bg_home_2.jpg');
            }
            .category {
                margin-bottom: pxtovw2(60px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .title {
                display: block;
                margin-bottom: pxtovw2(15px);
                span:not(.bar) {
                    position: relative;
                    top: 2vw;
                    opacity: 0;
                }
                .words:nth-of-type(2) {
                    display: flex;
                    align-items: center;
                    .bar {
                        width: 0;
                    }
                }
            }
            .subtitle {
                margin-bottom: pxtovw2(15px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .desc {
                margin-bottom: pxtovw2(45px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .more {
                margin-bottom: pxtovw2(45px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .scrolldown {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
        }
        .swiper-slide-active
        .introduce {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .title {
                .words:nth-of-type(1) {
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
                }
                .words:nth-of-type(2) {
                    span:nth-of-type(1) {
                        top: 0;
                        opacity: 1;
                        transition: all .3s .9s;
                    }
                    .bar {
                        width: pxtovw2(94px);
                        transition: width .3s 1.0s;
                    }
                    .con {
                        top: 0;
                        opacity: 1;
                        transition: all .3s 1.3s;
                    }
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
            .scrolldown {
                top: 0;
                opacity: 1;
                transition: all .3s 2.1s;
            }
        }
        .tech-smp {
            height: 100% !important;
            .bg {
                background-image: url('../../../assets/img/m/bg_home_3.jpg');
            }
            section {
                padding-right: pxtovw2(50px);
            }
            .category {
                margin-bottom: pxtovw2(75px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .title {
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: pxtovw2(15px);
                .words {
                    display: flex;
                    align-items: center;
                }
                .words:nth-of-type(1) {
                    flex-direction: column;
                    align-items: flex-start;
                    span {
                        margin-right: pxtovw2(55px);
                    }
                }
                span:not(.bar) {
                    position: relative;
                    top: 2vw;
                    opacity: 0;
                }
                span.bar {
                    width: 0;
                }
            }
            .subtitle {
                margin-bottom: pxtovw2(15px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .desc {
                margin-bottom: pxtovw2(55px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .quicklink {
                margin-bottom: pxtovw2(55px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .scrolldown {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
        }
        .swiper-slide-active
        .tech-smp {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            .title {
                .words:nth-of-type(1) {
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
                }
                .words:nth-of-type(2) {
                    span:nth-of-type(1) {
                        top: 0;
                        opacity: 1;
                        transition: all .3s .8s;
                    }
                    span.bar {
                        width: pxtovw2(94px);
                        transition: width .3s .9s;
                    }
                    span:nth-of-type(3) {
                        top: 0;
                        opacity: 1;
                        transition: all .3s 1.2s;
                    }
                }
            }
            .subtitle {
                top: 0;
                opacity: 1;
                transition: all .3s 1.5s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s 1.6s;
            }
            .quicklink {
                top: 0;
                opacity: 1;
                transition: all .3s 1.7s;
            }
            .scrolldown {
                top: 0;
                opacity: 1;
                transition: all .3s 2.0s;
            }
        }
        .tech-cnv {
            height: 100% !important;
            .bg {
                background-image: url('../../../assets/img/m/bg_home_4.jpg');
            }
            section {
                padding-right: pxtovw2(60px);
            }
            .category {
                margin-bottom: pxtovw2(60px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .title {
                margin-bottom: pxtovw2(25px);
                flex-direction: column;
                align-items: flex-start;
                // .words {
                //     display: flex;
                //     align-items: center;
                // }
                span:not(.bar) {
                    position: relative;
                    top: 2vw;
                    opacity: 0;
                }
                .words:nth-of-type(1) {
                    display: flex;
                    flex-direction: column;   
                }
                .words:nth-of-type(2) {
                    display: flex;
                    align-items: center;
                    span.bar {
                        margin-left: 0;
                        width: 0;
                    }
                }
            }
            .subtitle {
                margin-bottom: pxtovw2(15px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .desc {
                margin-bottom: pxtovw2(55px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .quicklink {
                width: pxtovw2(270px);
                margin-bottom: pxtovw2(55px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .scrolldown {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
        }
        .swiper-slide-active
        .tech-cnv {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
            }
            // .title {
            //     .words:nth-of-type(1) {
            //         span:nth-of-type(1) {
            //             top: 0;
            //             opacity: 1;
            //             transition: all .3s .5s;
            //         }
            //     }
            //     .words:nth-of-type(2) {
            //         span:nth-of-type(1) {
            //             top: 0;
            //             opacity: 1;
            //             transition: all .3s .6s;
            //         }
            //         span.bar {
            //             width: pxtovw2(94px);
            //             transition: width .3s .7s;
            //         }
            //         span:nth-of-type(3) {
            //             top: 0;
            //             opacity: 1;
            //             transition: all .3s 1.0s;
            //         }    
            //     }
            // }
            .title {
                .words:nth-of-type(1) {
                    span:nth-of-type(1) {
                        top: 0;
                        opacity: 1;
                        transition: all .3s .5s;
                    }
                    span:nth-of-type(2) {
                        top: 0;
                        opacity: 1;
                        transition: all .3s .6s;
                    }
                }
                .words:nth-of-type(2) {
                    span.bar {
                        width: pxtovw2(94px);
                        transition: width .3s .7s;
                    }
                    span:nth-of-type(2) {
                        top: 0;
                        opacity: 1;
                        transition: all .3s 1.0s;
                    }    
                }
            }
            .subtitle {
                top: 0;
                opacity: 1;
                transition: all .3s 1.1s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: all .3s 1.2s;
            }
            .quicklink {
                top: 0;
                opacity: 1;
                transition: all .3s 1.3s;
            }
            .scrolldown {
                top: 0;
                opacity: 1;
                transition: all .3s 1.6s;
            }
        }
        .promotion {
            height: 100% !important;
            .bg {
                background-image: url('../../../assets/img/m/bg_home_5.jpg');
            }
            > section > header {
                margin-bottom: pxtovw2(75px);
            }
            // .news-item {
            //     display: block;
            //     background-color: #fff;
            //     text-decoration: none;
            // }
            .category {
                margin-left: pxtovw2(50px);
                position: relative;
                top: 2vw;
                opacity: 0;
                & + p {
                    position: relative;
                    top: 2vw;
                    opacity: 0;
                }
            }
            .swiper-slide:nth-of-type(odd) {
                position: relative;
                left: -2vw;
                opacity: 0;
            }
            .swiper-slide:nth-of-type(even) {
                position: relative;
                left: -2vw;
                opacity: 0;
            }
            .scrolldown {
                margin-top: pxtovw2(90px);
                margin-left: pxtovw2(75px);
                margin-bottom: pxtovw2(65px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
        }
        .swiper-slide-active
        .promotion {
            .category {
                top: 0;
                opacity: 1;
                transition: all .3s .5s;
                & + p {
                    top: 0;
                    opacity: 1;
                    transition: all .3s .6s;
                }
            }
            .swiper-slide:nth-of-type(odd) {
                left: 0;
                opacity: 1;
                transition: all .3s .7s;
            }
            .swiper-slide:nth-of-type(even) {
                left: 0;
                opacity: 1;
                transition: all .3s .8s;
            }
            .scrolldown {
                top: 0;
                opacity: 1;
                transition: all .3s 1.1s;
            }
        }
        .qna {
            height: 100% !important;
            .bg {
                background-image: url('../../../assets/img/m/bg_home_6.jpg');
            }
            .category {
                margin-bottom: pxtovw2(35px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .title {
                margin-bottom: pxtovw2(20px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .subtitle {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .desc {
                margin-bottom: pxtovw2(20px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .form-row:nth-of-type(1) {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .form-row:nth-of-type(2) {
                position: relative;
                top: 2vw;
                opacity: 0;
            }
            .scrolldown {
                margin-top: pxtovw2(50px);
                margin-bottom: pxtovw2(30px);
                position: relative;
                top: 2vw;
                opacity: 0;
            }
        }
        .swiper-slide-active
        .qna {
            .category {
                top: 0;
                opacity: 1;
                transition: .3s .5s;
            }
            .title {
                top: 0;
                opacity: 1;
                transition: .3s .6s;
            }
            .subtitle {
                top: 0;
                opacity: 1;
                transition: .3s .7s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: .3s .8s;
            }
            .form-row:nth-of-type(1) {
                top: 0;
                opacity: 1;
                transition: .3s .9s;
            }
            .form-row:nth-of-type(2) {
                top: 0;
                opacity: 1;
                transition: .3s 1.0s;
            }
            .scrolldown {
                top: 0;
                opacity: 1;
                transition: .3s 1.3s;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.home {
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
            }
        }
    }
}
</style>