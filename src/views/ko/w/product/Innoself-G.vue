<template>
    <div class="web product smp-l">
        <Header />
        <SubHeader :title="'제품'" />
        <PathNav :path="['제품', '형상기억고분자', '형상기억 녹내장 튜브']" />
        <main id="main">
            <div class="product-title">
                <div class="category">형상기억</div>
                <h3 class="title">형상기억 녹내장 튜브</h3>
                <span class="brand">Innoself&trade; G</span>
            </div>
            <div class="feature feature-1">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">문제점</div> 기존 치료법인 녹내장 Valve(배액 장치), Tube는 초기 단계에서 안압이 과도하게 떨어지는 경우가 자주 발생
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-g/img_feature_1.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-2">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">해결방안</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-g/img_feature_2.jpg" alt="">
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/ko/w/Header.vue'
    import SubHeader from '@/components/ko/w/SubHeader.vue'
    import PathNav from '@/components/ko/w/PathNav.vue'
    import Footer from '@/components/ko/w/Footer.vue'

    export default {
        components: {
            Header,
            SubHeader,
            PathNav,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/css/functions.scss";

    .web.product {
        .feature-container {
            margin: 0 auto;
            width: pxtovw(1540px);
        }

        .feature-define {
            display: flex;
            align-items: center;
            font-size: pxtovw(18px);
            color: #383838;
            margin: 0 auto;
            width: pxtovw(1440px);

            .keyword {
                margin-right: pxtovw(20px);
            }
        }

        .product-title {
            margin-bottom: pxtovw(55px);
        }

        .feature-1 {
            margin-bottom: pxtovw(220px);

            .feature-define {
                margin-bottom: pxtovw(80px);
            }

            .feature-image {
                display: block;
                margin: 0 auto;
                width: pxtovw(1534px);
            }
        }

        .feature-2 {
            background-image: url(../../../../assets/img/product/innoself-g/bg_feature_2.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            padding-bottom: pxtovw(80px);

            // .feature-define {
            //     position: absolute;
            //     .keyword {
            //         top: pxtovw(-130px);
            //     }
            // }

            .feature-define {
                .keyword {
                    margin-top: pxtovw(-50px);
                    margin-bottom: pxtovw(30px);
                }
            }

            .feature-image {
                display: block;
                margin: 0 auto;
                max-width: pxtovw(1599px);
                width: 100%;
            }
        }
    }
</style>