<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <section class="p-0">
            <header>
                <h6 class="category">홍보/활동</h6>
                <p>15</p>
            </header>
            <div class="swiper-container swiper-container-h">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/15">
                            <header>
                                <h4>한국산업기술진흥협회에서 지원하는 고경력 연구인력 채용지원사업에 과제 선정</h4>
                                <time>2021년 05월 24일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/m_thumb_news_15.jpg">
                            <div class="news-body">
                                <p>
                                    한국산업기술진흥협회에서 지원하는 2021년 상반기 고경력 연구인력 채용지원사업에 티엠디랩 과제 (고분자 소재 및 복합재료 제조)가 선정되었다.
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/14">
                            <header>
                                <h4>혈관외벽 서포트 연구 논문, Small journal cover 선정 (2021.05)</h4>
                                <time>2021년 05월 06일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/m_thumb_news_14.jpg">
                            <div class="news-body">
                                <p>
                                    2021년 3월 17일 Small (IF 11.459)에 게재된 혈관외벽 서포트 연구 논문(Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis)이 2021년 5월호(Vol.17 No.18) cover를 장식하였습니다.
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/13">
                            <header>
                                <h4>2021년 춘계 생체재료학회 우수 논문 발표상 수상</h4>
                                <time>2021년 03월 26일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/m_thumb_news_13.jpg">
                            <div class="news-body">
                                <p>
                                    2021년 3월 한국생체재료학회가 주관하는 2021년 한국생체재료학회 춘계 학술대회가 온라인 컨퍼런스로 진행되었다.
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/12">
                            <header>
                                <h4>티엠디랩-연세대 의대 공동연구, ‘의료기기 맞춤형 소재’ 국책과제 선정</h4>
                                <time>2020년 9월 15일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/promotion/thumb_news_12_ko.jpg">
                            <div class="news-body">
                                <p>
                                    체온에 반응하는 첨단 형상기억고분자 원천기술로 ‘인체삽입형 의료기기’ 분야의 새 시대 열어
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
        height: pxtovw2(273px);
        background-color: #e0e0e0;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
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