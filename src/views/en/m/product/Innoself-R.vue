<template>
    <div class="mobile product innoself-r">
        <Header />
        <section class="overview">
            <h3>Products</h3>
            <header class="page-title">
                <span class="category">Shape memory</span>
                <h4 class="mb-0">Rhinoplasty Implant <sup>Innoself&trade; R</sup></h4>
            </header>
        </section>
        <section class="feature feature-1">
            <div class="feature-define">
                <div class="keyword">Issue</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_r_figure_1.jpg">
            </div>
        </section>
        <section class="feature feature-2">
            <h5>Implantation</h5>
            <div class="feature-figure">
                <div><img src="@/assets/img/m/product/en/img_innoself_r_figure_2.png"></div>
            </div>
        </section>
        <section class="feature feature-3">
            <div class="feature-define">
                <div class="keyword">Effect</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_r_figure_3.jpg">
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
    },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.product {
    .overview {
        padding-bottom: pxtovw2(80px) !important;
        .page-title {
            .category {
                margin-bottom: 0;
                margin-right: pxtovw2(10px);
                width: pxtovw2(180px) !important;
            }
        }
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