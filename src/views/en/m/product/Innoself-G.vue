<template>
    <div class="mobile product innoself-g">
        <Header />
        <section class="overview">
            <h3>Products</h3>
            <header class="page-title">
                <span class="category">Shape memory</span>
                <h4 class="mb-0">Glaucoma drainage device <sup>Innoself&trade; G</sup></h4>
            </header>
        </section>
        <section class="feature feature-1">
            <div class="feature-define">
                <div class="keyword">Issue</div>
                <div class="desc">
                    Glaucoma drainage device often cause<br>
                    too much initial drop in intraocular<br>
                    pressure in the early phase
                </div>
            </div>
            <hr>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_g_figure_1.jpg"> 
            </div>
        </section>
        <section class="feature feature-2">
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_g_figure_2.jpg">
            </div>
        </section>
        <section class="feature feature-3">
            <div class="feature-define">
                <div class="keyword">Effect</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_innoself_g_figure_3.jpg">
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
        // .page-title {
        //     div {
        //         span:nth-of-type(2) {
        //             width: auto !important;
        //             border: 0 !important;
        //             font-size: pxtovw2(30px) !important;
        //             margin-left: pxtovw2(15px);
        //             font-family: "MontSerrat", sans-serif;
        //             font-weight: bold;
        //         }
        //     }
        // }
    }
    .feature {
        &.feature-1 {
            padding-top: pxtovw2(45px);
            padding-bottom: pxtovw2(70px);
            hr {
                margin-top: pxtovw2(35px);
                margin-bottom: pxtovw2(60px);
                border-top: 1px solid #e6e6e6;
                border-bottom: 1px solid #595959;
            }
        }
        &.feature-3 {
            background-image: url(../../../../assets/img/m/product/bg_innoself_g_figure_3.jpg);
            background-size: cover;
            background-position: 50% 50%;
            padding-top: pxtovw2(35px);
            padding-bottom: pxtovw2(80px);
            .feature-define {
                margin-bottom: pxtovw2(20px);
            }
            .feature-figure {
                padding-left: pxtovw2(40px);
                padding-right: pxtovw2(40px);
                img {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
}
</style>