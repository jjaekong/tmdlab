<template>
  <div class="web product tnv">
    <Header />
    <SubHeader :title="'Products'" />
    <PathNav :path="['Products', 'Cell-derived nanovesicles', 'Treatment to osteoarthritis']"/>
    <main id="main">
      <div class="product-title">
        <div class="category">Cell-derived nanovesicles</div>
        <h3 class="title">Treatment to osteoarthritis</h3>
        <span class="brand">CNV-OA<sup>&reg;</sup></span>
      </div>
      <div class="feature feature-1">
        <div class="feature-define">
          <div class="keyword">Current<br>condition</div> There is an increasing demand on knee osteoarthritis while the treatment market is being expanded, accompanied by the growing number of elderly per total population.
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/tnv/en/img_feature_1.jpg">
          </div>
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-define">
          <div class="keyword">AS-IS</div> An existing treatment is with high sales growth, however, is expensive while requiring a surgery.
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/tnv/en/img_feature_2.jpg">
          </div>
          <div class="feature-row">
            <div>
              <div class="feature-desc">
                <!-- <p>Medipost: Cartistem (stem cell medicine) sales <br>increased by 40% year on year (20th of April, 2018)</p>
                <p>Included into the rising medicine fields by exceeding annual sales of KRW 10 billion, <br>first in history of domestic stem cell medicine.</p> -->
                <ul>
                  <li>Medipost: Cartistem (stem cell medicine) sales increased by 40% year on year (20th of April, 2018)</li>
                  <li>Included into the rising medicine fields by exceeding annual sales of KRW 10 billion, <br>first in history of domestic stem cell medicine.</li>
                </ul>
              </div>
            </div>
            <div>
              <div class="feature-desc">
                <ul>
                  <li>Higher cost than the joint replacement surgery (150-200%)</li>
                  <li>Requiring a surgery which can be burdening to a patient</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature feature-3">
        <div class="feature-define">
          <div class="keyword">TNV</div> CNV injected with medicine -> Enhancing the regenerative effect, and non-operative
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/tnv/en/img_feature_3.jpg">
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/en/w/Header.vue'
import SubHeader from '@/components/en/w/SubHeader.vue'
import PathNav from '@/components/en/w/PathNav.vue'
import Footer from '@/components/en/w/Footer.vue'

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
          .feature-desc {
            ul {
              margin: 0;
              padding: 0;
              list-style: none;
              li {
                position: relative;
                padding-left: pxtovw(30px);
                font-size: pxtovw(18px);
                line-height: pxtovw(24px);
                &:before {
                  position: absolute;
                  left: 0;
                  content: 'ㆍ';
                }
                & + li {
                  margin-top: pxtovw(10px);
                }
              }
            }
          }
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