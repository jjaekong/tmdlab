<template>
    <div class="web product smp-l">
        <Header />
        <SubHeader :title="'제품'" />
        <PathNav :path="['제품', '형상기억고분자', '누점플러그']" />
        <main id="main">
            <div class="product-title">
                <div class="category">형상기억</div>
                <h3 class="title">누점플러그</h3>
                <span class="brand">Innoself&trade; P</span>
            </div>
            <div class="feature feature-1">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">현황</div> 안구건조증의 원인
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-p/img_feature_1.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-2">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">증상</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-p/img_feature_2.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-3">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">치료</div> 눈물점에 누점플러그를 삽입하여 눈물의 소실을 막는 누점폐쇄술을 실시함
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-p/img_feature_3.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-4">
                <div class="feature-container">
                    <img class="feature-image" src="@/assets/img/product/innoself-p/img_feature_4.jpg" alt="">
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
            margin-bottom: pxtovw(130px);

            .feature-define {
                margin-bottom: pxtovw(40px);
            }

            .feature-image {
                 display: block;
                margin: 0 auto;
                width: pxtovw(1458px);
            }
        }

        .feature-2 {
            margin-bottom: pxtovw(50px);
            padding-bottom: pxtovw(60px);
            background: #ebebeb;

            .feature-define {
                position: relative;

                .keyword {
                    position: absolute;
                    top: pxtovw(-50px);
                }
            }

            .feature-image {
                display: block;
                margin: 0 auto;
                width: pxtovw(1540px);
            }
        }

        .feature-3 {
            margin-bottom: pxtovw(40px);

            .feature-define {
                margin-bottom: pxtovw(30px);
            }

            .feature-image {
                 display: block;
                margin: 0 auto;
                width: pxtovw(1240px);
            }
        }


        .feature-4 {
            padding-top: pxtovw(50px);
            padding-bottom: pxtovw(55px);
            background: #ebebeb;

            .feature-image {
                 display: block;
                margin: 0 auto;
                width: pxtovw(1482px);
            }
        }
    }
</style>