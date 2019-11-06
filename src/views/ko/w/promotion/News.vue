<template>
  <div class="web promotion">
    <Header />
    <SubHeader :title="'홍보/활동'" />
    <PathNav :path="['홍보/활동']"/>
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
          <b>4</b>
        </div>
      </div>
      <div class="news-list">
        <ol>
          <li>
            <router-link class="news-item" to="./news/4">
              <img src="@/assets/img/promotion/thumb_news_4.jpg">
              <div class="news-title">
                <h4>2019년 의료기기 CHAMP 교육과정 의료기기 입문 마스터 과정 수료<br>(2019.07.16 ~ 2019.07.18)</h4>
                <span>2019년 7월 16일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/3">
              <img src="@/assets/img/promotion/thumb_news_3.jpg">
              <div class="news-title">
                <h4>2019년 한국조직공학재생의학회 (KTERMS) 학술대회 참여, 포스터 부문 우수상 선정<br>(2019.06.06 ~ 2019.06.08)</h4>
                <span>2019년 6월 6일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/2">
              <img src="@/assets/img/promotion/thumb_news_2.jpg">
              <div class="news-title">
                <h4>연세대학교 산학협력단으로부터 형상기억고분자 통상실시권 획득 (2019.05.21)</h4>
                <span>2019년 5월 21일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/1">
              <img src="@/assets/img/promotion/thumb_news_1.jpg">
              <div class="news-title">
                <h4>형상기억고분자를 이용한 스텐트 관련 특허 2건 출원 (2018.12.19) </h4>
                <span>2018년 12월 19일</span>
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