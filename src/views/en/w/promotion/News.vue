<template>
    <div class="web promotion">
        <Header />
        <SubHeader :title="'Promotion/activity'" />
        <PathNav :path="['Promotion/activity', 'News']" />
        <main id="main">
            <div class="page-title">
                <h3 class="title">Feel free to check on the news of TMD LAB.</h3>
            </div>
            <div class="page-subtitle">
                News and updates will be firstly noticed.
            </div>
            <div class="news-count">
                <div>
                    NEW
                    <span></span>
                    <b>15</b>
                </div>
            </div>
            <div class="news-list">
                <ol>
                    <li>
                        <router-link class="news-item" to="./news/15">
                            <img src="@/assets/img/promotion/PC_thumb_news_15.jpg">
                            <div class="news-title">
                                <h4>Selected for the recruitment support project for highly experienced researchers supported by the Korea Industrial Technology Association</h4>
                                <span>24th of May 2021</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/14">
                            <img src="@/assets/img/promotion/PC_thumb_news_14.jpg">
                            <div class="news-title">
                                <h4>Outer Vascular Wall Support Research Paper, Selected as Small Journal Cover (2021.05)</h4>
                                <span>6th of May 2021</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/13">
                            <img src="@/assets/img/promotion/PC_thumb_news_13.jpg">
                            <div class="news-title">
                                <h4>2021 Spring Biomaterials Society Outstanding Paper Presentation Award</h4>
                                <span>26th of March 2021</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/12">
                            <img src="@/assets/img/promotion/thumb_news_12_en.jpg">
                            <div class="news-title">
                                <h4>TMD Lab - Yonsei University College of Medicine Joint Research, selected as a
                                    “medical device customized material” national assignment.</h4>
                                <span>15th September 2020</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/11">
                            <img src="@/assets/img/promotion/thumb_news_11.jpg">
                            <div class="news-title">
                                <h4>Thesis on vessel stabilization and vessel generation induction of <br>the stem cell
                                    embedded to the enzyme-crosslinkable gelatin gel <br>published at the international
                                    academic journal (Science Advances, IF 12.8)</h4>
                                <span>26th February 2020</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/10">
                            <img src="@/assets/img/promotion/thumb_news_10.jpg">
                            <div class="news-title">
                                <h4>Thesis on the 3-dimensional micro-channel network inducing vessel <br>generation
                                    published at the international academic journal <br>(Nature Communication, IF 11.88)
                                </h4>
                                <span>30th January 2020</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/9">
                            <img src="@/assets/img/promotion/thumb_news_9.jpg">
                            <div class="news-title">
                                <h4>[Biospectator] TMD LAB challenges in developing the new concept stent <br>using
                                    ‘shape memory polymer’</h4>
                                <span>17th of December 2019</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/8">
                            <img src="@/assets/img/promotion/thumb_news_8.jpg">
                            <div class="news-title">
                                <h4>‘Innovative assignment for company creation’ selected out of <br>the company
                                    creation, growth and technology development project held by <br>Ministry of SMEs and
                                    Startups</h4>
                                <span>25th of November 2019</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/7">
                            <img src="@/assets/img/promotion/thumb_news_7.jpg">
                            <div class="news-title">
                                <h4>[The Korea Economic Daily] New stent material reopening occlusion <br>via body
                                    temperature</h4>
                                <span>20th of November 2019</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/6">
                            <img src="@/assets/img/promotion/thumb_news_6.jpg">
                            <div class="news-title">
                                <h4>Thesis on the shape memory polymer-based lacrimal duct stent <br>published at the
                                    international academic journal <br>(Acta Biomaterialia, IF 6.638)</h4>
                                <span>7th of November 2019</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/5">
                            <img src="@/assets/img/promotion/thumb_news_5.jpg">
                            <div class="news-title">
                                <h4>Thesis on the shape memory polymer-based anastomotic device <br>published at the
                                    international academic journal <br>(Advanced Materials, IF 25.809)</h4>
                                <span>27th of August 2019</span>
                            </div>
                        </router-link>
                    </li>

                    <li>
                        <router-link class="news-item" to="./news/4">
                            <img src="@/assets/img/promotion/thumb_news_4.jpg">
                            <div class="news-title">
                                <h4>Graduated the entrance master course for medical devices, <br>under the medical
                                    device CHAMP curriculum 2019 <br>(16th of July, 2019 – 18th of July, 2019)</h4>
                                <span>16th of July, 2019</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/3">
                            <img src="@/assets/img/promotion/thumb_news_3.jpg">
                            <div class="news-title">
                                <h4>Participated into the KTERMS (Korean Tissue Engineering <br>and Regenerative
                                    Medicine Society) conference event 2019, selected <br>to be awarded ‘superb’ in the
                                    poster division</h4>
                                <span>6th of June, 2019</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/2">
                            <img src="@/assets/img/promotion/thumb_news_2.jpg">
                            <div class="news-title">
                                <h4>Obtained the non-exclusive license for shape memory polymer <br>from
                                    theindustrial-educational cooperation group of Yonsei University</h4>
                                <span>21st of May, 2019</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="news-item" to="./news/1">
                            <img src="@/assets/img/promotion/thumb_news_1.jpg">
                            <div class="news-title">
                                <h4>Applied for 2 patents related to stent using shape memory polymer</h4>
                                <span>19th of December, 2018</span>
                            </div>
                        </router-link>
                    </li>
                </ol>
            </div>
        </main>
        <Footer />
        <router-view />
    </div>
</template>

<script>
    import Header from '@/components/en/w/Header.vue'
    import SubHeader from '@/components/en/w/SubHeader.vue'
    import PathNav from '@/components/en/w/PathNav.vue'
    // import PageTitle from '@/components/PageTitle.vue'
    import Footer from '@/components/en/w/Footer.vue'

    export default {
        components: {
            Header,
            SubHeader,
            PathNav, //PageTitle, 
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/css/functions.scss";

    .web.promotion {
        .page-title {
            margin-top: pxtovw(120px);
            display: flex;
            justify-content: center;
            align-items: center;

            .category {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: pxtovw(15px);
                padding-right: pxtovw(15px);
                //width: pxtovw(100px);
                height: pxtovw(40px);
                border: 1px solid #c5c5c5;
                border-radius: pxtovw(5px);
                color: #8b8b8b;
                font-size: pxtovw(18px);
                margin-right: pxtovw(20px);
            }

            .title {
                margin: 0;
                font-size: pxtovw(34px);
                line-height: pxtovw(40px);
                color: #222;
                font-weight: 900;
            }

            .brand {
                margin-left: pxtovw(15px);
                font-family: 'MontSerrat', sans-serif;
                font-weight: 900;
                color: #0160a1;
                font-size: pxtovw(20px);
            }
        }

        .page-subtitle {
            margin-top: pxtovw(25px);
            margin-bottom: pxtovw(80px);
            color: #4e4e4e;
            font-size: pxtovw(16px);
            line-height: pxtovw(26px);
            text-align: center;
        }

        .news-count {
            margin: 0 auto pxtovw(10px);
            width: pxtovw(1024px);
            color: #2457ca;
            font-size: pxtovw(12px);
            line-height: pxtovw(34px);

            div {
                display: flex;
                align-items: center;

                span {
                    margin-left: pxtovw(10px);
                    margin-right: pxtovw(10px);
                    width: pxtovw(20px);
                    height: 1px;
                    background: #000;
                }

                b {
                    color: #383838;
                    font-size: pxtovw(20px);
                }
            }
        }

        .news-list {
            padding-top: pxtovw(56px);
            padding-bottom: pxtovw(56px);
            background: #f0f0f0;

            ol {
                list-style: none;
                margin: 0 auto;
                padding: 0;
                width: pxtovw(1024px);

                li {
                    &+li {
                        margin-top: pxtovw(20px);
                    }
                }
            }
        }

        .news-item {
            display: flex;
            height: pxtovw(120px);
            background: #fff;
            text-decoration: none;

            img {
                width: pxtovw(243px);
                background: #a1a1a1;
            }

            .news-title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: pxtovw(40px);
                padding-right: pxtovw(40px);

                h4 {
                    margin: 0 0 pxtovw(5px) 0;
                    font-size: pxtovw(20px);
                    color: #373737;
                    font-weight: normal;
                }

                span {
                    font-size: pxtovw(14px);
                    color: #a1a1a1;
                }
            }
        }
    }
</style>