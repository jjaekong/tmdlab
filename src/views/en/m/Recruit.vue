<template>
    <div class="mobile qna">
        <Header />
        <section class="overview">
            <h3>Recruit</h3>
            <h4>
                We look forward to your appilication<br>
                to make the future of TMD LAB
            </h4>
        </section>
        <section class="steps">
            <div class="container">
                <h4 class="section-title">Process</h4>
                <div>
                    <img class="img-fluid d-block mx-auto" src="@/assets/img/m/img_recruit_steps_en.jpg">
                </div>
            </div>
        </section>
        <section class="apply">
            <div class="container">
                <h4 class="section-title">Appilication</h4>
                <p>
                    We look forward to your appilication<br>
                    to make the future of TMD LAB,<br>
                    under the core value of contributing<br>
                    to the healthy life of mankind.
                </p>
                <a href="mailto: ask@tmdlab.com">ask@tmdlab.com</a>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/en/m/Header.vue'
import Footer from '@/components/en/m/Footer.vue'

export default {
    components: {
        Header, Footer
    },
    data: function() {
      return {
      }
  },
    methods: {
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
        background-image: url(../../../assets/img/m/bg_recruit.jpg);
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
    }
    section {
        padding-left: pxtovw2(40px); 
        padding-right: pxtovw2(40px);
        .section-title {
            font-size: pxtovw2(54px);
            color: #383838;
            font-weight: bold;
        }
        &.steps {
            padding-top: pxtovw2(80px);
            padding-bottom: pxtovw2(80px);
            background: #f0f0f0;
            .section-title {
                margin-bottom: pxtovw2(75px);
            }
            img {
                width: pxtovw2(248px);
            }
        }
        &.apply {
            padding-top: pxtovw2(60px);
            padding-bottom: pxtovw2(70px);
            .section-title {
                margin-bottom: pxtovw2(40px);
            }
            p {
                color: #383838;
                font-size: pxtovw2(24px);
                line-height: pxtovw2(42px);
                font-weight: bold;
                margin-bottom: pxtovw2(45px);
            }
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                height: pxtovw2(75px);
                background: #7b7b7b;
                color: white;
                font-size: pxtovw2(22px);
                text-decoration: none;
            }
        }
    }
}
</style>