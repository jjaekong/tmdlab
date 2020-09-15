<template>
    <div class="mobile qna">
        <Header />
        <section class="overview">
            <h3>문의</h3>
            <h4>티엠티랩에 궁금하신<br>사항이 있으신가요?</h4>
            <ul>
                <li class="address" @click="viewMap('company')"><img src="@/assets/img/ico_map.png"><address>본사 - 서울시 성동구 광나루로8길 31, 6층<br>(성수동 2가, 성수에스케이브이원센터2)</address></li>
                <li class="address" @click="viewMap('lab')"><img src="@/assets/img/ico_map.png"><address>연구소 - 서울시 서대문구 연세로 50-1, 에비슨의생명연구센터 525호</address></li>
                <li><img src="@/assets/img/ico_phone.png"><a href="tel:+82-2-6216-0080" target="_blank">02-6216-0080</a></li>
                <li><img src="@/assets/img/ico_fax02.png"><a href="fax:+82-2-6216-0088" target="_blank">02-6216-0088</a></li>
                <li><img src="@/assets/img/ico_mail.png"><a href="mailto:Ask@tmdlab.co.kr" target="_blank">Ask@tmdlab.co.kr</a></li>
            </ul>
        </section>
        <section class="map">
            <iframe :src="mapType == 'company' ? companySrc : labSrc" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
        <section class="qna-form">
            <h4>궁금하신점을<br>문의해주세요.</h4>
            <form @submit.prevent="sendMail()">
                <div class="form-group">
                    <input class="form-control" id="qna-title" type="text" placeholder="제목을 입력하세요">
                </div>
                <div class="help-text">
                    <p>※ 티엠디랩의 기술과 제품에 관련된 내용이 아닌 경우 답변이 가지 않을 수 있습니다.</p>
                    <p>※ 문의하시는 내용에 따라  더 빠른 답변을 원하시면 유선번호로 연락부탁드립니다.</p>
                </div>
                <div class="btn-area">
                    <button class="btn btn-block btn-submit" type="submit">문의하기</button>
                </div>
            </form>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/ko/m/Header.vue'
import Footer from '@/components/ko/m/Footer.vue'

export default {
    components: {
        Header, Footer
    },
    data: function() {
      return {
          mapType: 'company',
          companySrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.3366555172747!2d127.0663418!3d37.5471314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4c15cf40031%3A0x6f8fff16de9bda37!2z7ISc7Jq47Yq567OE7IucIOyEseuPmeq1rCDshLHsiJjrj5ky6rCAIDI4MS0xOA!5e0!3m2!1sko!2skr!4v1597905586563!5m2!1sko!2skr',
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

.mobile.qna {
    .overview {
        padding-left: pxtovw2(40px); 
        padding-right: pxtovw2(40px);
        padding-top: pxtovw2(150px);
        padding-bottom: pxtovw2(75px);
        background-image: url(../../../assets/img/m/bg_qna.jpg);
        background-size: cover;
        background-position: 50% 0;
        color: #fff;
        a {
            color: #fff;
            text-decoration: none;
        }
        h3 {
            display: inline-block;
            font-size: pxtovw2(30px);
            line-height: pxtovw2(56px);
            border-bottom: pxtovw2(2px) solid #fff;
            margin-bottom: pxtovw2(60px);
        }
        h4 {
            margin-left: pxtovw2(40px);
            margin-bottom: pxtovw2(25px);
            font-size: pxtovw2(54px);
            line-height: pxtovw2(66px);
            font-weight: bold;
        }
        ul {
            margin: 0 0 0 pxtovw2(40px);
            padding: 0;
            list-style: none;
            font-size: pxtovw2(22px);
            li {
                display: flex;
                align-items: center;
                address {
                    margin: 0;
                    letter-spacing: pxtovw2(-1px);
                }
                img {
                    margin-right: pxtovw2(20px);
                }
                & + li {
                    margin-top: pxtovw2(18px);
                }
                &.address {
                    cursor: pointer;
                }
            }
        }
    }
    .map {
        height: pxtovw2(600px);
        a {
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .qna-form {
        padding-top: pxtovw2(90px);
        padding-bottom: pxtovw2(240px);
        padding-left: pxtovw2(40px);
        padding-right: pxtovw2(40px);
        h4 {
            margin-left: pxtovw2(40px);
            margin-bottom: pxtovw2(80px);
            font-size: pxtovw2(54px);
            line-height: pxtovw2(66px);
            font-weight: 900;
            color: #383838;
        }
        form {
            padding: pxtovw2(40px);
            box-shadow: 0 pxtovw2(5px) pxtovw2(19.95px) pxtovw2(1.05px) rgba(0, 0, 0, 0.1);
        }
        .form-group {
            margin-bottom: pxtovw2(25px);
            &:nth-of-type(2) {
                margin-bottom: pxtovw2(35px);
            }
        }
        .form-control {
            margin-bottom: 0;
            height: pxtovw2(45px) !important;
            padding: 0;
            box-shadow: none;
            border-radius: 0;
            border: 0;
            border-bottom: 1px solid #b7b7b7;
            font-size: pxtovw2(22px);
            line-height: pxtovw2(26px);
            color: #383838;
            &::placeholder {
                font-size: pxtovw2(22px);
                line-height: pxtovw2(26px);
                color: #383838;
            }
        }
        .help-text {
            p {
                margin: 0;
                font-size: pxtovw2(16px);
                line-height: pxtovw2(30px);
                color: #b5b5b5;
            }
        }
        .btn-area {
            margin-top: pxtovw2(55px);
            .btn {
                background: #7b7b7b;
                color: #fff;
                font-size: pxtovw2(22px);
                line-height: pxtovw2(26px);
                border-radius: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: pxtovw2(74px);
                border: 0;
                box-shadow: none;
            }
        }
    }
}
</style>