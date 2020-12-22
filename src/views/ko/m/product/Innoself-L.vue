<template>
    <div class="mobile product smp-l">
        <Header />
        <section class="overview">
            <h3>제품</h3>
            <header class="page-title">
                <span>형상기억</span>
                <h4>누도·누액관 스텐트 <sup>Innoself&trade; L</sup></h4>
            </header>
            <div class="feature-define">
                <div class="keyword">현황</div>
                <div class="desc">
                    사회적인 문제로까지 지적된 미세먼지의 위협으로,<br>
                    각종 안구건조, 비루관 폐쇄 등 사람에게 심각한<br>
                    피해가 급증하고 있습니다
                </div>
            </div>
            <div class="feature-figure">
                <div>
                    <img src="@/assets/img/m/product/img_smp_l_figure_0.png">
                </div>
            </div>
        </section>
        <section class="cure feature">
            <div class="feature-define">
                <div class="keyword">치료</div>
                <div class="desc">비루관의 폐색 부위에 삽입된 후 자가팽창하여<br>눈물길 개통을 유지</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_smp_l_figure_1.jpg">
            </div>
        </section>
        <section class="symptom feature">
            <div class="feature-define">
                <div class="keyword">증상</div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_smp_l_figure_2.jpg">
            </div>
        </section>
        <section class="effect feature">
            <div class="feature-define">
                <div class="keyword">효과</div>
                <div class="desc">
                    비루관 폐쇄로 인한 유류증 치료를 위한 스텐트,<br>
                    비루관의 폐색 부위에 삽입된 후 자가팽창하여<br>
                    눈물길 개통을 유지, 바이오필름 생성 억제 효과
                </div>
            </div>
            <div class="feature-figure">
                <img src="@/assets/img/m/product/img_smp_l_figure_3.jpg">
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