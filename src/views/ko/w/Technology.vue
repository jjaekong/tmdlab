<template>
  <div class="web technology">
    <Header />
    <SubHeader :title="'기술'" />
    <PathNav :path="['기술']"/>
    <main id="main">
      <section id="smp">
        <h4 class="section-title">형상기억고분자</h4>
        <div class="scientific-name">
          <div class="full-name">
            Shape Memory Polymer
          </div>
          <div class="short-name">
            SMP
          </div>
        </div>
        <div class="description">
          <p>
            특정 조건에서 어떤 물체를 일정한 모양을 가지도록 만들어 놓으면, 그 이후 외부 자극에 의해<br>
            모양이 달라졌다 하더라도 동일한 특정 조건을 주면 다시 원래의 모양으로 되돌아가는 성질을 가진 고분자
          </p>
        </div>
        <div class="feature feature-2">
          <img src="@/assets/img/technology/img_feature_2.jpg">
        </div>
        <div class="feature movie-1">
          <h4 class="section-title">형상기억고분자 영상보기</h4>
          <div class="movie-wrapper">
            <!-- <img src="@/assets/img/technology/img_movie_1.jpg"> -->
            <!-- <div class="embed-responsive embed-responsive-16by9"> -->
            <div class="movie-container">
              <video controls id="smp-movie">
                <source src="@/assets/mov/smp.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="movie-cover">
                <img src="@/assets/img/ico_play.png" @click="playMovie()">
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </section>
      <section id="cnv">
        <h4 class="section-title">세포유래 나노소포체</h4>
        <div class="scientific-name">
          <div class="full-name">
            Cell-derived Nanovesicle
          </div>
          <div class="short-name">
            CNV
          </div>
        </div>
        <div class="description">
          <p>
            세포에서 분비되는 이중 지질막 구조의 세포외소포체 (Extracellular Vesicle, ex) Exosome)를 모사하여,<br>
            세포의 물리적 파쇄 과정에서 자가조립에 의해 만들어지는 세포외소포 모사체로 100nm 이하의 크기를 가지는 세포막 입자.<br>
            세포내의 mRNA, miRNA 및 단백질의 운송을 매개하고 세포 지질막 단백질의 존재로 세포 내외의 신호전달 및 상호작용에 역할을 수행할 수 있음.
          </p>
        </div>
        <div class="feature feature-1">
          <img src="@/assets/img/technology/img_feature_3.jpg">
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
import Footer from '@/components/ko/w/Footer.vue'

import $ from 'jquery';

export default {
  components: {
    Header, SubHeader, PathNav, Footer
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
    doScroll: function() {
      if (this.$route.fullPath.indexOf('#') > -1) {
        var targetId = this.$route.fullPath.split('#')[1]
        if ($('#'+targetId)) {
          var targetTop = $('#'+targetId).offset().top
          $('html, body').stop().animate({ scrollTop: targetTop }, 500)
        }
      }  
    },
    playMovie: function() {
      var smpMov = document.getElementById('smp-movie')
      $('.movie-1 .movie-cover').hide()
      smpMov.play()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.web.technology {
  section {
    padding-top: pxtovw(120px);
  }
  .section-title {
    margin-bottom: pxtovw(25px);
  }
  .scientific-name {
    margin: 0 auto pxtovw(15px);
    display: flex;
    width: pxtovw(350px);
    .full-name {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: pxtovw(37px);
      border-top: 1px dashed #b7b7b7;
      border-bottom: 1px dashed #b7b7b7;
      font-size: pxtovw(17px);
      color: #383838;
      letter-spacing: pxtovw(1px);
    }
    .short-name {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: pxtovw(10px);
      width: pxtovw(88px);
      height: pxtovw(37px);
      border: 1px solid #e3e3e3;
      font-size: pxtovw(17px);
      color: #0160a1;
      font-weight: bold;
      letter-spacing: pxtovw(1px);
    }
  }
  .description {
    font-size: pxtovw(18px);
    line-height: pxtovw(34px);
    color: #383838;
    text-align: center;
    p {
      margin: 0;
    }
  }
  #smp {
    margin-bottom: pxtovw(160px);
    .feature-1 {
      margin-top: pxtovw(30px);
      background-image: url(../../../assets/img/technology/bg_1.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      height: pxtovw(730px);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: pxtovw(1540px);
      }
    }
    .feature-2 {
      padding-top: pxtovw(95px);
      img {
        display: block;
        margin: 0 auto;
        width: pxtovw(1530px);
      }
    }
    .movie-1 {
      .section-title {
        margin-top: pxtovw(200px);
        margin-bottom: pxtovw(35px) !important;
      }
      .movie-wrapper {
        .movie-container {
          position: relative;
          margin: 0 auto;
          width: pxtovw(960px);
          height: pxtovw(540px);
          video {
            width: 100%;
            height: 100%;
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
              width: pxtovw(120px);
              height: pxtovw(120px);
              border: 0;
              border-radius: 50%;
              box-shadow: pxtovw(15px) pxtovw(15px) pxtovw(46px) pxtovw(7px) rgba(0, 0, 0, 0.4);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  #cnv {
    .section-title {
      margin-top: 0;
    }
    .feature-1 {
      margin-top: pxtovw(50px);
      background-image: url(../../../assets/img/technology/bg_2.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      height: pxtovw(730px);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: pxtovw(1540px);
        box-shadow: pxtovw(35px) pxtovw(42px) pxtovw(52px) pxtovw(13px) rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
