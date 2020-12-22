<template>
    <div class="web product smp-v">
        <Header />
        <SubHeader :title="'제품'" />
        <PathNav :path="['제품', '형상기억고분자', '혈관 외벽 스텐트']" />
        <main id="main">
            <div class="product-title">
                <div class="category">형상기억</div>
                <h3 class="title">혈관 외벽 스텐트</h3>
                <span class="brand">Innoself&trade; V</span>
            </div>
            <div class="feature feature-1">
                <div class="feature-container">
                    <div class="feature-row">
                        <div>
                            <img class="feature-image float-right" src="@/assets/img/product/smp-v/img_feature_1.jpg"
                                alt="">
                        </div>
                        <div>
                            <img class="feature-image" src="@/assets/img/product/smp-v/img_feature_2.jpg" alt="">
                        </div>
                    </div>
                    <div class="feature-row">
                        <div>
                            <div class="feature-desc float-right">
                                <h4>관상동맥우회술</h4>
                                <p>
                                    좁아진 관상동맥을 대체할 수 있는 도관<br>
                                    (팔목 가까이에 있는 요골동맥, 다리 안쪽 복재정맥 등을 분리해 사용)을 연결하여<br>
                                    심장에 혈류를 공급하는 우회로를 만들어주는 수술
                                </p>
                                <div class="side-effect">
                                    <h5>부작용/후유증</h5>
                                    <p>
                                        2-5% 사망률, 수술 후 출혈<br>
                                        장기적으로 수술부위의 동맥 및 정맥 도관이 막힐 수 있음
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="feature-desc">
                                <h4>동정맥루 수술</h4>
                                <p>
                                    만성 신부전 환자의 지속적인 혈액투석 시 <br>
                                    정맥을 많은 양의 혈액이 지나가도록 확장시키고 <br>
                                    동맥처럼 튼튼하게 하기 위해서 동맥과 표피 정맥을 연결하는 조성술
                                </p>
                                <div class="side-effect">
                                    <h5>부작용/후유증</h5>
                                    <p>
                                        연결된 혈관들의 압력 차이로 인한 수술 부위 부종, <br>
                                        혈관 투석에 사용할 수 있을 만큼 충분히 굵어지지 않는 경우 재수술
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="feature feature-2">
                <div class="feature-define">
                    <div class="keyword">평가</div>
                </div>
                <div class="feature-container">
                    <div class="feature-row">
                        <div>
                            <img class="feature-image float-right" src="@/assets/img/product/smp-v/img_feature_3.jpg"
                                alt="">
                        </div>
                        <div>
                            <img class="feature-image" src="@/assets/img/product/smp-v/img_feature_4.jpg" alt="">
                            <div class="feature-desc">
                                <h4>SMP-V<sup>&reg;</sup></h4>
                                <ul>
                                    <li><img src="@/assets/img/ico_check_circle.png"> 혈관 외벽 지지체로써 협착 방지</li>
                                    <li><img src="@/assets/img/ico_check_circle.png"> 동맥과 정맥의 혈압 차이로 인한 부종 방지</li>
                                    <li><img src="@/assets/img/ico_check_circle.png"> 혈류 변화 방지로 혈전 형성 낮춤</li>
                                    <li><img src="@/assets/img/ico_check_circle.png"> 맥관벽혈관 생성 유도로 치료 효과 높임</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="feature-row">
                        <div>
                            <div class="feature-desc float-right">
                                Tm 온도에서 SMP-V<sup>&reg;</sup> 시제품의 형상 복원으로 혈관 외벽을 랩핑함
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/ko/w/Header.vue'
    import SubHeader from '@/components/ko/w/SubHeader.vue'
    import PathNav from '@/components/ko/w/PathNav.vue'
    import Footer from '@/components/ko/w/Footer.vue'

    export default {
        components: {
            Header,
            SubHeader,
            PathNav,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/css/functions.scss";

    .web.product {
        .feature-define {
            display: flex;
            align-items: center;
            font-size: pxtovw(18px);
            color: #383838;
            margin: 0 auto;
            width: pxtovw(1440px);

            .keyword {
                margin-right: pxtovw(20px);
            }
        }

        .product-title {
            margin-bottom: pxtovw(55px);
        }

        .feature-row {
            display: flex;

            >div {
                flex: 1;
            }
        }

        .feature-1 {
            margin-bottom: pxtovw(100px);

            .feature-image {
                height: pxtovw(497px);
            }

            .feature-row:nth-of-type(1) {
                >div:nth-of-type(1) {
                    background: #dedfe1;
                }

                >div:nth-of-type(2) {
                    background: #f9f9f9;
                }
            }

            .feature-desc {
                margin-top: pxtovw(30px);
                width: pxtovw(610px);
                text-align: center;

                >h4 {
                    margin-bottom: pxtovw(15px);
                    font-size: pxtovw(22px);
                    line-height: pxtovw(34px);
                    color: #383838;
                }

                >p {
                    margin-bottom: pxtovw(50px);
                    color: #383838;
                    font-size: pxtovw(18px);
                    line-height: pxtovw(32px);
                }
            }

            .side-effect {
                display: inline-block;
                margin: 0 auto;
                text-align: left;
                border-left: 1px solid #0072bc;
                border-right: 1px solid #0072bc;
                padding-left: pxtovw(25px);
                padding-right: pxtovw(25px);

                h5 {
                    margin-top: pxtovw(-9px);
                    margin-bottom: 0;
                    color: #0160a1;
                    font-size: pxtovw(16px);
                    line-height: pxtovw(34px);
                    font-weight: 900;
                }

                p {
                    margin-bottom: pxtovw(-4px);
                    font-size: pxtovw(16px);
                    line-height: pxtovw(28px);
                    color: #7a7a7a;
                }
            }
        }

        .feature-2 {
            margin-bottom: pxtovw(280px);

            .feature-define {
                position: relative;

                .keyword {
                    position: absolute;
                    top: pxtovw(48px);
                }
            }

            .feature-row:nth-of-type(1) {
                >div {
                    height: pxtovw(497px);
                }

                >div:nth-of-type(1) {
                    background: #dedfe1;

                    .feature-image {
                        height: pxtovw(543px);
                    }
                }

                >div:nth-of-type(2) {
                    position: relative;
                    background: #f9f9f9;

                    .feature-image {
                        height: pxtovw(497px);
                    }

                    .feature-desc {
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 50%;
                        bottom: 0;
                        background: rgba(#fff, .9);

                        h4 {
                            margin-top: pxtovw(70px);
                            margin-bottom: pxtovw(50px);
                            padding-left: pxtovw(170px);
                            font-family: 'MontSerrat', sans-serif;
                            font-weight: 900;
                            color: #0072bc;
                            font-size: pxtovw(34px);
                            line-height: pxtovw(34px);
                        }

                        ul {
                            margin: 0 0 0 pxtovw(20px);
                            padding: 0;
                            list-style: none;

                            li {
                                display: flex;
                                align-items: center;
                                font-size: pxtovw(22px);
                                line-height: pxtovw(34px);

                                img {
                                    margin-right: pxtovw(15px);
                                    width: pxtovw(43px);
                                    height: pxtovw(43px);
                                }

                                &+li {
                                    margin-top: pxtovw(10px);
                                }
                            }
                        }
                    }
                }
            }

            .feature-row:nth-of-type(2) {
                .feature-desc {
                    margin-top: pxtovw(65px);
                    width: pxtovw(610px);
                    color: #383838;
                    font-size: pxtovw(22px);
                    line-height: pxtovw(34px);
                }
            }
        }
    }
</style>