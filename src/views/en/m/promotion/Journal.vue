<template>
    <div class="mobile promotion journal">
        <Header />
        <section class="overview">
            <h3>Promotion/activity</h3>
            <h4>
                Research &amp; Development (Publications)
            </h4>
        </section>
        <section class="journal-list">
            <h4>NEW <span class="bar"></span> <b>8</b></h4>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/8">
                            <div class="journal-body">
                                <h5>Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis</h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>Small (2021.03.17, IF 11.459)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/7">
                            <div class="journal-body">
                                <h5>Shape Memory Tube Plug for Fine-control of Intraocular Pressure by Glaucoma Devices
                                </h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>ACS Biomaterials Science &amp; Engineering (2020.06.08, IF 4.152)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/6">
                            <div class="journal-body">
                                <h5>External Self-Closing Tube to Occlude a Vessel Gradually as a Therapeutic Means of
                                    Portosystemic Shunt</h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>Advances Therapeutics (2020.05.14)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/5">
                            <div class="journal-body">
                                <h5>Anti-Atherogenic Effect of Stem Cell Nanovesicles Targeting Disturbed Flow sites
                                </h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>Small (2020.04.16, IF 10.856)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/4">
                            <div class="journal-body">
                                <h5>Hydrogel Crosslinking-Programmed Release of Nitric Oxide Regulates Source-Dependent
                                    ...</h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>Science Advances<br>(2020.02.26, IF 12.8)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/3">
                            <div class="journal-body">
                                <h5>Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion.</h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>Nature Communication<br>(2020.01.30, IF 11.88)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/2">
                            <div class="journal-body">
                                <h5>Nasolacrimal stent with shape memory as an advanced alternative to silicone products
                                </h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>Acta Biomaterilia<br>(2019.11.07, IF 6.638)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="journal-item" to="/m/en/promotion/journal/1">
                            <div class="journal-body">
                                <h5>Development of a Shape-Memory Tube to Prevent Vascular Stenosis</h5>
                                <dl>
                                    <dt>Published at:</dt>
                                    <dd>Advanced Materials<br>(2019.08.27, IF 25.809)</dd>
                                </dl>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <router-view />
    </div>
</template>

<script>
    import Header from '@/components/en/m/Header.vue'
    import Footer from '@/components/en/m/Footer.vue'

    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'

    export default {
        components: {
            Header,
            Footer
        },
        data: function () {
            return {
                swiper: null,
            }
        },
        mounted: function () {
            this.swiper = new Swiper('.mobile.promotion.journal .swiper-container', {
                slidesPerView: 'auto',
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/css/functions.scss";

    .mobile.promotion {
        .overview {
            padding-left: pxtovw2(40px);
            padding-right: pxtovw2(40px);
            padding-top: pxtovw2(150px);
            padding-bottom: pxtovw2(50px);
            background-image: url(../../../../assets/img/m/promotion/bg_news.jpg);
            background-size: cover;
            background-position: 50% 0;
            color: #fff;

            a {
                color: #fff;
                text-decoration: none;
            }

            h3 {
                display: inline-block;
                font-size: pxtovw2(30px);
                line-height: pxtovw2(56px);
                border-bottom: pxtovw2(2px) solid #fff;
                margin-bottom: pxtovw2(60px);
            }

            h4 {
                margin-left: pxtovw2(40px);
                margin-bottom: pxtovw2(25px);
                font-size: pxtovw2(54px);
                line-height: pxtovw2(66px);
                font-weight: bold;
            }

            p {
                margin-left: pxtovw2(40px) !important;
                font-size: pxtovw2(22px);
                line-height: pxtovw2(26px);
                margin: 0;
            }
        }

        .journal-list {
            padding-top: pxtovw2(30px);
            padding-bottom: pxtovw2(150px);
            background: #f0f0f0;

            h4 {
                display: flex;
                align-items: center;
                padding-left: pxtovw2(40px);
                padding-right: pxtovw2(40px);
                margin-bottom: pxtovw2(30px);
                font-size: pxtovw2(18px);
                line-height: pxtovw2(34px);
                color: #2457ca;

                .bar {
                    width: pxtovw2(18px);
                    height: 1px;
                    margin-left: pxtovw2(5px);
                    margin-right: pxtovw2(10px);
                    background: #000;
                }

                b {
                    font-size: pxtovw2(26px);
                    color: #383838;
                }
            }

            .swiper-wrapper {
                padding-bottom: pxtovw2(30px);
            }

            .swiper-slide {
                width: pxtovw2(450px);
                height: pxtovw2(620px);
                margin-left: pxtovw2(40px);

                &:last-child {
                    margin-right: pxtovw2(40px);
                }
            }

            .journal-item {
                width: pxtovw2(450px);
                height: pxtovw2(500px);
                background: #fff;
                display: flex;
                flex-direction: column;
                box-shadow: 0 pxtovw2(5px) pxtovw2(19.95px) pxtovw2(1.05px) rgba(0, 0, 0, 0.1);
                text-decoration: none;

                .journal-body {
                    flex: 1;
                    padding: pxtovw2(35px) pxtovw2(30px);
                    display: flex;
                    flex-direction: column;

                    h5 {
                        flex: 1;
                        color: #383838;
                        font-size: pxtovw2(38px);
                        line-height: pxtovw2(48px);
                    }

                    dl {
                        margin: 0;
                        color: #a1a1a1;
                        font-size: pxtovw2(22px);
                        line-height: pxtovw2(30px);

                        dd {
                            margin: 0;
                        }
                    }
                }
            }
        }
    }
</style>