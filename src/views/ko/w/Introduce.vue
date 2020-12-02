<template>
    <div class="web introduce">
        <Header />
        <SubHeader :title="'소개'" />
        <PathNav :path="['소개']" />
        <main id="main">
            <section class="company" id="company">
                <h4 class="section-title">회사개요</h4>
                <div class="container-fluid">
                    <p>
                        저희 티엠디랩은 형상기억고분자(Shape Memory Polymer)와 세포유래 나노소포체(Cell-derived Nanovesicles) 기반 기술을 바탕으로 신소재
                        의료기기 및<br>
                        첨단 바이오 의약품을 연구 개발하기 위해 설립된 법인입니다. 형상기억고분자 기반 기술은 연세대학교 산학협력단으로 부터 통상실시권을 허여 받아<br>
                        형상기억고분자를 이용한 모든 제품의 개발 및 판매 할 수 있는 권리를 기 획득하였고, 세포유래 나노소포체 기반 기술 또한 티엠디랩 자체 특허 출원를 통해 재산권을
                        확보하였습니다.
                    </p>
                    <img src="@/assets/img/introduce/img_company_plan.jpg" alt="">
                    <p>
                        티엠디랩은 형상기억고분자 원천기술을 바탕으로한 신개념의 인체 삽입형 스텐트와 세포유래 나노소포체 기술을 바탕으로한<br>
                        관절염치료제의 연구 개발 및 인허가를 준비하고 있습니다. 티엠디랩은 인류의 건강한 삶에 공헌할 것을 기업의 핵심 가치로 삼고<br>
                        질병의 극복을 위한 새로운 기회를 환자에게 제공하기 위해 끊임없이 노력하고 있으며,<br>
                        차별화된 첨단 기술력을 바탕으로 글로벌 기업으로 도약할 것을 약속드립니다.
                    </p>
                </div>
            </section>
            <section class="history" id="history">
                <h4 class="section-title">연혁</h4>
                <div class="container-fluid">
                    <img src="@/assets/img/introduce/img_history.jpg" alt="">
                    <ol>
                        <li>
                            <h5><b>1</b> <span>기반구축단계</span> <small>2010 - 2016</small></h5>
                            <ul>
                                <li>미국 반더빌트대학 성학준 교수 연구팀<br>‘1세대’ , ‘2세대’ 형상기억고분자<br>원천기술개발 완료</li>
                                <li>연구비 100억 여원 투자</li>
                            </ul>
                        </li>
                        <li>
                            <h5><b>2</b> <span>성장단계</span> <small>2016 - 2018</small></h5>
                            <ul>
                                <li>3세대 형상기억고분자 원천기술개발 완료</li>
                                <li>형상기억고분자를 이용한<br>인체 삽입형 의료기기의 시제품 개발</li>
                            </ul>
                        </li>
                        <li>
                            <h5><b>3</b> <span>티엠디랩 설립</span> <small>2018</small></h5>
                            <ul>
                                <li>법인 설립 및 투자 확보</li>
                                <li>다수의 파이프라인 확보</li>
                            </ul>
                        </li>
                        <li>
                            <h5><b>4</b> <span>도약단계</span> <small>현재</small></h5>
                            <ul>
                                <li>형상기억고분자 기반 인체 삽입형<br>의료기기의 인허가 준비</li>
                                <li>4세대 형상기억고분자 원천기술 개발 착수</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </section>
            <section class="members">
                <h4 class="section-title">구성원</h4>
                <div class="container-fluid">
                    <ul class="profiles">
                        <li>
                            <div class="profile-item">
                                <div class="profile-image"><img src="@/assets/img/introduce/img_proflile_1.png"></div>
                                <div class="profile-body">
                                    <h6>대표이사</h6>
                                    <h5>강미란</h5>
                                    <ul>
                                        <li>서울대학교 수의학 박사</li>
                                        <li>현 연세대학교 의과대학 겸임교수</li>
                                        <li>전 서울대학교 BK21 박사후연구원</li>
                                        <li>전 연세대학교 의과대학 연구교수</li>
                                        <li>의학공학 연구개발 경력 15년 이상</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="profile-item">
                                <div class="profile-image"><img src="@/assets/img/introduce/img_proflile_2.png"></div>
                                <div class="profile-body">
                                    <h6>연구소장</h6>
                                    <h5>이세원</h5>
                                    <ul>
                                        <li>차의과학대학교 이학 박사</li>
                                        <li>의학공학 연구개발 경력 5년 이상</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="teams">
                        <li>
                            <div class="team-item">
                                <div class="team-image"><img src="@/assets/img/introduce/img_team_1.jpg"></div>
                                <div class="team-body">
                                    <h6>연구팀</h6>
                                    <h5>연세대학교 의과대학<br>의학공학교실</h5>
                                    <ul>
                                        <li>성학준 교수 연구팀</li>
                                        <li>박종철 교수 연구팀</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="team-item">
                                <div class="team-image"><img src="@/assets/img/introduce/img_team_2.jpg"></div>
                                <div class="team-body">
                                    <h6>연구팀</h6>
                                    <h5>연세대학교 의과대학<br>임상의학교실</h5>
                                    <ul>
                                        <li>
                                            <h6 class="class-name">안과학교실</h6>
                                            <p class="class-team">
                                                윤진숙 교수 연구팀<br>
                                                고재상 교수 연구팀
                                            </p>
                                        </li>
                                        <li>
                                            <h6 class="class-name">심장내과교실</h6>
                                            <p class="class-team">
                                                하종원 교수 연구팀
                                            </p>
                                        </li>
                                        <li>
                                            <h6 class="class-name">신장내과교실</h6>
                                            <p class="class-team">
                                                양재원 교수 연구팀
                                            </p>
                                        </li>
                                        <li>
                                            <h6 class="class-name">내과학교실</h6>
                                            <p class="class-team">
                                                방승민 교수 연구팀
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="contact">
                <div class="container-fluid">
                    <div class="contact-wrapper">
                        <h4><span></span>주식회사 티엠디랩<small>(TMD LAB Co., Ltd.)</small></h4>
                        <dl>
                            <dt>사업자등록번호</dt>
                            <dd>372-87-01282</dd>
                            <dt>대표</dt>
                            <dd>강미란</dd>
                            <dt>주소</dt>
                            <dd>
                                <p>서울시 성동구 광나루로8길 31, 6층(성수동 2가, 성수에스케이브이원센터2)</p>
                            </dd>
                            <dt>대표번호</dt>
                            <dd>02-6216-0080</dd>
                            <dt>팩스</dt>
                            <dd>02-6216-0088</dd>
                            <dt>이메일</dt>
                            <dd><a href="mailto:ask@tmdlab.com">ask@tmdlab.com</a></dd>
                        </dl>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/ko/w/Header.vue'
    import SubHeader from '@/components/ko/w/SubHeader.vue'
    import PathNav from '@/components/ko/w/PathNav.vue'
    // import PageTitle from '@/components/PageTitle.vue'
    import Footer from '@/components/ko/w/Footer.vue'

    import $ from 'jquery';

    export default {
        components: {
            Header,
            SubHeader,
            PathNav,
            Footer
        },
        mounted: function () {
            var self = this
            window.setTimeout(function () {
                self.doScroll()
            }, 500)
        },
        watch: {
            $route: function () {
                this.doScroll()
            }
        },
        methods: {
            doScroll: function () {
                if (this.$route.fullPath.indexOf('#') > -1) {
                    var targetId = this.$route.fullPath.split('#')[1]
                    if ($('#' + targetId)) {
                        var targetTop = $('#' + targetId).offset().top
                        $('html, body').stop().animate({
                            scrollTop: targetTop
                        }, 500)
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/css/functions.scss";

    .web.introduce {
        section {
            color: #383838;

            .container-fluid {
                padding-left: 0;
                padding-right: 0;
            }
        }

        .company {
            padding-top: pxtovw(120px);

            .section-title {
                margin-bottom: pxtovw(20px) !important;
            }

            .container-fluid {
                max-width: pxtovw(1920px);
            }

            p {
                margin: 0;
                font-size: pxtovw(18px);
                line-height: pxtovw(34px);
                text-align: center;
            }

            img {
                margin-top: pxtovw(50px);
                margin-bottom: pxtovw(50px);
                width: 100%;
                max-width: pxtovw(1920px);
            }
        }

        .history {
            padding-top: pxtovw(120px);

            .section-title {
                margin-bottom: pxtovw(30px) !important;
            }

            .container-fluid {
                padding-bottom: pxtovw(60px);
                background: #f7f7f7;

                img {
                    display: block;
                    margin: 0 auto;
                    width: pxtovw(1240px);
                }

                ol {
                    display: flex;
                    list-style: none;
                    margin: 0 auto;
                    padding: 0;
                    width: pxtovw(1240px);
                    justify-content: space-between;

                    >li {
                        h5 {
                            display: flex;
                            align-items: center;
                            vertical-align: baseline;
                            font-size: pxtovw(20px);
                            line-height: pxtovw(30px);
                            font-weight: 900;
                            margin-bottom: pxtovw(15px);

                            b {
                                position: relative;
                                top: pxtovw(-2px);
                                margin-right: pxtovw(15px);
                                font-family: 'MontSerrat', sans-serif;
                                font-size: pxtovw(30px);
                            }

                            small {
                                margin-left: pxtovw(15px);
                                font-family: 'MontSerrat', sans-serif;
                                font-size: pxtovw(14px);
                                word-spacing: pxtovw(-1px);
                            }
                        }

                        ul {
                            list-style: none;
                            padding: 0;

                            li {
                                position: relative;
                                padding-left: pxtovw(15px);
                                font-size: pxtovw(16px);
                                line-height: pxtovw(24px);

                                &:before {
                                    position: absolute;
                                    left: 0;
                                    content: 'ㆍ';
                                }

                                &+li {
                                    margin-top: pxtovw(10px);
                                }
                            }
                        }
                    }
                }
            }
        }

        .members {
            padding-top: pxtovw(145px);
            padding-bottom: pxtovw(130px);

            .container-fluid {
                margin: 0 auto;
                max-width: pxtovw(1240px);
            }

            .section-title {
                margin-bottom: pxtovw(65px);
            }

            .profiles {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;

                li {
                    flex: 1;

                    &:nth-of-type(2) {
                        .profile-item {
                            margin-top: pxtovw(200px);
                        }
                    }
                }

                .profile-item {
                    display: flex;
                    align-items: center;

                    .profile-image {
                        margin-right: pxtovw(40px);
                        width: pxtovw(337px);
                        height: pxtovw(337px);
                        border-radius: 50%;
                        box-shadow: pxtovw(13px) pxtovw(15px) pxtovw(20px) 0px rgba(0, 0, 0, 0.2);

                        img {
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .profile-body {
                        h6 {
                            margin-bottom: pxtovw(15px);
                            font-size: pxtovw(14px);
                            line-height: pxtovw(24px);
                            color: #919191;
                        }

                        h5 {
                            margin-bottom: pxtovw(20px);
                            font-size: pxtovw(26px);
                            line-height: pxtovw(34px);
                            color: #383838;
                            font-weight: bold;
                        }

                        ul {
                            margin: 0;
                            padding: 0;
                            list-style: none;

                            li {
                                font-size: pxtovw(16px);
                                line-height: pxtovw(24px);
                                color: #383838;
                            }
                        }
                    }
                }
            }

            .teams {
                margin: 0 auto;
                padding: 0;
                width: pxtovw(1180px);
                list-style: none;

                .team-item {
                    border-bottom: pxtovw(2px) solid #000;
                    display: flex;
                    align-items: flex-end;

                    .team-body {
                        flex: 1;
                        padding-bottom: pxtovw(30px);
                    }

                    h6 {
                        margin-bottom: pxtovw(10px);
                        font-size: pxtovw(14px);
                        line-height: pxtovw(24px);
                        color: #919191;
                    }

                    h5 {
                        margin-bottom: pxtovw(15px);
                        font-size: pxtovw(26px);
                        line-height: pxtovw(34px);
                        color: #383838;
                        font-weight: bold;
                    }

                    ul {
                        margin: 0;
                        padding: 0;
                        font-size: pxtovw(16px);
                        line-height: pxtovw(24px);
                        color: #383838;
                        list-style: none;

                        li {
                            display: flex;

                            h6 {
                                margin-bottom: 0;
                                width: pxtovw(135px);
                                font-size: pxtovw(16px);
                                line-height: pxtovw(24px);
                                color: #383838;
                            }

                            p {
                                margin-bottom: 0;
                            }
                        }
                    }

                }

                li {
                    &:nth-of-type(even) {
                        .team-item {
                            flex-direction: row-reverse;
                        }
                    }

                    &:nth-of-type(1) {
                        .team-body {
                            padding-left: pxtovw(30px);
                        }
                    }

                    &:nth-of-type(2) {
                        .team-item {
                            margin-top: pxtovw(130px);
                        }

                        .team-body {
                            padding-left: pxtovw(50px);
                        }
                    }

                    &:nth-of-type(1) {
                        .team-image {
                            width: pxtovw(587px);

                            img {
                                display: block;
                                width: 100%;
                            }
                        }
                    }

                    &:nth-of-type(2) {
                        .team-image {
                            width: pxtovw(737px);

                            img {
                                display: block;
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }

        .contact {
            .container-fluid {
                max-width: pxtovw(1920px);
                height: pxtovw(540px);
                background-image: url(../../../assets/img/introduce/bg_contact.jpg);
            }

            .contact-wrapper {
                width: pxtovw(681px);
                height: 100%;
                background: rgba(#000, .6);
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;

                a {
                    color: #fff;
                    text-decoration: none;
                }

                h4 {
                    display: flex;
                    align-items: center;
                    margin-bottom: pxtovw(30px);
                    padding-left: pxtovw(40px);
                    font-size: pxtovw(24px);
                    font-weight: 900;

                    small {
                        margin-top: pxtovw(5px);
                        margin-left: pxtovw(5px);
                        font-size: pxtovw(16px);
                    }

                    span {
                        margin-right: pxtovw(15px);
                        width: pxtovw(25px);
                        height: 1px;
                        background: #fff;
                    }
                }

                dl {
                    margin: 0;
                    padding: 0 0 0 pxtovw(80px);

                    dt,
                    dd {
                        margin: 0;
                        font-weight: normal;
                        font-size: pxtovw(14px);
                        line-height: pxtovw(30px);
                    }

                    dt {
                        float: left;
                        width: pxtovw(100px);
                        opacity: .7;
                    }

                    dd {
                        margin-left: pxtovw(100px);
                    }

                    p {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
</style>