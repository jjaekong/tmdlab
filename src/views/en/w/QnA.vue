<template>
  <div class="web qna">
    <Header />
    <SubHeader :title="'Contact'" />
    <PathNav :path="['Contact']"/>
    <main id="main">
      <PageTitle>
        <template v-slot:title>Do you have any question about TMD LAB?</template>
      </PageTitle>
      <div class="contact-info">
        <div>
          <dl @click="viewMap('company')" class="address">
            <dt><img src="@/assets/img/ico_map.png" alt="주소"></dt>
            <dd><address>HEAD OFFICE - 31, Gwangnaru-ro 8-gil, Seongdong-gu, Seoul, 04799 Republic of Korea</address></dd>
          </dl>
        </div>
        <div>
          <dl @click="viewMap('lab')" class="address">
            <dt><img src="@/assets/img/ico_map.png" alt="주소"></dt>
            <dd><address>LABORATORY - Avison Biomedical Research Center #525, 50-1, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</address></dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt><img src="@/assets/img/ico_phone.png" alt="전화번호"></dt>
            <dd>+82-2-6216-0080</dd>
          </dl>
          <dl>
            <dt><img src="@/assets/img/ico_fax02.png" alt="팩스"></dt>
            <dd>+82-2-6216-0088</dd>
          </dl>
          <dl>
            <dt><img src="@/assets/img/ico_mail.png" alt="메일"></dt>
            <dd><a href="mailto:Ask@tmdlab.co.kr" target="_blank">Ask@tmdlab.co.kr</a></dd>
          </dl>
        </div>
      </div>
      <div id="map">
        <div class="mail-form">
          <h4>Please contact us with any questions.</h4>
          <form @submit.prevent="sendMail()">
            <div class="form-wrapper">
              <div class="form-group">
                <input type="text" class="form-control" id="qna-title" placeholder="Please enter a subject.">
              </div>
              <div class="help-text">
                <p><span>※</span>If the content is not related to TMD LAB’s technology or products, the answer may not <br>be answered.</p>
                <p><span>※</span>Please contact us by the phone if you need a faster response.</p>
              </div>
            </div>
            <div class="btn-area">
              <button type="submit" class="btn btn-link btn-mail">Inquiry</button>
            </div>
          </form>
        </div>
        <iframe :src="mapType == 'company' ? companySrc : labSrc" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </main>
    <Footer />
    
  </div>
</template>

<script>
import Header from '@/components/en/w/Header.vue'
import SubHeader from '@/components/en/w/SubHeader.vue'
import PathNav from '@/components/en/w/PathNav.vue'
import PageTitle from '@/components/en/w/PageTitle.vue'
import Footer from '@/components/en/w/Footer.vue'

export default {
  components: {
    Header, SubHeader, PathNav, PageTitle, Footer
  },
  data: function() {
      return {
          mapType: 'company',
          companySrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.3806628349553!2d127.06060651531102!3d37.54609437980178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4c06a653cad%3A0x750e43561ca7fcf9!2zU0vthZTroIjsvaQg7ISx7IiY7IKs7Jil!5e0!3m2!1sko!2skr!4v1597714660356!5m2!1sko!2skr',
          labSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.655822442962!2d126.93947821566223!3d37.56317193207778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99388121e701%3A0x97e3f4a2ab89981f!2z7Jew7IS47J2Y66OM7JuQQUJNUkM!5e0!3m2!1sko!2skr!4v1565324551258!5m2!1sko!2skr',
      }
  },
  methods: {
      sendMail: function() {
          var title = document.getElementById('qna-title').value
          window.open('mailto:Ask@tmdlab.co.kr?subject='+ encodeURIComponent(title))
      },
      viewMap: function(type) {
          this.mapType = type
      }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.web.qna {
  .contact-info {
    margin-top: pxtovw(30px);
    > div {
      display: flex;
      width: pxtovw(730px);
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
        &.address {
            cursor: pointer;
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
            position: relative;
            padding-left: pxtovw(15px);
            margin-bottom: 0;
            color: #b5b5b5;
            font-size: pxtovw(12px);
            line-height: pxtovw(20px);
            span {
              position: absolute;
              left: 0;
            }
          }
        }
      }
    }
  }
}
</style>