<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <section class="p-0">
            <header>
                <h6 class="category">Promotion/activity</h6>
                <p>12</p>
            </header>
            <div class="swiper-container swiper-container-h">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/15">
                            <header>
                                <h4>Selected for the recruitment support project for highly experienced researchers supported by the Korea Industrial Technology Association</h4>
                                <time>24th May 2021</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/m_thumb_news_15.jpg">
                            <div class="news-body">
                                <p>
                                    The TMD Lab project (manufacture of polymer materials and composite materials) was selected for ...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/14">
                            <header>
                                <h4>Outer Vascular Wall Support Research Paper, Selected as Small Journal Cover (2021.05)</h4>
                                <time>6th May 2021</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/m_thumb_news_14.jpg">
                            <div class="news-body">
                                <p>
                                    Outer Vascular Wall Support Research Paper(Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis), published in Small (IF 11.459)
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/13">
                            <header>
                                <h4>2021 Spring Biomaterials Society Outstanding Paper Presentation Award</h4>
                                <time>26th March 2021</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/m_thumb_news_13.jpg">
                            <div class="news-body">
                                <p>
                                    In March 2021, the 2021 Korean Society for Biomaterials Spring Conference hosted by the Korean Society for Biomaterials was held as an online conference.
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/12">
                            <header>
                                <h4>TMD Lab - Yonsei University College of Medicine Joint Research, selected as a “medical device customized material” national assignment.</h4>
                                <time>15th September 2020</time>
                            </header>
                            <img class="news-image" src="@/assets/img/promotion/thumb_news_12_en.jpg">
                            <div class="news-body">
                                <p>
                                    Opening a new era in the field of “internal medical devices” with advanced shape memory polymer source technology that responds to body temperature
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <img class="scrolldown" src="@/assets/img/m/ico_arrow_down.png">
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

header {
    display: flex;
    align-items: center;
    p {
        margin: 0 0 0 pxtovw2(20px);
        color: #fff;
        font-weight: bold;
        font-size: pxtovw2(44px);
        line-height: pxtovw2(40px);
    }
}
.swiper-slide {
    width: pxtovw2(518px);
    height: pxtovw2(660px);
}
.news-item {
    display: block;
    width: pxtovw2(518px);
    height: pxtovw2(660px);
    background-color: #fff;
    text-decoration: none;
    header {
        position: relative;
        // height: pxtovw2(130px);
        padding: pxtovw2(25px) pxtovw2(25px);
        letter-spacing: pxtovw2(-1px);
        h4 {
            font-size: pxtovw2(24px);
            line-height: pxtovw2(36px);
            color: #373737;
        }
        time {
            position: absolute;
            bottom: pxtovw2(10px);
            right: pxtovw2(15px);
            font-size: pxtovw2(16px);
            line-height: pxtovw2(26px);
            color: #a1a1a1;
        }
    }
    .news-image {
        width: pxtovw2(518px);
        // height: pxtovw2(273px);
        background: #e0e0e0;
        border: 0;
    }
    .news-body {
        // height: pxtovw2(256px);
        padding: pxtovw2(40px) pxtovw2(25px);
        font-size: pxtovw2(22px);
        line-height: pxtovw2(34px);
        color: #4e4e4e;
        letter-spacing: pxtovw2(-1px);
        p {
            margin: 0;
        }
    }
}
</style>