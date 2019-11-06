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
                        <router-link class="news-item" to="/m/ko/promotion/news/4">
                            <header>
                                <h4>2019년 의료기기 CHAMP 교육과정 의료기기<br>입문 마스터 과정 수료 (2019.07.16 ~ 2019...</h4>
                                <time>2019년 7월 16일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_4.jpg">
                            <div class="news-body">
                                <p>
                                    2019년 7월 16일부터 18일까지 3일에 걸쳐 <br>
                                    한국의료기기산업협회 (KMDIA)에서 주관하는 <br>
                                    국가인적자원개발컨소시엄 사업 (Consortium for <br>
                                    HRD Ability Magnified Program, CHAMP) <br>
                                    교육을 (주) 티엡디랩 전 직원이 수료하였다...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/3">
                            <header>
                                <h4>2019년 한국조직공학재생의학회 (KTERMS)<br>학술대회 참여, 포스터 부문 우수상 선정...</h4>
                                <time>2019년 6월 6일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_3.jpg">
                            <div class="news-body">
                                <p>
                                    한국조직공학 재생의학회가 주관하는 국제학술대회인 <br>
                                    ‘Korea Tissue Engineering and Regenerative <br>
                                    Medicine Society (KTERMS) 2019’가 2019년 6월 <br>
                                    6일부터 8일까지 3일에 걸쳐 제주국제컨벤션센터에서<br> 
                                    개최되었다. KTERMS는 의학, 자연과학, 공학 등...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/2">
                            <header>
                                <h4>연세대학교 산학협력단으로부터 형상기억고분자<br>통상실시권 획득 (2019.05.21)</h4>
                                <time>2019년 5월 21일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_2.jpg">
                            <div class="news-body">
                                <p>
                                    형상기억고분자를 이용한 인체삽입형 스텐트의 개발 <br>
                                    및 상용화를 위해 연세대학교 산학협력단이 <br>
                                    보유하고 있는 “광가교가 가능한 형상기억고분자 및 <br>
                                    이의 제조방법 (대한민국 특허등록번호10-1906472) <br>
                                    (PCT/KR2018/001190)“ 특허에 대한 통상실시권...
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/1">
                            <header>
                                <h4>형상기억고분자를 이용한 스텐트 관련<br>특허 2건 출원 (2018.12.19)</h4>
                                <time>2018년 12월 19일</time>
                            </header>
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_1.jpg">
                            <div class="news-body">
                                <p>
                                    형상기억고분자를 스텐트 개발과 관계된 특허 2건을 <br>
                                    출원하였다. 첫번째 특허명은 “형상 기억 스텐트의 <br>
                                    폐색부위 펼침시 저분자 헤파린 방출구조체 <br>
                                    (출원번호 10-2018-0164737)＂로 폐색된 혈관에 <br>
                                    삽입 시 헤파린이 스텐트로부터 방출되며 펼쳐지는...
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