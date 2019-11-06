<template>
  <div class="web product smp-b">
    <Header />
    <SubHeader :title="'제품'" />
    <PathNav :path="['제품', '형상기억고분자', '담관 스텐트']"/>
    <main id="main">
      <div class="product-title">
        <div class="category">형상기억</div>
        <h3 class="title">담관 스텐트</h3>
        <span class="brand">SMP-B<sup>&reg;</sup></span>
      </div>
      <div class="feature feature-1">
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/smp-b/img_feature_1.jpg">
          </div>
          <div class="feature-row">
            <div>
              <div class="feature-desc float-right">
                <h4>담관 폐쇄</h4>
                <p>
                  담석이나 종양에 의해 담관의 전체 혹은 일부분이<br>
                  폐쇄된 질환으로 강한 황달 유발
                </p>
              </div>
            </div>
            <div>
              <div class="feature-desc">
                <h4>담관 스텐트 삽입술</h4>
                <p>
                  피부 및 간 실질을 통해 간 내 담도에 접근한 후 플라스틱이나 <br>
                  금속으로 만들어진 스텐트를 좁아진 부위에 넣어 <br>
                  담즙이 정상적인 경로인 장으로 배출될 수 있도록 하는 시술
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-define">
          <div class="keyword">문제점</div>
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <ul>
              <li><img src="@/assets/img/ico_check_circle.png"> 스텐트 이탈에 의한 천공, 높은 재 협착율</li>
              <li><img src="@/assets/img/ico_check_circle.png"> 플라스틱 스텐트 : 메탈 스텐트에 비해 수명이 짧아 막히는 시기인 3개월 간격으로 교체해야함 (교체율 ~45%)</li>
              <li><img src="@/assets/img/ico_check_circle.png"> 메탈 스텐트 : 스텐트 폐쇄 시 제거가 불가능</li>
            </ul>
          </div>
          <div class="feature-row">
            <img src="@/assets/img/product/smp-b/arrow_down.png">
          </div>
        </div>
      </div>
      <div class="feature feature-3">
        <div class="feature-define">
          <div class="keyword">효과</div>
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/smp-b/img_feature_2.jpg">
          </div>
          <div class="feature-row">
            <div class="feature-desc">
              <h4><b>SMP-B<sup>&reg;</sup></b> 효과</h4>
              <ul>
                <li><img src="@/assets/img/ico_check_circle.png"> 자가 팽창에 의해 스텐트 이탈률 감소</li>
                <li><img src="@/assets/img/ico_check_circle.png"> 바이오필름 생성 억제</li>
                <li><img src="@/assets/img/ico_check_circle.png"> 염증, 섬유화 수치 감소</li>
                <li><img src="@/assets/img/ico_check_circle.png"> 스텐트 폐색률 감소</li>
              </ul>
            </div>
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
    Header, SubHeader, PathNav, Footer
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
  .feature-row {
    display: flex;
    > div {
      flex: 1;
    }
  }
  .product-title {
    margin-bottom: pxtovw(40px);
  }
  .feature-1 {
    margin-bottom: pxtovw(200px);
    .feature-row:nth-of-type(1) {
      justify-content: center;
      background: #b7d5ef;
      .feature-image {
        width: pxtovw(1800px);
      }
    }
    .feature-desc {
      width: pxtovw(620px);
      text-align: center;
      h4 {
        margin-top: pxtovw(55px);
        margin-bottom: pxtovw(15px);
        font-size: pxtovw(22px);
        line-height: pxtovw(34px);
        color: #383838;
      }
      p {
        margin-bottom: 0;
        font-size: pxtovw(18px);
        line-height: pxtovw(32px);
        color: #383838;
      }
    }
  }
  .feature-2 {
    .feature-define {
      position: relative;
      .keyword {
        position: absolute;
        top: pxtovw(-48px);
      }
    }
    .feature-container {
      ul {
        list-style: none;
        margin: 0 auto;
        padding: 0 pxtovw(100px);
        width: pxtovw(1240px);
        li {
          display: flex;
          align-items: center;
          color: #fff;
          font-size: pxtovw(22px);
          line-height: pxtovw(34px);
          img {
            margin-right: pxtovw(25px);
            width: pxtovw(43px);
            height: pxtovw(43px);
          }
          & + li {
            margin-top: pxtovw(13px);
          }
        }
      }
      .feature-row:nth-of-type(1) {
        padding-top: pxtovw(80px);
        padding-bottom: pxtovw(80px);
        background: #0072bc;
      }
      .feature-row:nth-of-type(2) {
        background: #f9f9f9;
        justify-content: center;
        img {
          width: pxtovw(157px);
        }
      }
    }
  }
  .feature-3 {
    padding-bottom: pxtovw(150px);
    padding-top: pxtovw(100px);
    background: #f9f9f9;
    .feature-define {
      position: relative;
      .keyword {
        position: absolute;
        top: pxtovw(-25px);
      }
    }
    .feature-row:nth-of-type(1) {
      justify-content: center;
      .feature-image {
        width: pxtovw(1540px);
      }
    }
    .feature-row:nth-of-type(2) {
      margin-top: pxtovw(90px);
      .feature-desc {
        text-align: center;
        h4 {
          margin-bottom: pxtovw(40px);
          font-size: pxtovw(34px);
          line-height: pxtovw(34px);
          color: #0072bc;
          font-weight: bold;
          b {
            font-family: 'MontSerrat', sans-serif;
          }
        }
        ul {
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0;
          list-style: none;
          li {
            display: flex;
            align-items: center;
            color: #383838;
            font-size: pxtovw(22px);
            line-height: pxtovw(34px);
            img {
              margin-right: pxtovw(25px);
              width: pxtovw(43px);
              height: pxtovw(43px);
            }
            & + li {
              margin-left: pxtovw(35px);
            }
          }
        }
      }
    }
  }
}
</style>