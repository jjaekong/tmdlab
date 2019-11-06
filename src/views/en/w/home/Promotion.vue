<template>
    <div class="slide promotion">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col">
                    <section>
                        <header>
                            <h6 class="category ml-1"><span>Promotion/activity</span> <b>4</b></h6>
                            <!-- <a href="#" class="more">Here for details<span class="box"><span></span></span></a> -->
                            <router-link class="more" to="/w/en/promotion/news">Here for details<span class="box"><span></span></span></router-link>
                        </header>
                        <ul class="news">
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/4">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            Graduated the entrance master course for medical devices, under the medical ...
                                        </h4>
                                        <p class="date">
                                            <time>16th of July, 2019</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_4.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            All employees in TMD LAB Corporation have completed 3-day CHAMP training course (Consortium for HRD Ability Magnified Program) from 16th to 18th in 2019, held by KMDIA (Korea Medical Devices Industry ...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/3">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            Participated into the KTERMS (Korean Tissue Engineering and Regenerative ...
                                        </h4>
                                        <p class="date">
                                            <time>6th of June, 2019</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_3.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            KTERMS (Korea Tissue Engineering and Regenerative Medicine Society) has held its own international academic conference for 3 days from 6th to 8th of June in 2019, at International Convention Center Jeju.
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/2">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            Obtained the non-exclusive license for shape memory polymer from the ...
                                        </h4>
                                        <p class="date">
                                            <time>21st of May, 2019</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_2.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            In order to develop and commercialize the human insertion stent using shape memory polymer, we have obtained the non-exclusive license on the patent: ‘a photo-crosslinkable shape memory polymer and ...
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="card" to="/w/en/promotion/news/1">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            Applied for 2 patents related to stent using shape memory polymer ...
                                        </h4>
                                        <p class="date">
                                            <time>19th of December, 2018</time>
                                        </p>
                                    </div>
                                    <img src="@/assets/img/promotion/thumb_news_1.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p>
                                            2 patents have been applied related to stent development using shape memory polymer. First is ‘low molecular heparin-releasing structure in spreading shape memory polymer stent at the point of occlusion ...
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
                height: pxtovw(200px);
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