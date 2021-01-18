<template>
    <div class="web product innoself-r">
        <Header />
        <SubHeader :title="'Products'" />
        <PathNav :path="['Products', 'Shape memory polymer', 'Rhinoplastry Implant']"/>
        <main id="main">
            <div class="product-title">
                <div class="category">Shape memory polymer</div>
                <h3 class="title">Rhinoplasty Implant</h3>
                <span class="brand">Innoself&trade; R</span>
            </div>
            <div class="feature feature-1">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">Issue</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-r/en/img_feature_1.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-2">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">Effect</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-r/en/img_feature_2.jpg" alt="">
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