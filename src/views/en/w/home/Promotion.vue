<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col">
                    <section>
                        <header>
                            <h6 class="category ml-1"><span>Promotion/activity</span> <b>12</b></h6>
                            <!-- <a href="#" class="more">Here for details<span class="box"><span></span></span></a> -->
                            <router-link class="more" to="/w/en/promotion/news">Here for details<span class="box"><span></span></span></router-link>
                        </header>
                        <ul class="news">
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/12">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            TMD Lab - Yonsei University College of Medicine Joint Research, selected as a “medical device customized material” national assignment.
                                        </h4>
                                        <p class="date">
                                            <time>15th September 2020</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_main_news_12_en.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            Opening a new era in the field of “internal medical devices” with advanced shape memory polymer source technology that responds to body temperature
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/11">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            Thesis on vessel stabilization and vessel generation induction of the stem cell embedded to the enzyme-crosslinkable gelatin gel published at the international academic journal (Science Advances, IF 12.8)
                                        </h4>
                                        <p class="date">
                                            <time>26th February 2020</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_main_news_11.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            “We are developing shape memory polymer...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/10">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            Thesis on the 3-dimensional micro-channel network inducing vessel generation published at the international academic journal (Nature Communication, IF 11.88)
                                        </h4>
                                        <p class="date">
                                            <time>30th January 2020</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_main_news_10.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            TMD LAB Corporation developed the hydrogel-based micro-channel network ...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/9">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            [Biospectator] TMD LAB challenges in developing the new concept stent using ‘shape memory polymer’ (17th of December 2019)
                                        </h4>
                                        <p class="date">
                                            <time>17th of December 2019</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_main_news_9.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            Company created by Sung Hak-Joon, professor Yonsei University College of Medicine, after returning to Korea in 2018 ...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <!-- <li>
                                <router-link class="card" to="/w/en/promotion/news/8">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            ‘Innovative assignment for company creation’ selected out of the company creation, growth and technology development project held by Ministry of SMEs and Startups
                                        </h4>
                                        <p class="date">
                                            <time>25th of November 2019</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_main_news_8.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            TMD LAB Corporation is finally selected as the ‘innovative assignment for company creation’ out of the company creation, growth and ...
                                        </p>
                                    </div>
                                </router-link>
                            </li> -->
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
                // height: pxtovw(130px);
                .card-title {
                    margin-bottom: pxtovw(10px);
                    font-size: pxtovw(18px);
                    line-height: pxtovw(28px);
                    color: #373737;
                }
                .date {
                    position: absolute;
                    bottom: pxtovw(10px);
                    right: pxtovw(20px);
                    margin-bottom: 0;
                    color: #a1a1a1;
                    font-size: pxtovw(14px);
                    line-height: 1;
                    text-align: right;
                }
                & + .card-body {
                    padding-top: pxtovw(10px);
                }
            }
            .card-img-top {
                width: pxtovw(380px);
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