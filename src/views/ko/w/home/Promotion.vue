<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col">
                    <section>
                        <header>
                            <h6 class="category ml-1"><span>홍보/활동</span> <b>12</b></h6>
                            <!-- <a href="#" class="more">더보기<span class="box"><span></span></span></a> -->
                            <router-link class="more" to="/w/ko/promotion/news">더보기<span
                                    class="box"><span></span></span></router-link>
                        </header>
                        <ul class="news">
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/15">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            한국산업기술진흥협회에서 지원하는 고경력 연구인력 채용지원사업에 과제 선정
                                        </h4>
                                        <p class="date">
                                            <time>2021년 05월 24일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/PC_thumb_news_15.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            한국산업기술진흥협회에서 지원하는 2021년 상반기 고경력 연구인력 채용지원사업에 티엠디랩 과제 (고분자 소재 및 복합재료 제조)가
                                            선정되었다.
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/14">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            혈관외벽 서포트 연구 논문, Small journal cover 선정 (2021.05)
                                        </h4>
                                        <p class="date">
                                            <time>2021년 05월 06일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/PC_thumb_news_14.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            2021년 3월 17일 Small (IF 11.459)에 게재된 혈관외벽 서포트 연구 논문(Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis)이 2021년 5월호(Vol.17 No.18) cover를 장식.
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/13">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            2021년 춘계 생체재료학회 우수 논문 발표상 수상
                                        </h4>
                                        <p class="date">
                                            <time>2021년 03월 26일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/PC_thumb_news_13.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            2021년 3월 한국생체재료학회가 주관하는 2021년 한국생체재료학회 춘계 학술대회가 온라인 컨퍼런스로 진행되었다.
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/12">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            티엠디랩-연세대 의대 공동연구, ‘의료기기 맞춤형 소재’ 국책과제 선정
                                        </h4>
                                        <p class="date">
                                            <time>2020년 9월 15일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_main_news_12_ko.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            체온에 반응하는 첨단 형상기억고분자 원천기술로 ‘인체삽입형 의료기기’ 분야의 새 시대 열어
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

                +li {
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

                    &+.card-body {
                        padding-top: pxtovw(10px);
                    }
                }

                .card-img-top {
                    // width: pxtovw(380px);
                    // height: pxtovw(200px);
                }

                .card-image {
                    width: pxtovw(380px);
                    height: pxtovw(200px);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 50% 50%;
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