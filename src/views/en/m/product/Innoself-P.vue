<template>
    <div class="mobile product innoself-p">
        <Header />
        <section class="overview">
            <h3>Products</h3>
            <header class="page-title">
                <span class="category">Shape memory</span>
                <h4 class="mb-0">Punctal plug <sup>Innoself&trade; P</sup></h4>
            </header>
        </section>
        <section class="feature feature-1">
            <div class="feature-define">
                <div class="keyword">Current<br>condition</div>
                <div class="desc">Cause of dry eye syndrome</div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/en/img_innoself_p_figure_1.png">
                </div>
            </div>
        </section>
        <section class="feature feature-2">
            <div class="feature-define">
                <div class="keyword">Symptom</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_p_figure_2.jpg">
            </div>
        </section>
        <section class="feature feature-3">
            <div class="feature-define">
                <div class="keyword">Treatment</div>
                <div class="desc">
                    Punctal obstruction is performed by inserting a punctal plug into the tear point to prevent the loss of tears.
                </div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_p_figure_3.jpg">
            </div>
        </section>
        <section class="feature feature-4">
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_p_figure_4.jpg">
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
        padding-bottom: pxtovw2(60px) !important;
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