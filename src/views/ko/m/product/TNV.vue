<template>
    <div class="mobile product tnv">
        <Header />
        <section class="overview">
            <h3>제품</h3>
            <header class="page-title">
                <span>세포유래 나노소포체</span>
                <h4>관절염 치료제 <sup>CNV-OA<sup>&reg;</sup></sup></h4>
            </header>
            <div class="feature-define">
                <div class="keyword">현황</div>
                <div class="desc">
                    총 인구대비 노인 인구 증가추세와 동반되는<br>
                    무릎 관절염에 대한 수요가 증가하고<br>
                    치료제 시장이  확대되고 있음
                </div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/img_tnv_figure_0.png">
                </div>
            </div>
        </section>
        <section class="previous feature">
            <div class="feature-define">
                <div class="keyword">기존</div>
                <div class="desc">판매 성장세가 높으나 高價이며 수술이 동반 되어 부담</div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/img_tnv_figure_1.jpg">
                </div>
            </div>
            <div class="feature-desc feature-desc-1">
                <ul>
                    <li>메디포스트, 줄기세포치료제 '카티스템' 판매량 전년比 40% 증가 (2018.04.20.)</li>
                    <li>국내 줄기세포 치료제 사상 처음으로 연 매출 100억원을 넘어서며 흥행 신약 대열에 합류함.</li>
                </ul>
            </div>
            <div class="feature-desc feature-desc-2">
                <ul>
                    <li>인공관절 치환술보다 고가 (1.5-2배)</li>
                    <li>수술이 동반되어 환자에 부담</li>
                </ul>
            </div>
        </section>
        <section class="effect feature">
            <div class="feature-define">
                <div class="keyword">CNV-OA<sup>&reg;</sup></div>
                <div class="desc">약물이 담지된 세포막 유래 나노소포체 <br>-&gt; 재생효과 증대, 비수술법</div>
            </div>
            <div class="feature-figure feature-figure-1">
                <img src="@/assets/img/m/product/img_tnv_figure_2.jpg">
            </div>
            <div class="feature-figure feature-figure-2">
                <img src="@/assets/img/m/product/img_tnv_figure_3.jpg">
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/ko/m/Header.vue'
import Footer from '@/components/ko/m/Footer.vue'

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
                width: pxtovw2(1741px) !important;
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
                margin-bottom: pxtovw2(80px);
                > div {
                    width: pxtovw2(2603px);
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
                    width: pxtovw2(1970px) !important;
                }
            }
        }
    }
}
</style>