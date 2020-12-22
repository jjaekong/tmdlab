<template>
    <div class="mobile product smp-v">
        <Header />
        <section class="overview">
            <h3>제품</h3>
            <header class="page-title">
                <span>형상기억</span>
                <h4>혈관 외벽 스텐트 <sup>Innoself&trade; V</sup></h4>
            </header>
            <div class="surgery-list">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/img_smp_v_surgery_1.jpg">
                                <div class="surgery-body">
                                    <h4>관상동맥우회술</h4>
                                    <p>
                                        좁아진 관상동맥을 대체할 수 있는 도관 <br>
                                        (팔목 가까이에 있는 요골동맥, 다리 안쪽 복재정맥 등을 <br>
                                        분리해 사용)을 연결하여 <br>
                                        심장에 혈류를 공급하는 우회로를 만들어주는 수술 
                                    </p>
                                    <dl class="side-effect">
                                        <dt>부작용/후유증</dt>
                                        <dd>
                                            2-5% 사망률, 수술 후 출혈<br>
                                            장기적으로 수술부위의 동맥 및 정맥 도관이 막힐 수 있음
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/img_smp_v_surgery_2.jpg">
                                <div class="surgery-body">
                                    <h4>동정맥루 수술</h4>
                                    <p>
                                        만성 신부전 환자의 지속적인 혈액투석 시 정맥을 많은 양의 <br>
                                        혈액이 지나가도록 확장시키고 동맥처럼 튼튼하게 하기 <br>
                                        위해서 동맥과 표피 정맥을 연결하는 조성술
                                    </p>
                                    <dl class="side-effect">
                                        <dt>부작용/후유증</dt>
                                        <dd>
                                            연결된 혈관들의 압력 차이로 인한 수술 부위 부종,<br>
                                            혈관 투석에 사용할 수 있을 만큼 <br>
                                            충분히 굵어지지 않는 경우 재수술 
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="way feature">
            <div class="feature-define">
                <div class="keyword">평가</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_smp_v_figure_1.jpg">
            </div>
            <div class="summary">
                <h5>SMP-V<sup>&reg;</sup></h5>
                <ul>
                    <li>혈관 외벽 지지체로써 협착 방지</li>
                    <li>동맥과 정맥의 혈압 차이로 인한 부종 방지</li>
                    <li>혈류 변화 방지로 혈전 형성 낮춤</li>
                    <li>맥관벽혈관 생성 유도로 치료 효과 높임</li>
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
        this.swiper = new Swiper ('.mobile.product.smp-v .swiper-container', {
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
                height: pxtovw2(810px);
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
                    padding: pxtovw2(40px) 0 pxtovw2(40px) pxtovw2(40px);
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
                    dl {
                        margin: 0;
                        padding: 0;
                        dt {
                            margin-bottom: pxtovw2(10px);
                            width: pxtovw2(195px);
                            height: pxtovw2(60px);
                            border-radius: pxtovw2(30px);
                            background: #0160a1;
                            color: #fff;
                            font-size: pxtovw2(24px);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: normal;
                        }
                        dd {
                            margin-bottom: 0;
                            font-size: pxtovw2(24px);
                            line-height: pxtovw2(36px);
                            color: #383838;
                        }
                    }
                }
            }
        }
    }
    .feature {
        &.way {
            position: relative;
            padding-bottom: pxtovw2(185px);
            .feature-define {
                position: absolute;
                top: pxtovw2(60px);
            }
            .feature-figure {
                margin-bottom: pxtovw2(105px);
            }
        }
    }
}
</style>