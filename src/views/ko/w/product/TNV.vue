<template>
  <div class="web product tnv">
    <Header />
    <SubHeader :title="'제품'" />
    <PathNav :path="['제품', '세포유래 나노소포체', '관절염 치료제']"/>
    <main id="main">
      <div class="product-title">
        <div class="category">세포유래 나노소포체</div>
        <h3 class="title">관절염 치료제</h3>
        <span class="brand">TNV<sup>&reg;</sup></span>
      </div>
      <div class="feature feature-1">
        <div class="feature-define">
          <div class="keyword">현황</div> 총 인구대비 노인 인구 증가추세와 동반되는 무릎 관절염에 대한 수요가 증가하고 치료제 시장이 확대되고 있음
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/tnv/img_feature_1.jpg">
          </div>
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-define">
          <div class="keyword">기존</div> 판매 성장세가 높으나 高價이며 수술이 동반 되어 부담
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/tnv/img_feature_2.jpg">
          </div>
          <div class="feature-row">
            <div>
              <div class="feature-desc">
                <p>메디포스트, 줄기세포치료제 '카티스템' 판매량 전년比 40% 증가 (2018.04.20.)</p>
                <p>국내 줄기세포 치료제 사상 처음으로 연 매출 100억원을 넘어서며 흥행 신약 대열에 합류함.</p>
              </div>
            </div>
            <div>
              <div class="feature-desc">
                <ul>
                  <li>인공관절 치환술보다 고가 (1.5-2배)</li>
                  <li>수술이 동반되어 환자에 부담</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature feature-3">
        <div class="feature-define">
          <div class="keyword">TNV</div> 약물이 담지된 세포막 유래 나노소포체 -> 재생효과 증대, 비수술법
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/tnv/img_feature_3.jpg">
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
    margin-bottom: pxtovw(55px);
  }
  .feature-1 {
    margin-bottom: pxtovw(118px);
    .feature-define {
      margin-bottom: pxtovw(35px);
    }
    .feature-row {
      justify-content: center;
      .feature-image {
        width: pxtovw(1424px);
      }
    }
  }
  .feature-2 {
    margin-bottom: pxtovw(145px);
    .feature-define {
      margin-bottom: pxtovw(50px);
    }
    .feature-container {
      .feature-row:nth-of-type(1) {
        justify-content: center;
        .feature-image {
          width: pxtovw(1443px);
        }
      }
      .feature-row:nth-of-type(2) {
        position: relative;
        margin-top: pxtovw(70px);
        height: pxtovw(220px);
        &:after {
          content: ' ';
          position: absolute;
          top: 0;
          left: calc(50% - 8.02083vw / 2);
          width: pxtovw(154px);
          height: 100%;
          background-image: url(../../../../assets/img/product/tnv/bg_arrow.png);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
        }
        > div {
          display: flex;
          align-items: center;
          color: #fff;
        }
        > div:nth-of-type(1) {
          background: #0072bc;
          height: 100%;
          justify-content: flex-end;
          .feature-desc {
            padding-right: pxtovw(105px);
            p {
              margin: 0;
              font-size: pxtovw(18px);
              line-height: pxtovw(34px);
            }
          }
        }
        > div:nth-of-type(2) {
          background: #004c7e;
          .feature-desc {
            padding-left: pxtovw(140px);
            ul {
              margin: 0;
              padding: 0;
              list-style: none;
              li {
                position: relative;
                padding-left: pxtovw(30px);
                font-size: pxtovw(22px);
                line-height: pxtovw(40px);
                &:before {
                  position: absolute;
                  left: 0;
                  content: 'ㆍ';
                }
              }
            }
          }
        }
      }
    }
  }
  .feature-3 {
    margin-bottom: pxtovw(370px);
    .feature-define {
      margin-bottom: pxtovw(60px);
    }
    .feature-row {
      justify-content: center;
      .feature-image {
        width: 100%;
      }
    }
  }
}
</style>