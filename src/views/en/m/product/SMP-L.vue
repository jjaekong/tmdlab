<template>
    <div class="mobile product smp-l">
        <Header />
        <section class="overview">
            <h3>Products</h3>
            <header class="page-title">
                <!-- <span>형상기억</span> -->
                <h4>Shape memory  Lacrimal duct stent <sup>SMP-L<sup>&reg;</sup></sup></h4>
            </header>
            <div class="feature-define">
                <div class="keyword">Current condition</div>
                <div class="desc">
                    Threat of micro-dust, pointed out to be a significant social issue also, has much more people afflicted by it which includes dry eyes, nasolacrimal duct atresia.
                </div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/en/img_smp_l_figure_0.png">
                </div>
            </div>
        </section>
        <section class="cure feature">
            <div class="feature-define">
                <div class="keyword">Treatment</div>
                <div class="desc">Maintaining the lacrimal duct diameter by self-expansion, after being inserted into the point of nasolacrimal duct obstruction</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_smp_l_figure_1.jpg">
            </div>
        </section>
        <section class="symptom feature">
            <div class="feature-define">
                <div class="keyword">Symptom</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_smp_l_figure_2.jpg">
            </div>
        </section>
        <section class="effect feature">
            <div class="feature-define">
                <div class="keyword">Effect</div>
                <div class="desc">
                    Stent for lacrimation treatment due to nasolacrimal duct obstruction<br>
                    Maintaining the lacrimal duct diameter by self-expansion, after being inserted into the point of nasolacrimal duct occlusion<br>
                    Inhibition effect against biofilm formation
                </div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/en/img_smp_l_figure_3.jpg">
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
.mobile.product {
    .overview {
        padding-bottom: pxtovw2(60px) !important;
        .page-title {
            margin-bottom: pxtovw2(120px);
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
                width: pxtovw2(2303px) !important;
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
        &.cure {
            padding-top: pxtovw2(60px);
            padding-bottom: pxtovw2(175px);
            .feature-figure {
                margin-top: pxtovw2(50px);
            }
        }
        &.symptom {
            position: relative;
            padding-top: pxtovw2(100px);
            padding-bottom: pxtovw2(105px);
            background: #ebebeb;
            .feature-define {
                position: absolute;
                top: 0;
            }
            .keyword {
                margin-top: pxtovw2(-50px);
                margin-bottom: pxtovw2(100px);
            }
        }
        &.effect {
            padding-top: pxtovw2(110px);
            padding-bottom: pxtovw2(100px);
            .feature-figure {
                margin-top: pxtovw2(75px);
            }
        }
    }
}
</style>