<template>
  <div class="web promotion">
    <Header />
    <SubHeader :title="'홍보/활동'" />
    <PathNav :path="['홍보/활동', '뉴스']"/>
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
          <b>10</b>
        </div>
      </div>
      <div class="news-list">
        <ol>
          <li>
            <router-link class="news-item" to="./news/10">
              <div class="news-title">
                <h4>혈관 신생 유도 3차원 마이크로 채널 네트워크 논문, 국제 학술지 (Nature Communication, IF 12.8) 게재</h4>
                <span>2020년 1월 30일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/9">
              <img src="@/assets/img/promotion/thumb_news_9.jpg">
              <div class="news-title">
                <h4>[바이오스펙테이터] 티엠디랩, '형상기억 고분자'로 新스텐트 개발 도전 (19.12.17)</h4>
                <span>2019년 12월 17일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/8">
              <img src="@/assets/img/promotion/thumb_news_8.jpg">
              <div class="news-title">
                <h4>중소벤처기업부에서 주관하는 창업성장기술개발사업 ‘혁신형 창업과제’ 선정</h4>
                <span>2019년 11월 25일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/7">
              <img src="@/assets/img/promotion/thumb_news_7.jpg">
              <div class="news-title">
                <h4>[한국경제] 체온으로 몸 막힌 곳 뚫는 스텐트 신소재 나온다 (19.11.20)</h4>
                <span>2019년 11월 20일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/6">
              <img src="@/assets/img/promotion/thumb_news_6.jpg">
              <div class="news-title">
                <h4>형상 기억 고분자 기반 누관 스텐트 논문 국제 학술지 (Acta Biomaterilia, IF 6.638) 게재</h4>
                <span>2019년 11월 7일</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="news-item" to="./news/5">
              <img src="@/assets/img/promotion/thumb_news_5.jpg">
              <div class="news-title">
                <h4>형상 기억 고분자 기반 혈관 문합기 논문 국제 학술지 (Advanced Materials, IF 25.809) 게재</h4>
                <span>2019년 8월 27일</span>
              </div>
            </router-link>
          </li>
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