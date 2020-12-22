<template>
    <div class="mobile product smp-l">
        <Header />
        <section class="overview">
            <h3>제품</h3>
            <header class="page-title">
                <span>형상기억</span>
                <h4 class="mb-0">코 성형물 임플란트 <sup>Innoself&trade; R</sup></h4>
            </header>
        </section>
        <section class="feature feature-1">
            <div class="feature-define">
                <div class="keyword">문제점</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_innoself_r_figure_1.jpg">
            </div>
        </section>
        <section class="feature feature-2">
            <h5>보형물 삽입</h5>
            <div class="feature-figure">
                <div><img src="@/assets/img/m/product/img_innoself_r_figure_2.png"></div>
            </div>
        </section>
        <section class="feature feature-3">
            <div class="feature-define">
                <div class="keyword">해결방안</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_innoself_r_figure_3.jpg">
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
        padding-bottom: pxtovw2(80px) !important;
    }
    .feature {
        &.feature-1 {
            padding-bottom: pxtovw2(80px);
            .feature-define {
                margin-bottom: pxtovw2(30px);
            }
            .keyword {
                margin-top: pxtovw2(-55px);
            }
        }
        &.feature-2 {
            padding-top: pxtovw2(60px);
            padding-bottom: pxtovw2(70px);
            background: #ebebeb;
            h5 {
                margin-bottom: pxtovw2(50px);
                font-size: pxtovw2(24px);
                color: #383838;
                text-align: center;
            }
            .feature-figure {
                overflow: auto;
                div {
                    width: pxtovw2(874px);
                    height: pxtovw2(490px);
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
        &.feature-3 {
            padding-top: pxtovw2(35px);
            padding-bottom: pxtovw2(100px);
            .feature-define {
                margin-bottom: pxtovw2(30px);
            }
        }
    }
}
</style>