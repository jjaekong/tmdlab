<template>
    <div class="mobile product smp-b">
        <Header />
        <section class="overview">
            <h3>제품</h3>
            <header class="page-title">
                <span>형상기억</span>
                <h4>담관 스텐트 <sup>Innoself&trade; B</sup></h4>
            </header>
            <div class="surgery-list">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/img_smp_b_surgery_1.jpg">
                                <div class="surgery-body">
                                    <h4>담관 폐쇄</h4>
                                    <p>
                                        담석이나 종양에 의해 담관의 전체 혹은 일부분이<br>
                                        폐쇄된 질환으로 강한 황달 유발
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/img_smp_b_surgery_2.jpg">
                                <div class="surgery-body">
                                    <h4>담관 스텐트 삽입술</h4>
                                    <p>
                                        피부 및 간 실질을 통해 간 내 담도에 접근 후 플라스틱이나<br>
                                        금속으로 만들어진 스텐트를 좁아진 부위에 넣어<br>
                                        담즙이 정상적인 경로인 장으로 배출될 수 있도록 하는 시술
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="problem feature">
            <div class="feature-define">
                <div class="keyword">문제점</div>
            </div>
            <div class="summary">
                <ul>
                    <li>스텐트 이탈에 의한 천공, 높은 재 협착율, </li>
                    <li>플라스틱 스텐트 : 메탈 스텐트에 비해 수명이 짧아 막히는 <br>시기인 3개월 간격으로 교체해야함 (교체율 ~45%)</li>
                    <li>메탈 스텐트 : 스텐트 폐쇄 시 제거가 불가능</li>
                </ul>
            </div>
        </section>
        <section class="effect feature">
            <div class="feature-define">
                <div class="keyword">효과</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_smp_b_figure_1.jpg">
            </div>
            <div class="summary">
                <h5>Innoself&trade; B <span>효과</span></h5>
                <ul>
                    <li>자가 팽창에 의해 스텐트 이탈률 감소</li>
                    <li>바이오필름 생성 억제</li>
                    <li>염증, 섬유화 수치 감소</li>
                    <li>스텐트 폐색률 감소</li>
                </ul>
            </div>
        </section>
        <Footer />
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
        this.swiper = new Swiper ('.mobile.product.smp-b .swiper-container', {
            slidesPerView: 'auto',
        });
    }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.product {
    .overview {
        padding-bottom: pxtovw2(50px) !important;
        .surgery-list {
            margin-left: pxtovw2(-40px);
            margin-right: pxtovw2(-40px);
            .swiper-slide {
                width: pxtovw2(610px);
                height: pxtovw2(800px);
                margin-left: pxtovw2(40px);
                &:last-child {
                    margin-right: pxtovw2(40px);
                }
            }
            .surgery-item {
                width: 100%;
                height: 100%;
                background: #fff;
                > img {
                    display: block;
                    width: 100%;
                }
                .surgery-body {
                    padding: pxtovw2(45px) 0 pxtovw2(40px) pxtovw2(40px);
                    letter-spacing: pxtovw2(-1px);
                    word-spacing: pxtovw2(-1px);
                    h4 {
                        margin-bottom: pxtovw2(15px);
                        font-size: pxtovw2(30px);
                        line-height: pxtovw2(34px);
                        color: #383838;
                        font-weight: 900;
                    }
                    p {
                        margin-bottom: pxtovw2(35px);
                        font-size: pxtovw2(24px);
                        line-height: pxtovw2(36px);
                        color: #383838;
                    }
                }
            }
        }
    }
    .feature {
        &.problem {
            position: relative;
            margin-top: pxtovw2(110px);
            padding-top: pxtovw2(130px);
            padding-bottom: pxtovw2(100px);
            background: #0072bc;
            .feature-define {
                position: absolute;
                top: pxtovw2(-50px);
            }
            .summary {
                width: auto !important;
                li {
                    color: #fff !important;
                }
            }
        }
        &.effect {
            position: relative;
            padding-bottom: pxtovw2(150px);
            .feature-define {
                position: absolute;
                top: pxtovw2(100px);
            }
            .feature-figure {
                margin-bottom: pxtovw2(90px);
            }
            .summary {
                width: auto !important;
                h5 {
                    text-align: left !important;
                    span {
                        font-family: "Noto Sans KR", sans-serif;
                    }
                }
            }
        }
    }
}
</style>