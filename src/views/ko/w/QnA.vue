<template>
  <div class="web qna">
    <Header />
    <SubHeader :title="'문의'" />
    <PathNav :path="['문의']"/>
    <main id="main">
      <PageTitle>
        <template v-slot:title>티엠디랩에 궁금하신 사항이 있으신가요?</template>
      </PageTitle>
      <div class="contact-info">
        <div>
          <dl>
            <dt><img src="@/assets/img/ico_map.png" alt="주소"></dt>
            <dd><address>서울시 서대문구 연세로 50-1 에비슨의생명연구센터 518호</address></dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt><img src="@/assets/img/ico_phone.png" alt="전화번호"></dt>
            <dd>02-2228-0891</dd>
          </dl>
          <dl>
            <dt><img src="@/assets/img/ico_mail.png" alt="메일"></dt>
            <dd><a href="mailto:Ask@tmdlab.co.kr" target="_blank">Ask@tmdlab.co.kr</a></dd>
          </dl>
        </div>
      </div>
      <div id="map">
        <div class="mail-form">
          <h4>궁금하신 점을 문의해 주세요</h4>
          <form @submit.prevent="sendMail()">
            <div class="form-wrapper">
              <div class="form-group">
                <input type="text" class="form-control" id="qna-title" placeholder="제목을 입력하세요">
              </div>
              <div class="help-text">
                <p>※ 티엠디랩의 기술과 제품에 관련된 내용이 아닌 경우 답변이 가지 않을 수 있습니다.</p>
                <p>※ 문의하시는 내용에 따라  더 빠른 답변을 원하시면 유선번호로 연락부탁드립니다. </p>
              </div>
            </div>
            <div class="btn-area">
              <button type="submit" class="btn btn-link btn-mail">문의하기</button>
            </div>
          </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.655822442962!2d126.93947821566223!3d37.56317193207778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99388121e701%3A0x97e3f4a2ab89981f!2z7Jew7IS47J2Y66OM7JuQQUJNUkM!5e0!3m2!1sko!2skr!4v1565324551258!5m2!1sko!2skr" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </main>
    <Footer />
    
  </div>
</template>

<script>
import Header from '@/components/ko/w/Header.vue'
import SubHeader from '@/components/ko/w/SubHeader.vue'
import PathNav from '@/components/ko/w/PathNav.vue'
import PageTitle from '@/components/ko/w/PageTitle.vue'
import Footer from '@/components/ko/w/Footer.vue'

export default {
  components: {
    Header, SubHeader, PathNav, PageTitle, Footer
  },
  methods: {
      sendMail: function() {
          var title = document.getElementById('qna-title').value
          window.open('mailto:Ask@tmdlab.co.kr?subject='+ encodeURIComponent(title))
      }
  }
}
</script>

<style lang="scss" scoped>
.web.qna {
  .contact-info {
    margin-top: pxtovw(30px);
    > div {
      display: flex;
      width: pxtovw(570px);
      margin: 0 auto;
      dl {
        display: flex;
        align-items: center;
        margin: 0 0 pxtovw(10px) 0;
        padding: 0;
        dt, dd {
          margin: 0;
          padding: 0;
          color: #4e4e4e;
        }
        dt {
          margin-right: pxtovw(15px);
          img {
            width: pxtovw(28px);
            height: pxtovw(28px);
          }
        }
        dd {
          font-size: pxtovw(16px);
          line-height: pxtovw(26px);
        }
        & + dl {
          margin-left: pxtovw(20px);
        }
      }
      address {
        margin: 0;
      }
      a {
        color: #4e4e4e;
      }
    }
  }
  .map-area {
    margin-top: pxtovw(30px);
    height: pxtovw(840px);
    background: #f1f1f1;
  }
  #map {
    position: relative;
    margin-top: pxtovw(30px);
    height: pxtovw(840px);
    iframe {
      height: 100%;
    }
    .mail-form {
      position: absolute;
      top: pxtovw(20px);
      right: pxtovw(20px);
      width: pxtovw(700px);
      height: pxtovw(250px);
      padding-top: pxtovw(40px);
      padding-left: pxtovw(30px);
      padding-right: pxtovw(50px);
      background: #fff;
      h4 {
        margin-bottom: pxtovw(30px);
        font-size: pxtovw(24px);
        line-height: pxtovw(26px);
        color: #383838;
        font-weight: 900;
      }
      form {
        display: flex;
        .form-wrapper {
          width: pxtovw(470px);
          .form-group {
            margin: 0;
            .form-control {
              width: pxtovw(370px);
              height: pxtovw(40px);
              padding: 0;
              box-shadow: none;
              border: 0;
              border-radius: 0;
              border-bottom: 1px solid #b7b7b7;
              font-size: pxtovw(16px);
              line-height: pxtovw(26px);
              &::placeholder {
                color: #b5b5b5;
              }
            }
          }
        }
        .btn-area {
          width: pxtovw(150px);
          .btn {
            border: 0;
            padding: 0;
            border-radius: 0;
            background: #7b7b7b;
            color: #fff;
            height: pxtovw(105px);
            width: pxtovw(150px);
            font-size: pxtovw(16px);
            line-height: pxtovw(26px);
            text-decoration: none;
            &:hover, &:focus {
              background: #383838;
            }
          }
        }
        .help-text {
          margin-top: pxtovw(25px);
          p {
            margin-bottom: 0;
            color: #b5b5b5;
            font-size: pxtovw(12px);
            line-height: pxtovw(20px);
          }
        }
      }
    }
  }
}
</style>