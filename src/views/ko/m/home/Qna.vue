<template>
    <div class="slide qna">
        <div class="bg"></div>
        <section>
            <header>
                <h6 class="category">문의</h6>
                <h2 class="title">
                    궁금하신 점을 문의해 주세요
                </h2>
                <h3 class="subtitle">
                    형상기억고분자와 관련된 기술에 대한 문의가<br>
                    있으시다면 언제든 환영합니다. 
                </h3>
            </header>
            <p class="desc">
                티엠디랩의 기술에 대한 여러분의 관심은 언제나 환영합니다.<br>
                자사의 기술에 대한 궁금한점이나 문의하실 내용이<br>
                있으시다면 문의해주시기 바랍니다 
            </p>
            <form class="form-wrap" @submit.prevent="sendMail()">
                <div class="form-row">
                    <div class="col">
                        <div class="form-group">
                            <input type="text" id="qna-title" class="form-control" placeholder="제목">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <button type="submit" class="btn btn-submit btn-block">문의하기</button>
                    </div>
                </div>
            </form>
            <img class="scrolldown" src="@/assets/img/m/ico_arrow_down.png">
        </section>
        <div class="contact">
            <a href="https://goo.gl/maps/MaKMyu3qTYrPLiem7" class="address" target="_blank">
                <address>서울시 성동구 광나루로8길 31, 6층<br>(성수동 2가, 성수에스케이브이원센터2)</address>
                <img src="@/assets/img/ico_google_map.png" alt="지도">
            </a>
            <a href="mailto:ask@tmdlab.com" class="email" target="_blank">
                <span>ask@tmdlab.com</span>
                <img src="@/assets/img/ico_google_mail.png" alt="메일">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        sendMail: function() {
            var title = document.getElementById('qna-title').value
            window.open('mailto:ask@tmdlab.com?subject='+ encodeURIComponent(title) )
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.form-wrap {
    .form-row {
        margin-left: pxtovw2(-10px);
        margin-right: pxtovw2(-10px);
    }
    .col {
        padding-left: pxtovw2(10px);
        padding-right: pxtovw2(10px);
    }
}
.form-group {
    margin-bottom: pxtovw2(20px);
}
.form-control {
    border-radius: 0;
    border: 0;
    box-shadow: none;
    height: pxtovw2(80px);
    background: rgba(#fff, .3);
    color: #fff;
    font-size: pxtovw2(20px);
    padding-left: pxtovw2(25px);
    padding-right: pxtovw2(25px);
    &::placeholder {
        color: #fff;
    }
}
.btn-submit {
    border: 1px solid #fff;
    border-radius: 0;
    height: pxtovw2(80px);
    color: #fff;
    font-size: pxtovw2(20px);
    box-shadow: none;
}
.contact {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: pxtovw2(70px);
    padding-right: pxtovw2(70px);
    // height: pxtovw2(134px);
    height: pxtovw2(250px);
    background: rgba(#000, .6);
    dl {
        margin-bottom: pxtovw2(10px);
        font-size: pxtovw2(20px);
        line-height: pxtovw2(30px);
        dt {
            color: white;
        }
        dd {
            margin-bottom: 0;
        }
    }
    a {
        // display: flex;
        // align-items: center;
        font-size: pxtovw2(20px);
        color: #9b9b9b;
        text-decoration: none;
        address {
            display: inline;
            margin-bottom: 0;
        }
        img {
            position: relative;
            top: pxtovw2(-3px);
            width: pxtovw2(25px) !important;
            margin-left: pxtovw(20px);
        }
    }
    .address {
        img {
            width: pxtovw(102px);
        }
    }
    .email {
        span {
            border-bottom: 1px solid #9b9b9b;
        }
        img {
            width: pxtovw(112px);
        }
    }
}
.scrolldown {
    transform: rotate(180deg);
}
</style>