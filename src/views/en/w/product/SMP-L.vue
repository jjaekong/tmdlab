<template>
  <div class="web product smp-l">
    <Header />
    <SubHeader :title="'Products'" />
    <PathNav :path="['Products', 'Shape memory polymer', 'Shape memory  Lacrimal duct stent']"/>
    <main id="main">
      <div class="product-title">
        <span class="category">Shape memory</span>
        <h3 class="title">Lacrimal duct stent</h3>
        <span class="brand">SMP-L<sup>&reg;</sup></span>
      </div>
      <div class="feature feature-1">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">Current<br>condition</div> Threat of micro-dust, pointed out to be a significant social issue also, has much more people afflicted by it which includes dry eyes, nasolacrimal duct atresia.
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/en/img_feature_1.jpg" alt="">
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">Treatment</div> Maintaining the lacrimal duct diameter by self-expansion, after being inserted into the point of nasolacrimal duct obstruction
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/en/img_feature_2.jpg" alt="">
        </div>
      </div>
      <div class="feature feature-3">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">Symptom</div>
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/en/img_feature_3.jpg" alt="">
        </div>
      </div>
      <div class="feature feature-4">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">Effect</div>
            Stent for lacrimation treatment due to nasolacrimal duct obstruction<br>
            Maintaining the lacrimal duct diameter by self-expansion, after being inserted into the point of nasolacrimal duct occlusion<br>
            Inhibition effect against biofilm formation
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/en/img_feature_4.jpg" alt="">
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
  .feature-container {
    margin: 0 auto;
    width: pxtovw(1540px);
  }
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
  .feature-1 {
    margin-bottom: pxtovw(150px);
    .feature-define {
      margin-bottom: pxtovw(40px);
    }
    .feature-image {
      display: block;
      margin: 0 auto;
      width: pxtovw(1440px);
    }
  }
  .feature-2 {
    margin-bottom: pxtovw(240px);
    .feature-define {
      margin-bottom: pxtovw(40px);
    }
    .feature-image {
      width: 100%;
    }
  }
  .feature-3 {
    margin-bottom: pxtovw(160px);
    padding-top: pxtovw(70px);
    padding-bottom: pxtovw(45px);
    background: #ebebeb;
    .feature-define {
      position: relative;
      .keyword {
        position: absolute;
        top: pxtovw(-118px);
      }
    }
    .feature-image {
      display: block;
      margin: 0 auto;
      width: pxtovw(920px);
    }
  }
  .feature-4 {
    padding-bottom: pxtovw(100px);
    .feature-define {
      margin-bottom: pxtovw(85px);
    }
    .feature-image {
      width: 100%;
    }
  }
}
</style>