<template>
    <div class="mobile product smp-l">
        <Header />
        <section class="overview">
            <h3>제품</h3>
            <header class="page-title">
                <span>형상기억</span>
                <h4 class="mb-0">누점플러그 <sup>Innoself&trade; P</sup></h4>
            </header>
        </section>
        <section class="feature feature-1">
            <div class="feature-define">
                <div class="keyword">현황</div>
                <div class="desc">안구건조증의 원인</div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/img_innoself_p_figure_1.png">
                </div>
            </div>
        </section>
        <section class="feature feature-2">
            <div class="feature-define">
                <div class="keyword">증상</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_innoself_p_figure_2.jpg">
            </div>
        </section>
        <section class="feature feature-3">
            <div class="feature-define">
                <div class="keyword">치료</div>
                <div class="desc">
                    눈물점에 누점플러그를 삽입하여<br>
                    눈물의 소실을 막는 누점폐쇄술을 실시함
                </div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_innoself_p_figure_3.jpg">
            </div>
        </section>
        <section class="feature feature-4">
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_innoself_p_figure_4.jpg">
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
    },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.product {
    .overview {
        padding-bottom: pxtovw2(60px) !important;
    }
    .feature {
        &.feature-1 {
            padding-top: pxtovw2(45px);
            padding-bottom: pxtovw2(120px);
            .feature-define {
                margin-bottom: pxtovw2(20px);
            }
            .feature-figure {
                overflow: auto;
                div {
                    width: pxtovw2(2037px);
                    height: pxtovw2(394px);
                    padding-left: pxtovw2(40px);
                    padding-right: pxtovw2(40px);
                }
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        &.feature-2 {
            background: #ebebeb;
            padding-bottom: pxtovw2(95px);
            .feature-define {
                margin-bottom: pxtovw2(50px);
                .keyword {
                    margin-top: pxtovw2(-55px);
                }
            }
        }
        &.feature-3 {
            padding-top: pxtovw2(50px);
            padding-bottom: pxtovw2(65px);
            .feature-define {
                margin-bottom: pxtovw2(40px);
            }
        }
        &.feature-4 {
            padding-top: pxtovw2(65px);
            padding-bottom: pxtovw2(105px);
            background: #ebebeb;
        }
    }
}
</style>