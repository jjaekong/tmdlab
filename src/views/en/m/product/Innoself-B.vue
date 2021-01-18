<template>
    <div class="mobile product innoself-b">
        <Header />
        <section class="overview">
            <h3>Products</h3>
            <header class="page-title">
                <span class="category">Shape memory</span>
                <h4>Bile duct stent <sup>Innoself&trade; B</sup></h4>
            </header>
            <div class="surgery-list">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/en/img_smp_b_surgery_1.jpg">
                                <div class="surgery-body">
                                    <h4>Biliary obstruction</h4>
                                    <p>
                                        Disease which part of or whole biliary duct is closed due to a gallstone or a tumor, causing severe jaundice
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/img_smp_b_surgery_2.jpg">
                                <div class="surgery-body">
                                    <h4>Biliary duct stent insertion</h4>
                                    <p>
                                        Treatment of: approaching to the biliary duct through skin or liver parenchyma, and inserting the plastic or metal stent to the narrowed duct, so that the bile is secreted to the intestine as a normal path
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
                <div class="keyword">Issue</div>
            </div>
            <div class="summary">
                <ul>
                    <li>Perforation caused by stent dislocation, high re-stenosis rate</li>
                    <li>Plastic stent: Shorter lifespan to the metal stent, required to be replaced after 3 months of insertion (replacement rate is up to 45%.)</li>
                    <li>Metal stent: Unable to remove after stent closure</li>
                </ul>
            </div>
        </section>
        <section class="effect feature">
            <div class="feature-define">
                <div class="keyword">Effect</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_smp_b_figure_1.jpg">
            </div>
            <div class="summary">
                <h5>Innoself&trade; B <span>effect</span></h5>
                <ul>
                    <li>Reducing the stent dislocation rate due to self-expansion</li>
                    <li>Inhibiting biofilm formation</li>
                    <li>Reducing inflammation and fibrosis rates</li>
                    <li>Reducing the stent occlusion rate</li>
                </ul>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/en/m/Header.vue'
import Footer from '@/components/en/m/Footer.vue'

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
        .page-title {
            .category {
                margin-bottom: 0;
                margin-right: pxtovw2(10px);
                width: pxtovw2(180px) !important;
            }
        }
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
                    //padding: pxtovw2(40px) 0 pxtovw2(40px) pxtovw2(40px);
                    padding: pxtovw2(40px);
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
                        // margin-bottom: pxtovw2(35px);
                        // font-size: pxtovw2(24px);
                        // line-height: pxtovw2(36px);
                        margin-bottom: pxtovw2(20px);
                        font-size: pxtovw2(20px);
                        line-height: pxtovw2(26px);
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