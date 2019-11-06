<template>
  <div class="web product smp-l">
    <Header />
    <SubHeader :title="'제품'" />
    <PathNav :path="['제품', '형상기억고분자', '누도·누액관 스텐트']"/>
    <main id="main">
      <div class="product-title">
        <div class="category">형상기억</div>
        <h3 class="title">누도·누액관 스텐트</h3>
        <span class="brand">SMP-L<sup>&reg;</sup></span>
      </div>
      <div class="feature feature-1">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">현황</div> 사회적인 문제로까지 지적된 미세먼지의 위협으로, 각종 안구건조, 비루관 폐쇄 등 사람에게 심각한 피해가 급증하고 있습니다
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/img_feature_1.jpg" alt="">
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">치료</div> 비루관의 폐색 부위에 삽입된 후 자가팽창하여 눈물길 개통을 유지
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/img_feature_2.jpg" alt="">
        </div>
      </div>
      <div class="feature feature-3">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">증상</div>
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/img_feature_3.jpg" alt="">
        </div>
      </div>
      <div class="feature feature-4">
        <div class="feature-container">
          <div class="feature-define">
            <div class="keyword">효과</div>
            비루관 폐쇄로 인한 유류증 치료를 위한 스텐트<br>
            비루관의 폐색 부위에 삽입된 후 자가팽창하여 눈물길 개통을 유지<br>
            바이오필름 생성 억제 효과
          </div>
          <img class="feature-image" src="@/assets/img/product/smp-l/img_feature_4.jpg" alt="">
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