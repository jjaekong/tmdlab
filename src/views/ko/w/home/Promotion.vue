<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col">
                    <section>
                        <header>
                            <h6 class="category ml-1"><span>홍보/활동</span> <b>10</b></h6>
                            <!-- <a href="#" class="more">더보기<span class="box"><span></span></span></a> -->
                            <router-link class="more" to="/w/ko/promotion/news">더보기<span class="box"><span></span></span></router-link>
                        </header>
                        <ul class="news">
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/10">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            혈관 신생 유도 3차원 마이크로 채널 네트워크 논문, 국제 학술지 게재
                                        </h4>
                                        <p class="date">
                                            <time>2020년 1월 30일</time>
                                        </p>
                                    </div>
                                    <!-- <img src="@/assets/img/promotion/thumb_news_4.jpg" class="card-img-top"> -->
                                    <div class="card-body">
                                        <p>
                                            ㈜티엠디랩은 손상된 조직으로의 혈관 신생 유도를 돕는 하이드로겔 기반 마이크로 채널 네트워크를 개발하였고 그 효과를 Nature 자매지인 ‘Nature Communication’에 게재하였다 (논문 제목: Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion).<br><br>
                                    손상된 부위로의 혈관 신생 유도는 오랫동안 해결되지 않은 문제였다. Pro-angiogenic molecule을 이용한 국소 치료가 가장 일반적인 접근법이나 염증성 커플링, 종양성 혈관 활성화 및 표적 외 순환을 포함하는 중요한 부작용이 있다고 알려져 있다.
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/9">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            [바이오스펙테이터] 티엠디랩,
                                            '형상기억 고분자'로 新스텐트 개발 도전
                                        </h4>
                                        <p class="date">
                                            <time>2019년 12월 17일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_9.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            성학준 연세의대 교수 2018년 국내 귀국해 창업<br>
                                            형상기억 기술로 최소침습 및 안전성 확보<br>
                                            누관스텐트부터 파이프라인 확대
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/8">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            중소벤처기업부에서 주관하는 창업성장기술개발사업 ‘혁신형 창업과제’ 선정
                                        </h4>
                                        <p class="date">
                                            <time>2019년 11월 25일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_8.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            ㈜티엠디랩은 중소벤처기업부가 지원하는
                                            창업성장기술개발사업 ‘혁신형 창업과제’로 최종 선정되었다.
                                            이번 사업 개발 기간은 총 24개월이며
                                            총 4억원의 연구비를 지원받게 되었다.
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/7">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            [한국경제] 체온으로 몸 막힌 곳 뚫는 스텐트 신소재 나온다
                                        </h4>
                                        <p class="date">
                                            <time>2019년 11월 20일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_7.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            티엠디랩, 형상기억 소재 개발중<br>
                                            실리콘보다 수명 길고 감염 적어<br><br>
                                            “실리콘으로 제조한 기존 스텐트의
                                            단점을 보완한 형상기억 고분자 스텐트를 개발하고 있습니다.”
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.slide {
    section {
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: pxtovw(15px);
            .category {
                margin-bottom: 0 !important;
                border-bottom: 0 !important;
                display: flex !important;
                align-items: center;
                span {
                    margin-right: pxtovw(15px);
                    border-bottom: 1px solid #fff;
                }
                b {
                    font-size: pxtovw(40px);
                }
            }
            .more {
                margin-bottom: pxtovw(50px);
            }
        }
    }
    ul.news {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            position: relative;
            flex: 1;
            padding: 0;
            + li {
                margin-left: pxtovw(7px);
            }
            &:nth-of-type(1) {
                top: pxtovw(20px);
            }
            &:nth-of-type(3) {
                top: pxtovw(40px);
            }
            &:nth-of-type(4) {
                top: pxtovw(20px);
            }
        }
        .card {
            border-radius: 0;
            border: 0;
            height: pxtovw(480px);
            letter-spacing: -.05vw;
            text-decoration: none;
            .card-header {
                position: relative;
                padding-top: pxtovw(20px);
                padding-left: pxtovw(30px);
                padding-right: pxtovw(20px);
                padding-bottom: pxtovw(20px);
                background: #fff;
                border-bottom: 0;
                height: pxtovw(130px);
                .card-title {
                    margin-bottom: pxtovw(10px);
                    font-size: pxtovw(22px);
                    line-height: pxtovw(34px);
                    color: #373737;
                }
                .date {
                    position: absolute;
                    bottom: pxtovw(15px);
                    right: pxtovw(20px);
                    margin-bottom: 0;
                    color: #a1a1a1;
                    font-size: pxtovw(16px);
                    line-height: 1;
                    text-align: right;
                }
                & + .card-body {
                    padding-top: pxtovw(10px);
                }
            }
            .card-img-top {
                // width: pxtovw(380px);
                // height: pxtovw(200px);
            }
            .card-body {
                padding: pxtovw(20px) pxtovw(30px) pxtovw(20px) pxtovw(30px);
                color: #4e4e4e;
                font-size: pxtovw(16px);
                line-height: pxtovw(26px);
            }
        }
    }
}
</style>