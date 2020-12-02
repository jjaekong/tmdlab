<template>
    <div class="mobile promotion news">
        <Header />
        <section class="overview">
            <h3>홍보/활동</h3>
            <h4>
                티엠디랩의 폭넓고 다양한<br>
                뉴스를 확인하세요.
            </h4>
            <p>가장 빠르게 뉴스 및 공지사항을 알려드립니다.</p>
        </section>
        <section class="news-list">
            <h4>NEW <span class="bar"></span> <b>12</b></h4>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/12">
                            <!-- <img class="news-image" src="@/assets/img/m/promotion/thumb_news_12_ko.jpg"> -->
                            <div class="news-image" :style="{ 'background-image': 'url('+ require('@/assets/img/promotion/thumb_news_12_ko.jpg') + ')' }"></div>
                            <div class="news-body">
                                <h5>티엠디랩-연세대 의대 공동연구, ‘의료기기 맞춤형 소재’ 국책과제 선정</h5>
                                <time>2020년 9월 15일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/11">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_11.jpg">
                            <div class="news-body">
                                <h5>Enzyme-crosslinkable gelatin gel에 embedding한 줄기세포의 혈관 안정화 및 혈관 신생 유도 논문, 국제 학술지 게재</h5>
                                <time>2020년 2월 26일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/10">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_10.jpg">
                            <div class="news-body">
                                <h5>혈관 신생 유도 3차원 마이크로 채널 네트워크 논문, 국제 학술지 게재</h5>
                                <time>2020년 1월 30일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/9">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_9.jpg">
                            <div class="news-body">
                                <h5>[바이오스펙테이터] 티엠디랩, '형상기억 고분자'로 新스텐트 개발 도전</h5>
                                <time>2019년 12월 17일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/8">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_8.jpg">
                            <div class="news-body">
                                <h5>중소벤처기업부에서 주관하는 창업성장기술개발사업 ‘혁신형 창업과제’ 선정</h5>
                                <time>2019년 11월 25일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/7">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_7.jpg">
                            <div class="news-body">
                                <h5>[한국경제] 체온으로 몸 막힌 곳 뚫는 스텐트 신소재 나온다</h5>
                                <time>2019년 11월 20일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/6">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_6.jpg">
                            <div class="news-body">
                                <h5>형상 기억 고분자 기반 누관 스텐트 논문 국제 학술지 (Acta Biomaterilia, IF 6.638) 게재</h5>
                                <time>2019년 11월 7일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/5">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_5.jpg">
                            <div class="news-body">
                                <h5>형상 기억 고분자 기반 혈관 문합기 논문 국제 학술지 (Advanced Materials, IF 25.809) 게재</h5>
                                <time>2019년 8월 27일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/4">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_4.jpg">
                            <div class="news-body">
                                <h5>2019년 의료기기 CHAMP 교육과정 의료기기 입문 마스터 과정 수료<br>(2019.07.16 ~ 2019.07.18)</h5>
                                <time>2019년 7월 16일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/3">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_3.jpg">
                            <div class="news-body">
                                <h5>2019년 한국조직공학재생의학회 (KTERMS) 학술대회 참여, 포스터 부문 우수상 선정<br>(2019.06.06 ~ 2019.06.08)</h5>
                                <time>2019년 6월 6일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/2">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_2.jpg">
                            <div class="news-body">
                                <h5>연세대학교 산학협력단으로부터 형상기억고분자 통상실시권 획득</h5>
                                <time>2019년 5월 21일</time>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link class="news-item" to="/m/ko/promotion/news/1">
                            <img class="news-image" src="@/assets/img/m/promotion/thumb_news_1.jpg">
                            <div class="news-body">
                                <h5>형상기억고분자를 이용한<br>스텐트 관련 특허 2건 출원</h5>
                                <time>2018년 12월 19일</time>
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
import Header from '@/components/ko/m/Header.vue'
import Footer from '@/components/ko/m/Footer.vue'

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
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 50% 50%;
            }
            .news-body {
                flex: 1;
                padding: pxtovw2(35px) pxtovw2(30px);
                display: flex;
                flex-direction: column;
                h5 {
                    flex: 1;
                    color: #383838;
                    font-size: pxtovw2(30px);
                    line-height: pxtovw2(48px);
                }
                time {
                    color: #a1a1a1;
                    font-size: pxtovw2(22px);
                    line-height: pxtovw2(30px);
                }
            }
        }
    }
}
</style>