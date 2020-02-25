<template>
    <div class="mobile promotion journal">
        <Header />
        <section class="overview">
            <h3>홍보/활동</h3>
            <h4>
                티엠디랩의 폭넓고 다양한<br>
                뉴스를 확인하세요.
            </h4>
            <p>가장 빠르게 뉴스 및 공지사항을 알려드립니다.</p>
        </section>
        <section class="journal-list">
            <h4>NEW <span class="bar"></span> <b>3</b></h4>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/ko/promotion/journal/3">
                            <div class="journal-body">
                                <h5>Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion</h5>
                                <dl>
                                    <dt>게제정보:</dt>
                                    <dd>
                                        Nature Communication<br>(2020.01.30, IF 11.88)
                                    </dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/ko/promotion/journal/2">
                            <div class="journal-body">
                                <h5>Development of a Shape-Memory Tube to Prevent Vascular Stenosis.</h5>
                                <dl>
                                    <dt>게제정보:</dt>
                                    <dd>
                                        Advanced Materials<br>(2019.08.27, IF 25.809)
                                    </dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/ko/promotion/journal/1">
                            <div class="journal-body">
                                <h5>Nasolacrimal stent with shape memory as an advanced alternative to silicone products.</h5>
                                <dl>
                                    <dt>게제정보:</dt>
                                    <dd>
                                        Acta Biomaterilia<br>(2019.11.07, IF 6.638)
                                    </dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/ko/m/Header.vue'
import Footer from '@/components/ko/m/Footer.vue'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
    components: {
        Header, Footer
    },
    data: function() {
        return {
            swiper: null,
        }
    },
    mounted: function() {
        this.swiper = new Swiper ('.mobile.promotion.journal .swiper-container', {
            slidesPerView: 'auto',
        });
    }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.promotion {
    .overview {
        padding-left: pxtovw2(40px); 
        padding-right: pxtovw2(40px);
        padding-top: pxtovw2(150px);
        padding-bottom: pxtovw2(50px);
        background-image: url(../../../../assets/img/m/promotion/bg_news.jpg);
        background-size: cover;
        background-position: 50% 0;
        color: #fff;
        a {
            color: #fff;
            text-decoration: none;
        }
        h3 {
            display: inline-block;
            font-size: pxtovw2(30px);
            line-height: pxtovw2(56px);
            border-bottom: pxtovw2(2px) solid #fff;
            margin-bottom: pxtovw2(60px);
        }
        h4 {
            margin-left: pxtovw2(40px);
            margin-bottom: pxtovw2(25px);
            font-size: pxtovw2(54px);
            line-height: pxtovw2(66px);
            font-weight: bold;
        }
        p {
            margin-left: pxtovw2(40px) !important;
            font-size: pxtovw2(22px);
            line-height: pxtovw2(26px);
            margin: 0;
        }
    }
    .journal-list {
        padding-top: pxtovw2(30px);
        padding-bottom: pxtovw2(150px);
        background: #f0f0f0;
        h4 {
            display: flex;
            align-items: center;
            padding-left: pxtovw2(40px);
            padding-right: pxtovw2(40px);
            margin-bottom: pxtovw2(30px);
            font-size: pxtovw2(18px);
            line-height: pxtovw2(34px);
            color: #2457ca;
            .bar {
                width: pxtovw2(18px);
                height: 1px;
                margin-left: pxtovw2(5px);
                margin-right: pxtovw2(10px);
                background: #000;
            }
            b {
                font-size: pxtovw2(26px);
                color: #383838;
            }
        }
        .swiper-wrapper {
            padding-bottom: pxtovw2(30px);
        }
        .swiper-slide {
            width: pxtovw2(450px);
            height: pxtovw2(620px);
            margin-left: pxtovw2(40px);
            &:last-child {
                margin-right: pxtovw2(40px);
            }
        }
        .journal-item {
            width: pxtovw2(450px);
            height: pxtovw2(620px);
            background: #fff;
            display: flex;
            flex-direction: column;
            box-shadow: 0 pxtovw2(5px) pxtovw2(19.95px) pxtovw2(1.05px) rgba(0, 0, 0, 0.1);
            text-decoration: none;
            .journal-body {
                flex: 1;
                padding: pxtovw2(35px) pxtovw2(30px);
                display: flex;
                flex-direction: column;
                h5 {
                    flex: 1;
                    color: #383838;
                    font-size: pxtovw2(38px);
                    line-height: pxtovw2(48px);
                }
                dl {
                    margin: 0;
                    color: #a1a1a1;
                    font-size: pxtovw2(22px);
                    line-height: pxtovw2(30px);
                    dd {
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>