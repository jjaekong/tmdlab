<template>
    <div class="slide qna">
        <div class="bg"></div>
        <section>
            <header>
                <h6 class="category">Contact</h6>
                <h2 class="title">
                    Please contact us with any questions.
                </h2>
                <h3 class="subtitle">
                    If you have any questions about technology related to shape memory polymers, we are always welcome.
                </h3>
            </header>
            <p class="desc">
                To learn more about TMD LAB products and industry news, sign up below:
            </p>
            <form class="form-wrap" @submit.prevent="sendMail()">
                <div class="form-row">
                    <div class="col">
                        <div class="form-group">
                            <input type="text" id="qna-title" class="form-control" placeholder="Title">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <button type="submit" class="btn btn-submit btn-block">I want to learn more !</button>
                    </div>
                </div>
            </form>
            <img class="scrolldown" src="@/assets/img/m/ico_arrow_down.png">
        </section>
        <div class="contact">
            <a href="https://goo.gl/maps/MaKMyu3qTYrPLiem7" class="address" target="_blank">
                <address>31, Gwangnaru-ro 8-gil, Seongdong-gu, Seoul, 04799 Republic of Korea</address>
                <img src="@/assets/img/ico_google_map.png" alt="Map">
            </a>
            <a href="mailto:ask@tmdlab.com" class="email" target="_blank">
                <span>ask@tmdlab.com</span>
                <img src="@/assets/img/ico_google_mail.png" alt="Mail">
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
.slide.qna {
    section {
        padding-bottom: pxtovw2(10px) !important;
    }
}
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
    // height: pxtovw2(195px);
    height: pxtovw2(300px);
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
        // line-height: pxtovw2(42px);
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
        & + a {
            margin-top: pxtovw(35px);
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