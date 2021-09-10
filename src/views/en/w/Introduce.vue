<template>
    <div class="web introduce">
        <Header />
        <SubHeader :title="'Introduction'" />
        <PathNav :path="['Introduction']" />
        <main id="main">
            <section class="company" id="company">
                <h4 class="section-title">Company outline</h4>
                <div class="container-fluid">
                    <p>
                        TMD Lab presents new solutions for disease prevention and treatment based on shape memory polymer technology. The founder, professor Hak-Joon Sung, first developed a shape-memory polymer, source material technology based on polycaprolactone while working at Vanderbilt University in the US. After moving to Yonsei University in Korea in 2018, professor Hak-Joon Sung further developed the shape memory polymer source material technology and started research on the development of medical devices and convergence therapies that can be inserted into the body. Since its founding in 2018, TMD Lab has further developed the shape memory polymer source material technology by using various biocompatible polymers as well as polycaprolactone. 
                    </p>
                    <img src="@/assets/img/introduce/en/img_company_plan.jpg" alt="">
                    <p>
                        Currently, TMD Lab’s shape memory polymer has excellent controllability and a wide spectrum of physical properties, so it can provide various medical solutions according to the characteristics of the treatment area and environment. In addition, TMD Lab's shape memory polymer significantly lowers biofilm formation compared to medical silicone, thereby reducing side effects caused by biofilms. TMD Lab’s shape memory polymer can be mass-synthesized, and various manufacturing techniques such as 3D printing, molding, and injection using it have been established. Based on this shape memory polymer technology, TMD Lab has secured a pipeline of various medical devices and convergence therapies, and is collaborating with companies, research institutes and schools that need our shape memory polymer source material technology. 
                    </p>
                </div>
            </section>            
            <section class="history" id="history">
                <h4 class="section-title">Company history</h4>
                <div class="container-fluid">
                    <img src="@/assets/img/introduce/en/img_history.jpg" alt="">
                    <ol>
                        <li>
                            <h5><b>1</b> <span>Base establishment<br><small>2010 - 2016</small></span></h5>
                            <ul>
                                <li>Research team under professor Hak-Joon Sung of Vanderbilt University in U.S.
                                    completed the base technology development for ‘1st generation’ and ‘2nd generation’
                                    shape memory polymer.</li>
                                <li>Invested KRW 10 billion for the research expense</li>
                            </ul>
                        </li>
                        <li>
                            <h5><b>2</b> <span>Growth<br><small>2016 - 2018</small></span></h5>
                            <ul>
                                <li>Completed the base technology development for ‘3rd generation’ shape memory polymer
                                </li>
                                <li>Developed a prototype for the human insertion medical device using shape memory
                                    polymer</li>
                            </ul>
                        </li>
                        <li>
                            <h5><b>3</b> <span>Establishment of<br>TMD LAB Co., Ltd.<br><small>2018</small></span></h5>
                            <ul>
                                <li>Corporate established, investment secured.</li>
                                <li>Secured multiple pipelines</li>
                            </ul>
                        </li>
                        <li>
                            <h5><b>4</b> <span>Takeoff<br><small>current</small></span></h5>
                            <ul>
                                <li>In preparation of licensing of the human insertion medical device based on shape
                                    memory polymer</li>
                                <li>Expansion of TMD Lab’s the unique shape memory polymer source material technology</li>
                                <li>Development of convergence therapeutics using the shape memory polymer</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </section>
            <section class="vision" id="vision">
                <h4 class="section-title">VISION</h4>
                <div class="container-fluid">
                    <div class="d-flex justify-content-center">
                        <div class="vision-box box">
                            <h4>VISION</h4>
                            <p>
                                Contributing to <br>healthy lives as the <br>core value of the <br>company
                            </p>
                        </div>
                        <div class="mission-box box">
                            <h4>MISSION</h4>
                            <p>
                                Beyond a possibility,<br>proposing new <br>medical solutions

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="members">
                <h4 class="section-title">Members</h4>
                <div class="container-fluid">
                    <ul class="profiles">
                        <li>
                            <div class="profile-item">
                                <div class="profile-image"><img src="@/assets/img/introduce/img_proflile_1.png"></div>
                                <div class="profile-body">
                                    <h6>CEO</h6>
                                    <h5>Mi-Lan Kang</h5>
                                    <ul>
                                        <li>Ph.D., Veterinary Medicine, Seoul National University</li>
                                        <li>(Current) Adjunct Professor in Yonsei University College of Medicine</li>
                                        <li>(Former) BK21 post-doctorate researcher in Seoul National University</li>
                                        <li>(Former) Research professor in Yonsei University College of Medicine</li>
                                        <li>15 years of R&amp;D career in medical engineering</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="profile-item">
                                <div class="profile-image"><img src="@/assets/img/introduce/img_proflile_2.png"></div>
                                <div class="profile-body">
                                    <h6>CTO</h6>
                                    <h5>Se-Won, Yi</h5>
                                    <ul>
                                        <li>Ph.D., College of Life Science, CHA University</li>
                                        <li>5 years of R&amp;D career in medical engineering</li>
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
                                    <h6>Research Teams</h6>
                                    <h5>
                                        Department of Medical Engineering, Yonsei University College of Medicine,
                                        Republic of Korea
                                    </h5>
                                    <ul>
                                        <li>Research team under Prof. Hak-Joon Sung</li>
                                        <li>Research team under Prof. Jong-Chul Park</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="team-item">
                                <div class="team-image"><img src="@/assets/img/introduce/img_team_2.jpg"></div>
                                <div class="team-body">
                                    <h6>Research Teams</h6>
                                    <h5>Severance Hospital, Republic of Korea</h5>
                                    <ul>
                                        <li>Department of Ophthalmology-Institute of Vision Research, Prof. Jin Sook
                                            Yoon &amp; Prof. Jae Sang Ko</li>
                                        <li>Cardiology Division, Severance Cardiovascular Hospital, Prof. Jong-Won Ha
                                        </li>
                                        <li>Department of Nephrology, Prof. Jae Won Yang</li>
                                        <li>Department of Internal Medicine, Prof. Seung Min Bang</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section> -->
            <section class="contact">
                <div class="container-fluid">
                    <div class="contact-wrapper">
                        <h4><span></span>TMD LAB Co., Ltd.</h4>
                        <p>Company Registration Number &nbsp;&nbsp;372-87-01282</p>
                        <dl>
                            <dt>CEO</dt>
                            <dd>Mi-Lan Kang</dd>
                            <dt>Address</dt>
                            <dd>
                                <p>31, Gwangnaru-ro 8-gil, Seongdong-gu, Seoul, 04799 Republic of Korea</p>
                            </dd>
                            <dt>Tel.</dt>
                            <dd>+82-2-6216-0080</dd>
                            <dt>Fax.</dt>
                            <dd>+82-2-6216-0088</dd>
                            <dt>E-mail</dt>
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
    import Header from '@/components/en/w/Header.vue'
    import SubHeader from '@/components/en/w/SubHeader.vue'
    import PathNav from '@/components/en/w/PathNav.vue'
    // import PageTitle from '@/components/PageTitle.vue'
    import Footer from '@/components/en/w/Footer.vue'

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

            .container-fluid p{ //210909 생성
                max-width: pxtovw(1240px);
                margin: 0 auto;
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
                        flex: 1;

                        h5 {
                            display: flex;
                            align-items: flex-start;
                            vertical-align: baseline;
                            font-size: pxtovw(20px);
                            line-height: pxtovw(30px);
                            font-weight: 900;
                            margin-bottom: pxtovw(15px);
                            min-height: pxtovw(95px);

                            b {
                                position: relative;
                                top: pxtovw(-2px);
                                margin-right: pxtovw(15px);
                                font-family: 'MontSerrat', sans-serif;
                                font-size: pxtovw(30px);
                            }

                            small {
                                //margin-left: pxtovw(15px);
                                font-family: 'MontSerrat', sans-serif;
                                font-size: pxtovw(14px);
                                word-spacing: pxtovw(-1px);
                            }
                        }

                        ul {
                            list-style: none;
                            padding: 0 pxtovw(20px) 0 0;

                            li {
                                position: relative;
                                padding-left: pxtovw(15px);
                                font-size: pxtovw(16px);
                                line-height: pxtovw(24px);

                                &:before {
                                    content: ' ';
                                    position: absolute;
                                    top: pxtovw(10px);
                                    left: 0;
                                    width: pxtovw(3px);
                                    height: pxtovw(3px);
                                    background: #383838;
                                    border-radius: 50%;
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

        #vision {
            padding-top: pxtovw(90px);
            padding-bottom: pxtovw(100px);
            background-image: url(../../../assets/img/introduce/bg_vision.jpg);
            background-repeat:  no-repeat;
            background-position: 50% 50%;
            background-size: cover;
            .section-title {
                margin-bottom: pxtovw(70px);
                color: white !important;
            }
            .container-fluid {
                max-width: pxtovw(1600px);
                height: pxtovw(770px);
                background: #fff;
            }
            .vision-box {
                padding-top: pxtovw(160px);
                padding-left: pxtovw(415px);
                width: pxtovw(695px);
                height: pxtovw(718px);
                background-image: url(../../../assets/img/introduce/img_vision.jpg);
                background-repeat: no-repeat;
            }
            .mission-box {
                margin-top: pxtovw(165px);
                padding-top: pxtovw(85px);
                padding-left: pxtovw(80px);
                width: pxtovw(800px);
                height: pxtovw(543px);
                background-image: url(../../../assets/img/introduce/img_mission.jpg);
                color: white;
            }
            .box {
                h4 {
                    margin-bottom: pxtovw(15px);
                    font-size: pxtovw(24px);
                    font-family: 'Montserrat', sans-serif;
                    font-weight: bold;
                    text-decoration: underline;
                }
                p {
                    font-size: pxtovw(24px);
                    line-height: pxtovw(48px);
                    font-weight: bold;
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

                    // display: flex;
                    // align-items: center;
                    .profile-image {
                        float: left;
                        // margin-right: pxtovw(40px);
                        // width: pxtovw(337px);
                        // height: pxtovw(337px);
                        width: pxtovw(250px);
                        height: pxtovw(250px);
                        border-radius: 50%;
                        box-shadow: pxtovw(13px) pxtovw(15px) pxtovw(20px) 0px rgba(0, 0, 0, 0.2);

                        img {
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .profile-body {
                        //margin-left: pxtovw(377px);
                        margin-left: pxtovw(290px);

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
                                position: relative;
                                font-size: pxtovw(16px);
                                line-height: pxtovw(24px);
                                color: #383838;
                                padding-left: pxtovw(15px);

                                &:before {
                                    content: ' ';
                                    position: absolute;
                                    top: pxtovw(10px);
                                    left: 0;
                                    width: pxtovw(3px);
                                    height: pxtovw(3px);
                                    background: #383838;
                                    border-radius: 50%;
                                }
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
                            position: relative;
                            padding-left: pxtovw(15px);

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

                            &:before {
                                content: ' ';
                                position: absolute;
                                top: pxtovw(10px);
                                left: 0;
                                width: pxtovw(3px);
                                height: pxtovw(3px);
                                background: #383838;
                                border-radius: 50%;
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

                p {
                    margin: 0;
                    padding: 0 0 0 pxtovw(80px);
                    font-size: pxtovw(14px);
                    line-height: pxtovw(30px);
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
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
    }
</style>