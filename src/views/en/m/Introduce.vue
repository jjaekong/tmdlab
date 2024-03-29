<template>
    <div class="mobile introduce">
        <Header />
        <section class="overview">
            <h3>Introduction</h3>
            <h4>Company outline</h4>
            <p>
                TMD Lab presents new solutions for disease prevention and treatment based on shape memory polymer technology. The founder, professor Hak-Joon Sung, first developed a shape-memory polymer, source material technology based on polycaprolactone while working at Vanderbilt University in the US. After moving to Yonsei University in Korea in 2018, professor Hak-Joon Sung further developed the shape memory polymer source material technology and started research on the development of medical devices and convergence therapies that can be inserted into the body. Since its founding in 2018, TMD Lab has further developed the shape memory polymer source material technology by using various biocompatible polymers as well as polycaprolactone. 
                <br><br>
                Currently, TMD Lab’s shape memory polymer has excellent controllability and a wide spectrum of physical properties, so it can provide various medical solutions according to the characteristics of the treatment area and environment. In addition, TMD Lab's shape memory polymer significantly lowers biofilm formation compared to medical silicone, thereby reducing side effects caused by biofilms. TMD Lab’s shape memory polymer can be mass-synthesized, and various manufacturing techniques such as 3D printing, molding, and injection using it have been established. Based on this shape memory polymer technology, TMD Lab has secured a pipeline of various medical devices and convergence therapies, and is collaborating with companies, research institutes and schools that need our shape memory polymer source material technology.
            </p>
        </section>
        <section class="history">
            <h4>Company history</h4>
            <div class="figure">
                <img src="@/assets/img/m/introduce/en/img_history.jpg">
            </div>
            <ol>
                <li>
                    <p><span>1</span> <b>Base establishment</b> <small>2010 - 2016</small></p>
                    <ul>
                        <li>Research team under professor Hak-Joon Sung of Vanderbilt University in U.S. completed the base technology development for ‘1st generation’ and ‘2nd generation’ shape memory polymer.</li>
                        <li>Invested KRW 10 billion for the research expense</li>
                    </ul>
                </li>
                <li>
                    <p><span>2</span> <b>Growth</b> <small>2016 - 2018</small></p>
                    <ul>
                        <li>Completed the base technology development for ‘3rd generation’ shape memory polymer</li>
                        <li>Developed a prototype for the human insertion medical device using shape memory polymer</li>
                    </ul>
                </li>
                <li>
                    <p><span>3</span> <b>Establishment of TMD LAB Co., Ltd.</b> <small>2018</small></p>
                    <ul>
                        <li>Corporate established, investment secured.</li>
                        <li>Secured multiple pipelines</li>
                    </ul>
                </li>
                <li>
                    <p><span>4</span> <b>Takeoff</b> <small>current</small></p>
                    <ul>
                        <li>In preparation of licensing of the human insertion medical device based on shape memory polymer</li>
                        <li>Expansion of TMD Lab’s the unique shape memory polymer source material technology</li>
                        <li>Development of convergence therapeutics using the shape memory polymer</li>
                    </ul>
                </li>
            </ol>
        </section>
        <section class="vision">
            <h4>VISION</h4>
            <div class="vision-box box">
                <h5>VISION</h5>
                <p>
                    Contributing to healthy <br>lives as the core value of <br>the company

                </p>
            </div>
            <div class="mission-box box">
                <h5>MISSION</h5>
                <p>
                    Beyond a possibility,<br>proposing new medical <br>solutions
                </p>
            </div>
        </section>
        <!-- <section class="members">
            <h4>Members</h4>
            <ul>
                <li>
                    <div class="member-photo">
                        <img src="@/assets/img/m/introduce/img_profile_1.jpg" alt="">
                    </div>
                    <div class="member-career">
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
                </li>
                <li>
                    <div class="member-photo">
                        <img src="@/assets/img/m/introduce/img_profile_2.jpg" alt="">
                    </div>
                    <div class="member-career">
                        <h6>CTO</h6>
                        <h5>Se-Won, Yi</h5>
                        <ul>
                            <li>Ph.D., College of Life Science, CHA University</li>
                            <li>5 years of R&amp;D career in medical engineering</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
        <section class="teams">
            <ul>
                <li>
                    <div class="team-body">
                        <h6>Research Teams</h6>
                        <h5>Department of Medical Engineering, Yonsei University College of Medicine, Republic of Korea</h5>
                        <ul>
                            <li>Research team under Prof. Hak-Joon Sung </li>
                            <li>Research team under Prof. Jong-Chul Park</li>
                        </ul>
                    </div>
                    <div class="team-photo">
                        <img src="@/assets/img/m/introduce/img_team_1.jpg" alt="">
                    </div>
                </li>
                <li>
                    <div class="team-body">
                        <h6>Research Teams</h6>
                        <h5>Severance Hospital, Republic of Korea</h5>
                        <ul>
                            <li>Department of Ophthalmology-Institute of Vision Research, Prof. Jin Sook Yoon &amp; Prof. Jae Sang Ko</li>
                            <li>Cardiology Division, Severance Cardiovascular Hospital, Prof. Jong-Won Ha</li>
                            <li>Department of Nephrology, Prof. Jae Won Yang</li>
                            <li>Department of Internal Medicine, Prof. Seung Min Bang</li>
                        </ul>
                    </div>
                    <div class="team-photo">
                        <img src="@/assets/img/m/introduce/img_team_2.jpg" alt="">
                    </div>
                </li>
            </ul>
        </section> -->
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/en/m/Header.vue'
import Footer from '@/components/en/m/Footer.vue'

export default {
    components: {
        Header, Footer
    }    
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.introduce {
    > section {
        padding: pxtovw2(40px);
        > h3 {
            display: inline-block;
            font-size: pxtovw2(30px);
            line-height: pxtovw2(56px);
            border-bottom: pxtovw2(2px) solid #fff;
            color: #fff;
            margin-bottom: pxtovw2(100px);
        }
        > h4 {
            margin-bottom: pxtovw2(30px);
            font-size: pxtovw2(54px);
            line-height: pxtovw2(66px);
            font-weight: bold;
            color: #383838;
        }
    }
    .overview {
        padding-top: pxtovw2(150px) !important;
        padding-bottom: pxtovw2(110px) !important;
        //padding-right: pxtovw2(20px) !important;
        background-image: url(../../../assets/img/m/introduce/bg.jpg);
        background-size: cover;
        background-position: 50% 50%;
        min-height: 300px;
        color: #fff;
        > h4 {
            margin-left: pxtovw2(40px);
            color: #fff !important;
        }
        p {
            margin-left: pxtovw2(40px);
            margin-right: pxtovw2(40px);
            margin-bottom: 0;
            font-size: pxtovw2(22px);
            line-height: pxtovw2(36px);
            letter-spacing: pxtovw2(-1px);
            word-spacing: pxtovw2(-1px);
        }
        .figure {
            margin-top: pxtovw2(40px);
            margin-bottom: pxtovw2(40px);
            margin-left: pxtovw2(-40px);
            margin-right: pxtovw2(-40px);
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .history {
        padding-bottom: pxtovw2(100px) !important;
        background: #f7f7f7;
        h4 {
            margin-top: pxtovw2(60px);
            margin-left: pxtovw2(40px);
            margin-bottom:  pxtovw2(75px);
        }
        .figure {
            margin-left: pxtovw2(-40px);
            margin-right: pxtovw2(-40px);
            margin-bottom: pxtovw2(60px);
            img {
                width: 100%;
            }
        }
        ol {
            margin: 0;
            padding: 0;
            list-style: none;
            > li {
                padding-top: pxtovw2(30px);
                padding-bottom: pxtovw2(30px);
                &:nth-of-type(odd) {
                    background: #ececec;
                }
                &:nth-of-type(even) {
                    background: #fff;
                }
                p {
                    display: flex;
                    align-items: center;
                    padding-left: pxtovw2(40px);
                    margin-bottom: pxtovw2(20px);
                    font-size: pxtovw2(26px);
                    line-height: pxtovw2(34px);
                    color: #1c5ead;
                    span {
                        margin-right: pxtovw2(15px);
                        font-size: pxtovw2(34px);
                        font-weight: 900;
                        font-family: 'Arial', sans-serif;
                        line-height: pxtovw2(34px);
                    }
                    b {
                        margin-right: pxtovw2(15px);
                        font-weight: 900;
                    }
                    small {
                        font-size: pxtovw2(20px);
                        font-family: "MontSerrat", sans-serif;
                    }
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        position: relative;
                        padding-left: pxtovw2(40px);
                        padding-right: pxtovw2(40px);
                        font-size: pxtovw2(22px);
                        line-height: pxtovw2(30px);
                        &:before {
                            position: absolute;
                            left: pxtovw2(20px);
                            top: pxtovw2(12px);
                            content: ' ';
                            width: pxtovw2(6px);
                            height: pxtovw2(6px);
                            border-radius: 50%;
                            background: #252525;
                        }
                        & + li {
                            margin-top: pxtovw2(10px);
                        }
                    }
                }
            }
        }
    }
    .vision {
        background-image: url(../../../assets/img/m/introduce/bg_vision.jpg);
        background-size: cover;
        background-position: 50% 50%;
        padding-top: pxtovw2(85px) !important;
        padding-bottom: pxtovw2(40px) !important;
        h4 {
            color: white;
        }
        .box {
            margin-bottom: pxtovw2(10px);
            height: pxtovw2(320px);
            padding-top: pxtovw2(40px);
            padding-left: pxtovw2(40px);
            padding-right: pxtovw2(40px);
            h5 {
                font-family: 'Montserrat', sans-serif;
                font-weight: bold;
                font-size: pxtovw2(24px);
                line-height: pxtovw2(66px);
                text-decoration: underline;
            }
            p {
                font-size: pxtovw2(26px);
                line-height: pxtovw2(48px);
                font-weight: bold;
            }
        }
        .vision-box {
            background-image: url(../../../assets/img/m/introduce/bg_vision_box.jpg);
            background-size: cover;
            background-position: 50% 50%;
        }
        .mission-box {
            background-image: url(../../../assets/img/m/introduce/bg_mission_box.jpg);
            background-size: cover;
            background-position: 50% 50%;
            color: white;
            text-shadow: 0px pxtovw2(3px) pxtovw2(3px) rgba(0, 0, 0, 0.35);
        }
    }
    .members {
        background: #fff;
        padding-bottom: pxtovw2(100px) !important;
        h4 {
            margin-bottom:  pxtovw2(70px);
        }
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
        }
        > ul {
            > li {
                display: flex;
                align-items: center;
                & + li {
                    margin-top: pxtovw2(60px);
                }
                .member-photo {
                    margin-right: pxtovw2(50px);
                    img {
                        display: block;
                        // width: pxtovw2(338px);
                        // height: pxtovw2(338px);
                        width: pxtovw2(200px);
                        height: pxtovw2(200px);
                        background: #eee;
                        border-radius: 50%;
                        box-shadow: 0px 20px 29px 0px rgba(0, 0, 0, 0.2);
                    }
                }
                .member-career {
                    margin-bottom: pxtovw2(10px);
                    color: #383838;
                    word-spacing: pxtovw2(-1px);
                    letter-spacing: pxtovw2(-2px);
                    align-self: flex-end;
                    p {
                        margin-bottom: 0;
                    }
                    h6 {
                        margin-bottom: pxtovw2(10px);
                        font-size: pxtovw2(20px);
                        line-height: pxtovw2(24px);
                        color: #919191;
                    }
                    h5 {
                        margin-bottom: pxtovw2(20px);
                        font-weight: bold;
                        font-size: pxtovw2(34px);
                        line-height: pxtovw2(34px);
                    }
                    ul { 
                        font-size: pxtovw2(20px);
                        line-height: pxtovw2(34px);
                        li {
                            position: relative;
                            padding-left: pxtovw2(20px);
                            &:before {
                                position: absolute;
                                left: 0;
                                top: pxtovw2(12px);
                                content: ' ';
                                width: pxtovw2(6px);
                                height: pxtovw2(6px);
                                border-radius: 50%;
                                background: #383838;
                            }
                        }
                    }
                }
            }
        }
    }
    .teams {
        padding-bottom: 0;
        > ul {
            list-style: none;
            margin: 0;
            padding: 0;
            > li {
                .team-body {
                    margin-left: pxtovw2(40px);
                    h6 {
                        margin-bottom: pxtovw2(10px);
                        font-size: pxtovw2(20px);
                        line-height: pxtovw2(30px);
                        color: #919191;
                    }
                    h5 {
                        margin-bottom: pxtovw2(20px);
                        font-size: pxtovw2(34px);
                        line-height: pxtovw2(42px);
                        color: #383838;
                        font-weight: bold;
                    }
                    p {
                        margin-bottom: 0;
                        font-size: pxtovw2(22px);
                        line-height: pxtovw2(34px);
                        color: #383838;
                    }
                    dl {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        color: #383838;
                        font-size: pxtovw2(22px);
                        line-height: pxtovw2(40px);
                        dt {
                            float: left;
                            width: pxtovw2(145px);
                            font-weight: normal;
                        }
                        dd {
                            margin: 0 0 0 pxtovw2(145px);
                            padding: 0;
                        }
                    }
                    ul { 
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        font-size: pxtovw2(20px);
                        line-height: pxtovw2(34px);
                        li {
                            position: relative;
                            padding-left: pxtovw2(20px);
                            &:before {
                                position: absolute;
                                left: 0;
                                top: pxtovw2(12px);
                                content: ' ';
                                width: pxtovw2(6px);
                                height: pxtovw2(6px);
                                border-radius: 50%;
                                background: #383838;
                            }
                        }
                    }
                }
                .team-photo {
                    margin-top: pxtovw2(60px);
                    margin-left: pxtovw2(-40px);
                    margin-right: pxtovw2(-40px);
                    border-bottom: pxtovw2(2px) solid #000;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
                & + li {
                    margin-top: pxtovw2(140px);
                }
            }
        }
    }
}
</style>