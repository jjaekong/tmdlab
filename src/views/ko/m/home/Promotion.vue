<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <section class="p-0">
            <header>
                <h6 class="category">홍보/활동</h6>
                <p>4</p>
            </header>
            <div class="swiper-container swiper-container-h">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/10">
                            <header>
                                <h4>혈관 신생 유도 3차원 마이크로 채널 네트워크 논문, 국제 학술지 게재</h4>
                                <time>2020년 1월 30일</time>
                            </header>
                            <!-- <img class="news-image" src="@/assets/img/m/promotion/thumb_news_4.jpg"> -->
                            <div class="news-body">
                                <p>
                                    ㈜티엠디랩은 손상된 조직으로의 혈관 신생 유도를 돕는 하이드로겔 기반 마이크로 채널 네트워크를 개발하였고 그 효과를 Nature 자매지인 ‘Nature Communication’에 게재하였다 (논문 제목: Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion).<br><br>
                                    손상된 부위로의 혈관 신생 유도는 오랫동안 해결되지 않은 문제였다. Pro-angiogenic molecule을 이용한 국소 치료가 가장 일반적인 접근법이나 염증성 커플링, 종양성 혈관 활성화 및 표적 외 순환을 포함하는 중요한 부작용이 있다고 알려져 있다.
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/9">
                            <header>
                                <h4>[바이오스펙테이터] 티엠디랩, '형상기억 고분자'로 新스텐트 개발 도전</h4>
                                <time>2019년 12월 17일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_9.jpg">
                            <div class="news-body">
                                <p>
                                    성학준 연세의대 교수 2018년 국내 귀국해 창업<br>
                                    형상기억 기술로 최소침습 및 안전성 확보<br>
                                    누관스텐트부터 파이프라인 확대
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/8">
                            <header>
                                <h4>중소벤처기업부에서 주관하는 창업성장기술개발사업 ‘혁신형 창업과제’ 선정</h4>
                                <time>2019년 11월 25일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_8.jpg">
                            <div class="news-body">
                                <p>
                                    ㈜티엠디랩은 중소벤처기업부가 지원하는 창업성장기술개발사업 ‘혁신형 창업과제’로 최종 선정되었다. 이번 사업 개발 기간은 2019년 11월부터 2021년 11월까지 총 24개월이며 총 4억원의 연구비를 지원받게 되었다. 
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/7">
                            <header>
                                <h4>[한국경제] 체온으로 몸 막힌 곳 뚫는 스텐트 신소재 나온다</h4>
                                <time>2019년 11월 20일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_7.jpg">
                            <div class="news-body">
                                <p>
                                    티엠디랩, 형상기억 소재 개발중<br>
                                    실리콘보다 수명 길고 감염 적어<br><br>
                                    “실리콘으로 제조한 기존 스텐트의 단점을 보완한 형상기억 고분자 스텐트를 개발하고 있습니다.”
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
        // height: pxtovw2(273px);
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