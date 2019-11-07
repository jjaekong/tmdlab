<template>
    <div class="mobile product tnv">
        <Header />
        <section class="overview">
            <h3>Products</h3>
            <header class="page-title">
                <!-- <span>세포유래 나노소포체</span> -->
                <h4>Cell-derived nanovesicles Treatment to osteoarthritis <sup>CNV-OA<sup>&reg;</sup></sup></h4>
            </header>
            <div class="feature-define">
                <div class="keyword">Current condition</div>
                <div class="desc">
                    There is an increasing demand on knee osteoarthritis while the treatment market is being expanded, accompanied by the growing number of elderly per total population.
                </div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/en/img_tnv_figure_0.png">
                </div>
            </div>
        </section>
        <section class="previous feature">
            <div class="feature-define">
                <div class="keyword">AS-IS</div>
                <div class="desc">An existing treatment is with high sales growth, however, is expensive while requiring a surgery.</div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/en/img_tnv_figure_1.jpg">
                </div>
            </div>
            <div class="feature-desc feature-desc-1">
                <ul>
                    <li>Medipost: Cartistem (stem cell medicine) sales increased by 40% year on year (20th of April, 2018)</li>
                    <li>Included into the rising medicine fields by exceeding annual sales of KRW 10 billion, first in history of domestic stem cell medicine.</li>
                </ul>
            </div>
            <div class="feature-desc feature-desc-2">
                <ul>
                    <li>Higher cost than the joint replacement surgery (150-200%)</li>
                    <li>Requiring a surgery which can be burdening to a patient</li>
                </ul>
            </div>
        </section>
        <section class="effect feature">
            <div class="feature-define">
                <div class="keyword">CNV-OA<sup>&reg;</sup></div>
                <div class="desc">CNV injected with medicine<br>-> Enhancing the regenerative effect, and non-operative</div>
            </div>
            <div class="feature-figure feature-figure-1">
                <img src="@/assets/img/m/product/en/img_tnv_figure_2.jpg">
            </div>
            <div class="feature-figure feature-figure-2">
                <img src="@/assets/img/m/product/en/img_tnv_figure_3.jpg">
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/en/m/Header.vue'
import Footer from '@/components/en/m/Footer.vue'

export default {
    components: {
        Header, Footer
    }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.product {
    .overview {
        padding-bottom: pxtovw2(60px) !important;
        .page-title {
            margin-bottom: pxtovw2(120px);
            span {
                width: pxtovw2(190px) !important;
            }
        }
        .feature-define {
            margin-bottom: pxtovw2(50px);
            .desc {
                color: #fff;
            }
        }
        .feature-figure {
            overflow: auto;
            div {
                width: pxtovw2(1740px) !important;
                height: pxtovw2(540px);
                padding-left: pxtovw2(40px);
                padding-right: pxtovw2(40px);
            }
            img {
                display: block;
                width: 100%;
                height: pxtovw2(540px);
            }
        }
    }
    .feature {
        &.previous {
            padding-top: pxtovw2(60px);
            .feature-define {
                margin-bottom: pxtovw2(30px);
            }
            .feature-figure { 
                overflow: auto;
                margin-bottom: pxtovw2(40px);
                > div {
                    width: pxtovw2(2609px);
                    img {
                        display: block;
                        width: 100%;
                    }
                }
            }
            .feature-desc {
                margin-left: pxtovw2(-40px); 
                margin-right: pxtovw2(-40px);
                font-size: pxtovw2(22px);
                line-height: pxtovw2(34px);
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        position: relative;
                        padding-left: pxtovw2(20px);
                        &:before {
                            position: absolute;
                            left: 0;
                            top: pxtovw2(14px);
                            content: ' ';
                            width: pxtovw2(5px);
                            height: pxtovw2(5px);
                            border-radius: 50%;
                            background: #fff;
                        }
                    }
                    li + li {
                        margin-top: pxtovw2(20px);
                    }
                }
            }
            .feature-desc-1 {
                padding: pxtovw2(60px) pxtovw2(40px) pxtovw2(70px);
                background-color: #0072bc;
            }
            .feature-desc-2 {
                position: relative;
                padding: pxtovw2(90px) pxtovw2(40px);
                background-color: #004c7e;
                &:before {
                    content: ' ';
                    width: 100%;
                    height: pxtovw2(84px);
                    background-image: url(../../../../assets/img/m/product/arrow_down.png);
                    background-size: cover;
                    position: absolute;
                    top: pxtovw2(-42px);
                    left: 0;
                }
            }
        }
        &.effect {
            padding-top: pxtovw2(110px);
            padding-bottom: pxtovw2(240px);
            .feature-define {
                margin-bottom: pxtovw2(70px);
            }
            .feature-figure-1 {
                overflow: auto;
                img {
                    display: block;
                    width: pxtovw2(1468px) !important;
                }
                // p {
                //     margin-top: pxtovw2(40px);
                //     margin-bottom: 0;
                //     color: #383838;
                //     font-size: pxtovw2(22px);
                //     line-height: pxtovw2(34px);
                //     text-align: center;
                // }
            }
            .feature-figure-2 {
                margin-top: pxtovw2(90px);
                overflow: auto;
                img {
                    display: block;
                    width: pxtovw2(1966px) !important;
                }
            }
        }
    }
}
</style>