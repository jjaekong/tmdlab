<template>
  <div class="web product innoself-b">
    <Header />
    <SubHeader :title="'Products'" />
    <PathNav :path="['Products', 'Shape memory polymer', 'Bile duct stent']"/>
    <main id="main">
      <div class="product-title">
        <span class="category">Shape memory</span>
        <h3 class="title">Bile duct stent</h3>
        <span class="brand">Innoself&trade; B</span>
      </div>
      <div class="feature feature-1">
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/smp-b/en/img_feature_1.jpg">
          </div>
          <div class="feature-row">
            <div>
              <div class="feature-desc float-right">
                <h4>Biliary obstruction</h4>
                <p>
                  Disease which part of or whole biliary duct is closed due to a gallstone or a tumor, causing severe jaundice
                </p>
              </div>
            </div>
            <div>
              <div class="feature-desc">
                <h4>Biliary duct stent insertion</h4>
                <p>
                  Treatment of: approaching to the biliary duct through skin or liver parenchyma, and inserting the plastic or metal stent to the narrowed duct, so that the bile is secreted to the intestine as a normal path
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-define">
          <div class="keyword">Issue</div>
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <ul>
              <li><img src="@/assets/img/ico_check_circle.png"> Perforation caused by stent dislocation, high re-stenosis rate</li>
              <li><img src="@/assets/img/ico_check_circle.png"> Plastic stent: Shorter lifespan to the metal stent, required to be replaced after 3 months of<br>insertion (replacement rate is up to 45%.)</li>
              <li><img src="@/assets/img/ico_check_circle.png"> Metal stent: Unable to remove after stent closure</li>
            </ul>
          </div>
          <div class="feature-row">
            <img src="@/assets/img/product/smp-b/arrow_down.png">
          </div>
        </div>
      </div>
      <div class="feature feature-3">
        <div class="feature-define">
          <div class="keyword">Effect</div>
        </div>
        <div class="feature-container">
          <div class="feature-row">
            <img class="feature-image" src="@/assets/img/product/smp-b/en/img_feature_2.jpg">
          </div>
          <div class="feature-row">
            <div class="feature-desc">
              <h4><b>Innoself&trade; B</b> effect</h4>
              <ul>
                <li><img src="@/assets/img/ico_check_circle.png"> Reducing the stent dislocation rate<br>due to self-expansion</li>
                <li><img src="@/assets/img/ico_check_circle.png"> Inhibiting biofilm formation</li>
                <li><img src="@/assets/img/ico_check_circle.png"> Reducing inflammation<br>and fibrosis rates</li>
                <li><img src="@/assets/img/ico_check_circle.png"> Reducing the stent occlusion rate</li>
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
    margin-bottom: pxtovw(40px);
  }
  .feature-1 {
    margin-bottom: pxtovw(100px);
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
        font-weight: 600;
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
        top: pxtovw(48px);
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
            font-size: pxtovw(16px);
            line-height: pxtovw(28px);
            text-align: left;
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