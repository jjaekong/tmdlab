<template>
    <div class="mobile technology">
        <Header />
        <section class="smp overview" id="smp">
            <h3>Technology</h3>
            <header>
                <h4>Shape memory polymer (SMP)</h4>
                <!-- <div class="scientific">
                    <div class="full">Shape Memory Polymer</div>
                    <div class="short">SMP</div>
                </div> -->
            </header>
            <p>
                SMP has its special characteristics: once it is formed to have a certain shape under a specific condition, it returns to its original form under that condition even after its shape is changed due to external stimulation.
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
                    <h5>Video clip on SMP</h5>
                    <p>
                        The research team of Prof. Hak-Joon Sung in Yonsei University College of Medicine possesses the fundamental technology of shape memory polymer synthesis.
                    </p>
                </div>
            </div>
        </section>
        <section class="cnv overview" id="cnv">
            <header>
                <h4>Cell-derived Nanovesicles (CNV)</h4>
                <!-- <div class="scientific">
                    <div class="full">Cell-derived Nanovesicle</div>
                    <div class="short">CNV</div>
                </div> -->
            </header>
            <p>
                It copies the extracellular vesicle (ex: exosome) with lipid bilayer structure which is secreted from the cell, and becomes a self-assembled cell membrane particle with its size less than 100nm under physical spallation.<br>
                CNV works as a mediator for transporting membrane proteins, signaling molecules and miRNAs, and activating receptors of recipient cells.<br>
                Along with the lipid bilayer protein of the cell, it also plays a role in signal transmission and mutual actions inside and outside the cell.
            </p>
            <div class="figure">
                <img src="@/assets/img/m/technology/img_cnv_overview.jpg">
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/en/m/Header.vue'
import Footer from '@/components/en/m/Footer.vue'

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