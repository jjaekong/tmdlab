<template>
    <div class="mobile product smp-v">
        <Header />
        <section class="overview">
            <h3>Products</h3>
            <header class="page-title">
                <!-- <span>형상기억</span> -->
                <h4>Shape memory  Blood vessel external wrapping stent <sup>SMP-V<sup>&reg;</sup></sup></h4>
            </header>
            <div class="surgery-list">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/img_smp_v_surgery_1.jpg">
                                <div class="surgery-body">
                                    <h4>Coronary artery bypass surgery</h4>
                                    <p>
                                        Surgery which creates a bypass for bloodstream provided to the heart, by connecting a duct (a radial artery near the wrist, or a saphenous vein in the leg) as an alternative to the narrow coronary artery<br><br>
                                    </p>
                                    <dl class="side-effect">
                                        <dt>Side effect/aftereffect</dt>
                                        <dd>
                                            2-5% death rate, bleeding after surgery<br>
                                            Artery or vein ducts which had the surgery may have occlusion in a long term.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="surgery-item">
                                <img src="@/assets/img/m/product/en/img_smp_v_surgery_2.jpg">
                                <div class="surgery-body">
                                    <h4>Arteriovenous fistula surgery</h4>
                                    <p>
                                        Shunt surgery of connecting an artery and a vein near the skin, for a patient with chronic renal insufficiency under frequent hemodialysis treatments, so that the vein is expanded to have sufficient amount of blood flow, and is strengthened like the artery
                                    </p>
                                    <dl class="side-effect">
                                        <dt>Side effect/aftereffect</dt>
                                        <dd>
                                            Edema due to pressure difference between the connected blood vessels,<br>
                                            Reoperation required when the vessel is not thickened enough for hemodialysis
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
                <div class="keyword">Evaluation</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_smp_v_figure_1.jpg">
            </div>
            <div class="summary">
                <h5>SMP-V<sup>&reg;</sup></h5>
                <ul>
                    <li>Preventing stenosis by external wrapping the blood vessel</li>
                    <li>Preventing edema due to blood pressure difference between the artery and the vein</li>
                    <li>Lowering blood clot formation by preventing the bloodstream difference</li>
                    <li>Enhancing the treatment effect by inducing vasa vasorum formation</li>
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
                    dl {
                        margin: 0;
                        padding: 0;
                        dt {
                            margin-bottom: pxtovw2(10px);
                            //width: pxtovw2(195px);
                            width: pxtovw2(250px);
                            height: pxtovw2(60px);
                            border-radius: pxtovw2(30px);
                            background: #0160a1;
                            color: #fff;
                            font-size: pxtovw2(20px);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: normal;
                        }
                        dd {
                            margin-bottom: 0;
                            // font-size: pxtovw2(24px);
                            // line-height: pxtovw2(36px);
                            font-size: pxtovw2(20px);
                            line-height: pxtovw2(26px);
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