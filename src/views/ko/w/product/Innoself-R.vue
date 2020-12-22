<template>
    <div class="web product smp-l">
        <Header />
        <SubHeader :title="'제품'" />
        <PathNav :path="['제품', '형상기억고분자', '코 성형물 임플란트']" />
        <main id="main">
            <div class="product-title">
                <div class="category">형상기억</div>
                <h3 class="title">코 성형물 임플란트</h3>
                <span class="brand">Innoself&trade; R</span>
            </div>
            <div class="feature feature-1">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">문제점</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-r/img_feature_1.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-2">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">해결방안</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-r/img_feature_2.jpg" alt="">
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
            padding-top: pxtovw(50px);
            padding-bottom: pxtovw(70px);
            margin-top: pxtovw(105px);
            margin-bottom: pxtovw(105px);
            background: #ebebeb;

            .feature-define {
                margin-bottom: pxtovw(5px);
                height: 0;
                .keyword {
                    top: pxtovw(-50px);
                }
            }

            .feature-image {
                display: block;
                width: pxtovw(1240px);
                margin-left: pxtovw(150px);
            }
        }

        .feature-2 {
            margin-bottom: pxtovw(210px);

            .feature-define {
                margin-bottom: pxtovw(10px);
            }

            .feature-image {
                display: block;
                width: pxtovw(1240px);
                margin-left: pxtovw(150px);
            }
        }
    }
</style>