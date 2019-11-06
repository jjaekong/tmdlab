<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <section class="p-0">
            <header>
                <h6 class="category">Promotion/activity</h6>
                <p>4</p>
            </header>
            <div class="swiper-container swiper-container-h">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/4">
                            <header>
                                <h4>Graduated the entrance master course for medical devices, under the medical ...</h4>
                                <time>16th of July, 2019</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_4.jpg">
                            <div class="news-body">
                                <p>
                                    All employees in TMD LAB Corporation have completed 3-day CHAMP training course (Consortium for HRD Ability Magnified Program) from 16th to 18th in 2019, held by KMDIA (Korea Medical Devices Industry Association). Through the course, ...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/3">
                            <header>
                                <h4>Participated into the KTERMS (Korean Tissue Engineering and Regenerative ...</h4>
                                <time>6th of June, 2019</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_3.jpg">
                            <div class="news-body">
                                <p>
                                    KTERMS (Korea Tissue Engineering and Regenerative Medicine Society) has held its own international academic conference for 3 days from 6th to 8th of June in 2019, at International Convention Center Jeju. KTERMS is an integrated academic conference which ...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/2">
                            <header>
                                <h4>Obtained the non-exclusive license for shape memory polymer from the ...</h4>
                                <time>21st of May, 2019</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_2.jpg">
                            <div class="news-body">
                                <p>
                                    In order to develop and commercialize the human insertion stent using shape memory polymer, we have obtained the non-exclusive license on the patent: ‘a photo-crosslinkable shape memory polymer and manufacturing method thereof (patent registration ...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/en/promotion/news/1">
                            <header>
                                <h4>Applied for 2 patents related to stent using shape memory polymer (19th of ...</h4>
                                <time>19th of December, 2018</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_1.jpg">
                            <div class="news-body">
                                <p>
                                    2 patents have been applied related to stent development using shape memory polymer. First is ‘low molecular heparin-releasing structure in spreading shape memory polymer stent at the point of occlusion (application number: 10-2018-0164737)’. It holds the ...
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
        height: pxtovw2(130px);
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
        height: pxtovw2(273px);
        background: #e0e0e0;
        border: 0;
    }
    .news-body {
        height: pxtovw2(256px);
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