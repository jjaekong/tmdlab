<template>
  <div class="web promotion">
    <Header />
    <SubHeader :title="'홍보/활동'" />
    <PathNav :path="['홍보/활동', '논문']"/>
    <main id="main">
      <div class="page-title">
        <h3 class="title">티엠디랩의 폭넓고 다양한 뉴스를 확인하세요</h3>
      </div>
      <div class="page-subtitle">
        가장 빠르게 뉴스 및 공지사항을 알려드립니다.
      </div>
      <div class="news-count">
        <div>
          NEW
          <span></span>
          <b>3</b>
        </div>
      </div>
      <div class="news-list">
        <ol>
          <li>
            <router-link class="news-item" to="./journal/3">
              <div class="news-title">
                <h4>Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion</h4>
                <span>게재 정보: Nature Communication (2020.01.30, IF 11.88)</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./journal/2">
              <div class="news-title">
                <h4>Development of a Shape-Memory Tube to Prevent Vascular Stenosis.</h4>
                <span>게재 정보: Advanced Materials (2019.08.27, IF 25.809)</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./journal/1">
              <div class="news-title">
                <h4>Nasolacrimal stent with shape memory as an advanced alternative to silicone products.</h4>
                <span>게재 정보: Nature Communication (2020.01.30, IF 11.88)</span>
              </div>
            </router-link>
          </li>
        </ol>
      </div>
    </main>
    <Footer />
	<router-view />
  </div>
</template>

<script>
import Header from '@/components/ko/w/Header.vue'
import SubHeader from '@/components/ko/w/SubHeader.vue'
import PathNav from '@/components/ko/w/PathNav.vue'
// import PageTitle from '@/components/PageTitle.vue'
import Footer from '@/components/ko/w/Footer.vue'

export default {
  components: {
    Header, SubHeader, PathNav, //PageTitle, 
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.web.promotion {
  .page-title {
    margin-top: pxtovw(120px);
    display: flex;
    justify-content: center;
    align-items: center;
    .category {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: pxtovw(15px);
      padding-right: pxtovw(15px);
      //width: pxtovw(100px);
      height: pxtovw(40px);
      border: 1px solid #c5c5c5;
      border-radius: pxtovw(5px);
      color: #8b8b8b;
      font-size: pxtovw(18px);
      margin-right: pxtovw(20px);
    }
    .title {
      margin: 0;
      font-size: pxtovw(34px);
      line-height: pxtovw(40px);
      color: #222;
      font-weight: 900;
    }
    .brand {
      margin-left: pxtovw(15px);
      font-family: 'MontSerrat', sans-serif;
      font-weight: 900;
      color: #0160a1;
      font-size: pxtovw(20px);
    }
  }
  .page-subtitle {
    margin-top: pxtovw(25px);
    margin-bottom: pxtovw(80px);
    color: #4e4e4e;
    font-size: pxtovw(16px);
    line-height: pxtovw(26px);
    text-align: center;
  }
  .news-count {
    margin: 0 auto pxtovw(10px);
    width: pxtovw(1024px);
    color: #2457ca;
    font-size: pxtovw(12px);
    line-height: pxtovw(34px);
    div {
      display: flex;
      align-items: center;
      span {
        margin-left: pxtovw(10px);
        margin-right: pxtovw(10px);
        width: pxtovw(20px);
        height: 1px;
        background: #000;
      }
      b {
        color: #383838;
        font-size: pxtovw(20px);
      }
    }
  }
  .news-list {
    padding-top: pxtovw(56px);
    padding-bottom: pxtovw(56px);
    background: #f0f0f0;
    ol {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      width: pxtovw(1024px);
      li {
        & + li {
          margin-top: pxtovw(20px);
        }
      }
    }
  }
  .news-item {
    display: flex;
    height: pxtovw(120px);
    background: #fff;
    text-decoration: none;
    img {
      width: pxtovw(243px);
      background: #a1a1a1;
    }
    .news-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: pxtovw(40px);
      h4 {
        margin: 0 0 pxtovw(5px) 0;
        font-size: pxtovw(20px);
        color: #373737;
        font-weight: normal;
      }
      span {
        font-size: pxtovw(14px);
        color: #a1a1a1;
      }
    }
  }
	}
</style>