<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col">
                    <section>
                        <header>
                            <h6 class="category ml-1"><span>홍보/활동</span> <b>4</b></h6>
                            <!-- <a href="#" class="more">더보기<span class="box"><span></span></span></a> -->
                            <router-link class="more" to="/w/ko/promotion/news">더보기<span class="box"><span></span></span></router-link>
                        </header>
                        <ul class="news">
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/4">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            2019년 의료기기 CHAMP 교육과정<br>
                                            의료기기 입문 마스터 과정 수료
                                        </h4>
                                        <p class="date">
                                            <time>2019년 7월 16일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_4.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            2019년 7월 16일부터 18일까지 3일에 걸쳐<br>
                                            한국의료기기산업협회 (KMDIA)에서 주관하는<br>
                                            국가인적자원개발컨소시엄 사업 (Consortium<br>
                                            for HRD Ability Magnified Program, CHAMP) ...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/3">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            2019년 한국조직공학재생의학회<br>
                                            (KTERMS) 학술대회 참여, 포스터 ...
                                        </h4>
                                        <p class="date">
                                            <time>2019년 6월 6일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_3.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            한국조직공학 재생의학회가 주관하는<br>
                                            국제학술대회인 ‘Korea Tissue Engineering and<br>
                                            Regenerative Medicine Society (KTERMS)<br>
                                            2019’가 2019년 6월 6일부터 8일까지 3일에 걸쳐...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/2">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            연세대학교 산학협력단으로부터<br>
                                            형상기억고분자 통상실시권 획득
                                        </h4>
                                        <p class="date">
                                            <time>2019년 5월 21일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_2.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            형상기억고분자를 이용한 인체삽입형 스텐트의<br> 
                                            개발 및 상용화를 위해 연세대학교 산학협력단이<br>
                                            보유하고 있는 “광가교가 가능한 형상기억고분자 및<br>
                                            이의 제조방법 (대한민국 특허등록번호10-190647...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/ko/promotion/news/1">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            형상기억고분자를 이용한 스텐트<br>
                                            관련 특허 2건 출원
                                        </h4>
                                        <p class="date">
                                            <time>2018년 12월 19일</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_1.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            형상기억고분자를 스텐트 개발과 관계된 특허 2건을<br>
                                            출원하였다. 첫번째 특허명은 “형상 기억 스텐트의<br>
                                            폐색부위 펼침시 저분자 헤파린 방출구조체<br>
                                            (출원번호 10-2018-0164737)＂로 폐색된 혈관에...
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