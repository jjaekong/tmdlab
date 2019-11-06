<template>
    <div class="mobile technology">
        <Header />
        <section class="smp overview" id="smp">
            <h3>기술</h3>
            <header>
                <h4>형상기억고분자</h4>
                <div class="scientific">
                    <div class="full">Shape Memory Polymer</div>
                    <div class="short">SMP</div>
                </div>
            </header>
            <p>
                특정 조건에서 어떤 물체를 일정한 모양을 가지도록 만들어 놓으면, <br>
                그 이후 외부 자극에 의해 모양이 달라졌다 하더라도 <br>
                동일한 특정 조건을 주면 다시 원래의 모양으로 되돌아가는 <br>
                성질을 가진 고분자
            </p>
        </section>
        <section class="smp shape">
            <p>
                <img src="@/assets/img/m/technology/img_smp_shape.png">
            </p>
        </section>
        <section class="smp movie">
            <div class="movie-wrapper">
                <video controls id="smp-movie">
                    <source src="@/assets/mov/smp.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="movie-cover">
                    <img src="@/assets/img/ico_play.png" @click="playMovie()">
                </div>
            </div>
            <div class="desc">
                <div>
                    <h5>형상기억고분자</h5>
                    <p>
                        연세대학교 성학준 교수 (티엠디랩 이사 · 기술고문) 연구팀<br>
                        형상기억고분자 합성 원천기술 보유
                    </p>
                </div>
            </div>
        </section>
        <section class="cnv overview" id="cnv">
            <header>
                <h4>세포유래 나노소포체</h4>
                <div class="scientific">
                    <div class="full">Cell-derived Nanovesicle</div>
                    <div class="short">CNV</div>
                </div>
            </header>
            <p>
                세포에서 분비되는 이중 지질막 구조의 세포외소포체<br>
                (Extracellular Vesicle, ex) Exosome)를 모사하여,세포의<br>
                물리적 파쇄 과정에서 자가조립에 의해 만들어지는 세포외소포<br> 
                모사체로 100nm 이하의 크기를 가지는 세포막 입자.<br>
                세포내의 mRNA, miRNA 및 단백질의 운송을 매개하고 <br>
                세포 지질막 단백질의 존재로 세포 내외의 신호전달 및 <br>
                상호작용에 역할을 수행할 수 있음.
            </p>
            <div class="figure">
                <img src="@/assets/img/m/technology/img_cnv_overview.jpg">
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/ko/m/Header.vue'
import Footer from '@/components/ko/m/Footer.vue'

import $ from 'jquery'

export default {
    components: {
        Header, Footer
    },
    mounted: function() {
        var self = this
        window.setTimeout(function() {
            self.doScroll()
        }, 500)
    },
    watch: {
        $route: function() {
            this.doScroll()
        }
    },
    methods: {
        playMovie: function() {
            var smpMov = document.getElementById('smp-movie')
            $('.smp.movie .movie-cover').hide()
            smpMov.play()
        },
        doScroll: function() {
            if (this.$route.fullPath.indexOf('#') > -1) {
                var targetId = this.$route.fullPath.split('#')[1]
                if ($('#'+targetId)) {
                    var targetTop = $('#'+targetId).offset().top
                    $('html, body').stop().animate({ scrollTop: targetTop }, 500)
                }
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.mobile.technology {
    background-image: url(../../../assets/img/m/technology/bg.jpg);
    background-position: 50% 0;
    background-size: 100% auto;
    background-color: #999;
    background-repeat: no-repeat;
    > section {
        padding: pxtovw2(40px);
        color: #fff;
        > h3 {
            display: inline-block;
            font-size: pxtovw2(30px);
            line-height: pxtovw2(56px);
            border-bottom: pxtovw2(2px) solid #fff;
            color: #fff;
            margin-bottom: pxtovw2(100px);
        }
        > header {
            margin-bottom: pxtovw2(30px);
            margin-left: pxtovw2(40px);
            h4 {
                margin-bottom: pxtovw2(20px);
                font-size: pxtovw2(54px);
                line-height: pxtovw2(66px);
                color: #fff;
                font-weight: 900;
            }
            .scientific {
                display: flex;
                height: pxtovw2(36px);
                .full {
                    margin-right: pxtovw2(15px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: pxtovw2(280px);
                    font-size: pxtovw2(17px);
                    line-height: pxtovw2(17px);
                    letter-spacing: pxtovw2(1px);
                    border-top: 1px dashed #fff;
                    border-bottom: 1px dashed #fff;
                }
                .short {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: pxtovw2(88px);
                    background: #0160a1;
                    font-size: pxtovw2(17px);
                    line-height: pxtovw2(17px);
                }
            }
        }
    }
    .smp.overview {
        padding-top: pxtovw2(150px) !important;
        p {
            margin-bottom: pxtovw2(30px);
            margin-left: pxtovw2(40px);
            font-size: pxtovw2(22px);
            line-height: pxtovw2(36px);
        }
        .figure {
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .smp.movie {
        padding: 0 !important;
        a {
            img {
                display: block;
                width: 100%;
            }
        }
        .movie-wrapper {
            position: relative;
            video {
                display: block;
                width: 100%;
            }
            .movie-cover {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(#000, .5);
                background-image: url(../../../assets/img/technology/bg_movie.png);
                img {
                    width: pxtovw2(120px);
                    height: pxtovw2(120px);
                    border: 0;
                    border-radius: 50%;
                    box-shadow: pxtovw(15px) pxtovw(15px) pxtovw(46px) pxtovw(7px) rgba(0, 0, 0, 0.4);
                    cursor: pointer;
                }
            }
        }
        .desc {
            background: #222222;
            padding: pxtovw2(40px) pxtovw2(60px);
            div {
                padding-left: pxtovw2(20px);
                border-left: 1px solid #fff;
            }
            h5 {
                font-size: pxtovw2(28px);
                font-weight: 900;
            }
            p {
                margin: 0;
                font-size: pxtovw2(22px);
                line-height: pxtovw2(36px);
            }
        }
    }
    .smp.shape {
        padding: 0 !important;
        img {
            display: block;
            width: 100%;
        }
    }
    .cnv.overview {
        padding-top: pxtovw2(140px) !important;
        padding-bottom: pxtovw2(45px) !important;
        background-image: url(../../../assets/img/m/technology/bg_cnv.jpg);
        background-size: cover;
        background-position: 50% 50%;
        p {
            margin-bottom: pxtovw2(45px);
            margin-left: pxtovw2(40px);
            font-size: pxtovw2(22px);
            line-height: pxtovw2(36px);
        }
        img {
            display: block;
            width: 100%;
        }
    }
}
</style>