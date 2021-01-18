<template>
    <div class="web recruit">
        <Header />
        <SubHeader :title="'Recruit'" />
        <PathNav :path="['Contact', 'Recruit']" />
        <main id="main">
            <section class="steps">
                <h4 class="section-title">Process</h4>
                <div class="container-fluid">
                    <img class="img-fluid d-block mx-auto" src="@/assets/img/img_recruit_steps_en.jpg">
                </div>
            </section>
            <section class="apply">
                <h4 class="section-title">Appilication</h4>
                <div class="container-fluid">
                    <div class="box">
                        <div class="cover">
                            <hr>
                            <p>
                                We look forward to your appilication<br>
                                to make the future of TMD LAB,<br>
                                under the core value of contributing<br>
                                to the healthy life of mankind.
                            </p>
                            <a href="mailto: ask@tmdlab.com">ask@tmdlab.com</a>
                        </div>
                    </div>
                </div>
            </section>
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
        },
        data: function () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/css/functions.scss";

    .web.recruit {
        .steps {
            padding-top: pxtovw(165px);
            padding-bottom: pxtovw(145px);
            .section-title {
                margin-bottom: pxtovw(50px);
            }
        }
        .apply {
            padding-top: pxtovw(95px);
            padding-bottom: pxtovw(235px);
            background: #f7f7f7;
            .section-title {
                margin-bottom: pxtovw(50px);
            }
            .box {
                width: pxtovw(1400px);
                height: pxtovw(425px);
                margin: 0 auto;
                background-image: url(../../../assets/img/bg_recruit_apply.jpg);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                .cover {
                    float: right;
                    padding-left: pxtovw(70px);
                    padding-top: pxtovw(65px);
                    width: pxtovw(630px);
                    height: 100%;
                    background-color: rgba(34, 34, 34, .7);
                    color: white;
                    hr {
                        width: pxtovw(24px);
                        height: 1px;
                        border-color: white;
                        margin-left: 0;
                        margin-bottom: pxtovw(50px);
                    }
                    p {
                        margin-bottom: pxtovw(25px);
                        font-size: pxtovw(24px);
                        line-height: pxtovw(42px);
                        font-weight: bold;
                    }
                    a {
                        display: block;
                        width: pxtovw(251px);
                        height: pxtovw(58px);
                        border: 1px solid white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: pxtovw(18px);
                        font-family: 'Montserrat', sans-serif;
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>