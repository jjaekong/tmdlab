<template>
    <div class="web product innoself-g">
        <Header />
        <SubHeader :title="'Products'" />
        <PathNav :path="['Products', 'Shape memory polymer', 'Glaucoma drainage device']"/>
        <main id="main">
            <div class="product-title">
                <span class="category">Shape memory</span>
                <h3 class="title">Glaucoma drainage device</h3>
                <span class="brand">Innoself&trade; G</span>
            </div>
            <div class="feature feature-1">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">Issue</div> Glaucoma drainage device often in too much drop of intraocular pressure in the early phase
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-g/en/img_feature_1.jpg" alt="">
                </div>
            </div>
            <div class="feature feature-2">
                <div class="feature-container">
                    <div class="feature-define">
                        <div class="keyword">Effect</div>
                    </div>
                    <img class="feature-image" src="@/assets/img/product/innoself-g/en/img_feature_2.jpg" alt="">
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