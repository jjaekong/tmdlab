<template>
    <div class="web product innoself-p">
        <Header />
        <SubHeader :title="'Products'" />
        <PathNav :path="['Products', 'Shape memory polymer', 'Punctal plug']"/>
        <main id="main">
            <div class="product-title">
                <div class="category">Shape memory polymer</div>
                <h3 class="title">Punctal plug</h3>
                <span class="brand">Innoself&trade; P</span>
            </div>
            <div class="feature feature-1">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">Current<br>Condition</div> Cause of dry eye syndrome
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-p/en/img_feature_1.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-2">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">Symptom</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-p/en/img_feature_2.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-3">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">Treatment</div> Punctal obstruction is performed by inserting a punctal plug into the tear point to prevent the loss of tears.
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-p/en/img_feature_3.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-4">
                <div class="feature-container">
                    <img class="feature-image" src="@/assets/img/product/innoself-p/en/img_feature_4.jpg" alt="">
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/en/w/Header.vue'
    import SubHeader from '@/components/en/w/SubHeader.vue'
    import PathNav from '@/components/en/w/PathNav.vue'
    import Footer from '@/components/en/w/Footer.vue'

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