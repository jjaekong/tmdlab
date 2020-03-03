<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <section class="p-0">
            <header>
                <h6 class="category">Promotion/activity</h6>
                <p>11</p>
            </header>
            <div class="swiper-container swiper-container-h">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/11">
                            <header>
                                <h4>Thesis on vessel stabilization and vessel generation induction of the stem cell embedded to the enzyme-crosslinkable gelatin gel published at the international academic journal (Science Advances, IF 12.8)</h4>
                                <time>26th February 2020</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_11.jpg">
                            <div class="news-body">
                                <p>
                                    TMD LAB published the research result ...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/10">
                            <header>
                                <h4>Thesis on the 3-dimensional micro-channel network inducing vessel generation published at the international academic journal (Nature Communication, IF 11.88)</h4>
                                <time>30th January 2020</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_10.jpg">
                            <div class="news-body">
                                <p>
                                    TMD LAB Corporation developed the hydrogel-based micro-channel network which can induce vessel generation from the deteriorated tissue. Its effect is published at ‘Nature Communication’ a sister journal of Nature (title: Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion).<br><br>
                                    Vessel generation induction from the deteriorated part has remained unsolved ...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/9">
                            <header>
                                <h4>[Biospectator] TMD LAB challenges in developing the new concept stent using ‘shape memory polymer’ (17th of December 2019)</h4>
                                <time>17th of December 2019</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_9.jpg">
                            <div class="news-body">
                                <p>
                                    Company created by Sung Hak-Joon, professor Yonsei University College of Medicine, after returning to Korea in 2018 Securing safety ...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/8">
                            <header>
                                <h4>‘Innovative assignment for company creation’ selected out of the company creation, growth and technology development project held by Ministry of SMEs and Startups</h4>
                                <time>25th of November 2019</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_8.jpg">
                            <div class="news-body">
                                <p>
                                    TMD LAB Corporation is finally selected as the ‘innovative assignment for company creation’ ...
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