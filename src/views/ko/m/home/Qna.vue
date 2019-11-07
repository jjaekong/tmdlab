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
</template>

<script>
export default {
    methods: {
        sendMail: function() {
            var title = document.getElementById('qna-title').value
            window.open('mailto:Ask@tmdlab.co.kr?subject='+ encodeURIComponent(title) )
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
    height: pxtovw2(134px);
    background: rgba(#000, .6);
    a {
        display: flex;
        align-items: center;
        font-size: pxtovw2(20px);
        line-height: pxtovw2(42px);
        color: #9b9b9b;
        text-decoration: none;
        address {
            margin-bottom: 0;
        }
        img {
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