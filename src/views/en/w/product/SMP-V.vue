<template>
  <div class="web product smp-v">
    <Header />
    <SubHeader :title="'Products'" />
    <PathNav :path="['Products', 'Shape memory polymer', 'Shape memory Blood vessel external wrapping stent']"/>
    <main id="main">
      <div class="product-title">
        <span class="category">Shape memory</span>
        <h3 class="title">Blood vessel external wrapping stent</h3>
        <span class="brand">SMP-V<sup>&reg;</sup></span>
      </div>
      <div class="feature feature-1">
        <div class="feature-container">
          <div class="feature-row">
            <div>
              <img class="feature-image float-right" src="@/assets/img/product/smp-v/img_feature_1.jpg" alt="">
            </div>
            <div>
              <img class="feature-image" src="@/assets/img/product/smp-v/en/img_feature_2.jpg" alt="">
            </div>
          </div>
          <div class="feature-row">
            <div>
              <div class="feature-desc float-right">
                <h4>Coronary artery bypass surgery</h4>
                <p>
                  Surgery which creates a bypass for bloodstream<br>
                  provided to the heart, by connecting a duct<br>
                  (a radial artery near the wrist, or a saphenous vein in the leg)<br>
                  as an alternative to the narrow coronary artery
                </p>
                <div class="side-effect">
                  <h5>Side effect/aftereffect</h5>
                  <p>
                    2-5% death rate, bleeding after surgery<br>
                    Artery or vein ducts which had<br>
                    the surgery may have occlusion<br>
                    in a long term.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="feature-desc">
                <h4>Arteriovenous fistula surgery</h4>
                <p>
                  Shunt surgery of connecting an artery and a vein near the skin,<br>
                  for a patient with chronic renal insufficiency under frequent hemodialysis treatments,
                  so that the vein is expanded to have sufficient amount of blood flow, and is strengthened like the artery
                </p>
                <div class="side-effect">
                  <h5>Side effect/aftereffect</h5>
                  <p>
                    Edema due to pressure difference between<br>
                    the connected blood vessels,<br>
                    Reoperation required when the vessel is<br>
                    not thickened enough for hemodialysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-define">
          <div class="keyword">Evaluation</div>
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <div>
              <img class="feature-image float-right" src="@/assets/img/product/smp-v/img_feature_3.jpg" alt="">
            </div>
            <div>
              <img class="feature-image" src="@/assets/img/product/smp-v/img_feature_4.jpg" alt="">
              <div class="feature-desc">
                <h4>SMP-V<sup>&reg;</sup></h4>
                <ul>
                  <li><img src="@/assets/img/ico_check_circle.png"> Preventing stenosis by external wrapping the blood vessel</li>
                  <li><img src="@/assets/img/ico_check_circle.png"> Preventing edema due to blood pressure difference between the artery and the vein</li>
                  <li><img src="@/assets/img/ico_check_circle.png"> Lowering blood clot formation by<br>preventing the bloodstream difference</li>
                  <li><img src="@/assets/img/ico_check_circle.png"> Enhancing the treatment effect by<br>inducing vasa vasorum formation</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="feature-row">
            <div>
              <div class="feature-desc float-right">
                External wrapping the blood vessel at Tm temperature, by returning its SMP-V<sup>&reg;</sup> prototype shape
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
    > div {
      flex: 1;
    }
  }
  .feature-1 {
    margin-bottom: pxtovw(250px);
    .feature-image {
      height: pxtovw(497px);
    }
    .feature-row:nth-of-type(1) {
      > div:nth-of-type(1) {
        background: #dedfe1;
      }
      > div:nth-of-type(2) {
        background: #f9f9f9;
      }
    }
    .feature-desc {
      margin-top: pxtovw(30px);
      width: pxtovw(610px);
      text-align: center;
      > h4 {
        margin-bottom: pxtovw(15px);
        font-size: pxtovw(22px);
        line-height: pxtovw(34px);
        color: #383838;
        font-weight: 600;
      }
      > p {
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
        top: pxtovw(-48px);
      }
    }
    .feature-row:nth-of-type(1) {
      > div {
        height: pxtovw(497px);
      }
      > div:nth-of-type(1) {
        background: #dedfe1;
        .feature-image {
          height: pxtovw(543px);
        }
      }
      > div:nth-of-type(2) {
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
              font-size: pxtovw(16px);
              line-height: pxtovw(28px);
              img {
                margin-right: pxtovw(15px);
                width: pxtovw(43px);
                height: pxtovw(43px);
              }
              & + li {
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