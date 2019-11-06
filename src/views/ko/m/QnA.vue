<template>
    <div class="mobile qna">
        <Header />
        <section class="overview">
            <h3>문의</h3>
            <h4>티엠티랩에 궁금하신<br>사항이 있으신가요?</h4>
            <ul>
                <li><img src="@/assets/img/ico_map.png"><address>서울시 서대문구 연세로 50-1 에비슨의생명연구센터 518호</address></li>
                <li><img src="@/assets/img/ico_phone.png"><a href="tel:+82-2-2228-0891" target="_blank">02-2228-0891</a></li>
                <li><img src="@/assets/img/ico_mail.png"><a href="mailto:Ask@tmdlab.co.kr" target="_blank">Ask@tmdlab.co.kr</a></li>
            </ul>
        </section>
        <section class="map">
            <a href="https://goo.gl/maps/KVNxgy8AKSheu58KA" target="_blank">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.655822442962!2d126.93947821566223!3d37.56317193207778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99388121e701%3A0x97e3f4a2ab89981f!2z7Jew7IS47J2Y66OM7JuQQUJNUkM!5e0!3m2!1sko!2skr!4v1565324551258!5m2!1sko!2skr" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
            </a>
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
    methods: {
        sendMail: function() {
          var title = document.getElementById('qna-title').value
          window.open('mailto:Ask@tmdlab.co.kr?subject='+ encodeURIComponent(title))
      }
    }
}
</script>

<style lang="scss" scoped>
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