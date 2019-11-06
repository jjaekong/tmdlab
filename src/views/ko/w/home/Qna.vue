<template>
    <div class="slide qna">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col-6">
                    <section class="d-flex align-items-start">
                        <h6 class="category ml-1">문의</h6>
                        <div class="title-area">
                            <header>
                                <h2 class="title">
                                    <span>궁금하신 점을 문의해주세요</span>
                                </h2>
                                <h3 class="subtitle">
                                    형상기억고분자와 관련된 기술에 대한 문의가 <br>
                                    있으시다면 언제든 환영합니다.
                                </h3>
                            </header>
                            <p class="desc ml-1">
                                티엠디랩의 기술에 대한 여러분의 관심은 언제나 환영합니다.<br>
                                자사의기술의 대한 궁금한점이나 문의하실 내용이 <br>
                                있으시다면 문의해주시기 바랍니다 
                            </p>
                            <div class="contact">
                                <a href="https://goo.gl/maps/sd8gCGraHV6Pj7gA6" class="address" target="_blank">
                                    <address>서울특별시 서대문구 연세로 50-1 에비슨의생명연구센터 525호</address>
                                    <img src="@/assets/img/ico_google_map.png" alt="지도">
                                </a>
                                <a href="mailto:Ask@tmdlab.co.kr" class="email" target="_blank">
                                    <span>Ask@tmdlab.co.kr</span>
                                    <img src="@/assets/img/ico_google_mail.png" alt="메일">
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-6">
                    <section class="form-area">
                        <!-- <a href="#" class="more">더보기<span class="box"><span></span></span></a> -->
                        <router-link class="more" to="/w/ko/qna">더보기<span class="box"><span></span></span></router-link>
                        <form class="qna-form" @submit.prevent="sendMail()">
                            <div class="form-row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="qna-title">제목</label>
                                        <input id="qna-title" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="form-row">
                                <div class="col col-7">
                                    <div class="form-group">
                                        <label for="qna-mail">메일</label>
                                        <input id="qna-mail" type="email" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col col-5">
                                    <div class="form-group">
                                        <label for="qna-name">이름</label>
                                        <input id="qna-name" type="text" class="form-control" required>
                                    </div>
                                </div>
                            </div> -->
                            <div class="form-row">
                                <div class="col">
                                    <button class="btn btn-qna" type="submit">문의하기</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    methods: {
        sendMail: function() {
            var title = $('#qna-title').val()
            window.open('mailto:Ask@tmdlab.co.kr?subject='+ encodeURIComponent(title) )
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.category {
    margin-right: pxtovw(40px) !important;
    margin-bottom: 0 !important;
    margin-top: pxtovw(15px) !important;
}
.contact {
    display: flex;
    flex-direction: column;
    margin-top: pxtovw(50px);
    a {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        font-size: pxtovw(16px);
        img {
            margin-left: pxtovw(30px);
        }
        & + a {
            margin-top: pxtovw(5px);
        }
    }
    address {
        margin-bottom: 0;
        font-weight: 900;
    }
    .email {
        span {
            padding-bottom: pxtovw(5px);
            border-bottom: 1px solid #fff;
        }
    }
}
.form-area {
    position: relative;
    // display: flex;
    // float: right;
    // flex-direction: column;
    // align-items: flex-end;
    .more {
        position: absolute;
        top: pxtovw(-90px);
        right: 0;
    }
}
.qna-form {
    float: right;
    width: pxtovw(590px);
    .form-row {
        margin-left: pxtovw(-10px);
        margin-right: pxtovw(-10px);
        .col {
            padding-left: pxtovw(10px);
            padding-right: pxtovw(10px);
        }
    }
    .form-group {
        display: flex;
        margin-bottom: pxtovw(20px);
        padding-top: pxtovw(12px);
        padding-bottom: pxtovw(12px);
        background: rgba(#fff, .3);
    }
    label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
        width: pxtovw(80px);
        height: pxtovw(37px);
        font-size: pxtovw(16px);
        border-right: 1px solid #fff;
    }
    .form-control {
        padding: 0 pxtovw(20px);
        flex: 1;
        box-shadow: none; 
        border: 0;
        border-radius: 0;
        background: transparent;
        color: #fff;
        font-size: pxtovw(18px);
        height: pxtovw(37px);
        line-height: pxtovw(37px);
        font-weight: bold;
    }
    .btn-qna {
        // margin-top: pxtovw(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        height: pxtovw(66px);
        padding: 0;
        border-radius: 0;
        width: 100%;
        border: 1px solid #fff;
        color: #fff;
        font-size: pxtovw(18px);
        box-shadow: none;
    }
}
</style>