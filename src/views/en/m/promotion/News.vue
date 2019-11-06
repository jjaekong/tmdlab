<template>
    <div class="mobile promotion news">
        <Header />
        <section class="overview">
            <h3>Promotion/activity</h3>
            <h4>
                Feel free to check on the news of TMD LAB.
            </h4>
            <p>News and updates will be firstly noticed.</p>
        </section>
        <section class="news-list">
            <h4>NEW <span class="bar"></span> <b>4</b></h4>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/4">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_4.jpg">
                            <div class="news-body">
                                <h5>Graduated the entrance master course for medical devices, under the medical device CHAMP curriculum 2019 (16th of July, 2019 – 18th of July, 2019)</h5>
                                <time>16th of July, 2019</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/3">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_3.jpg">
                            <div class="news-body">
                                <h5>Participated into the KTERMS (Korean Tissue Engineering and Regenerative Medicine Society) conference event 2019, selected to be awarded ‘superb’ in the poster division</h5>
                                <time>6th of June, 2019</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/2">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_2.jpg">
                            <div class="news-body">
                                <h5>Obtained the non-exclusive license for shape memory polymer from the industrial-educational cooperation group of Yonsei University (21st of May, 2019)</h5>
                                <time>21st of May, 2019</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/1">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_1.jpg">
                            <div class="news-body">
                                <h5>Applied for 2 patents related to stent using shape memory polymer (19th of December, 2018)</h5>
                                <time>19th of December, 2018</time>
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
        Header, Footer
    },
    data: function() {
        return {
            swiper: null,
        }
    },
    mounted: function() {
        this.swiper = new Swiper ('.mobile.promotion.news .swiper-container', {
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
    .news-list {
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
        .news-item {
            width: pxtovw2(450px);
            height: pxtovw2(620px);
            background: #fff;
            display: flex;
            flex-direction: column;
            box-shadow: 0 pxtovw2(5px) pxtovw2(19.95px) pxtovw2(1.05px) rgba(0, 0, 0, 0.1);
            text-decoration: none;
            .news-image {
                width: pxtovw2(450px);
                height: pxtovw2(238px);
            }
            .news-body {
                flex: 1;
                padding: pxtovw2(35px) pxtovw2(30px);
                display: flex;
                flex-direction: column;
                h5 {
                    flex: 1;
                    color: #383838;
                    font-size: pxtovw2(26px);
                    line-height: pxtovw2(34px);
                }
                time {
                    color: #a1a1a1;
                    font-size: pxtovw2(20px);
                    line-height: pxtovw2(30px);
                }
            }
        }
    }
}
</style>