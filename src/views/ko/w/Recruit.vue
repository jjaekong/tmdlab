<template>
    <div class="web recruit">
        <Header />
        <SubHeader :title="'채용'" />
        <PathNav :path="['문의', '채용']" />
        <main id="main">
            <section class="steps">
                <h4 class="section-title">채용절차</h4>
                <div class="container-fluid">
                    <img class="img-fluid d-block mx-auto" src="@/assets/img/img_recruit_steps.jpg">
                </div>
            </section>
            <section class="apply">
                <h4 class="section-title">입사지원</h4>
                <div class="container-fluid">
                    <div class="box">
                        <div class="cover">
                            <hr>
                            <p>
                                인류의 건강한 삶에 공헌한다는 핵심가치 아래<br>
                                TMD LAB의 미래를 만들어갈 <br>
                                당신의 지원을 기다립니다.
                            </p>
                            <a href="mailto: ask@tmdlab.com">ask@tmdlab.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/ko/w/Header.vue'
    import SubHeader from '@/components/ko/w/SubHeader.vue'
    import PathNav from '@/components/ko/w/PathNav.vue'
    import Footer from '@/components/ko/w/Footer.vue'

    export default {
        components: {
            Header,
            SubHeader,
            PathNav,
            Footer
        },
        data: function () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/css/functions.scss";

    .web.recruit {
        .steps {
            padding-top: pxtovw(165px);
            padding-bottom: pxtovw(145px);
            .section-title {
                margin-bottom: pxtovw(50px);
            }
        }
        .apply {
            padding-top: pxtovw(95px);
            padding-bottom: pxtovw(235px);
            background: #f7f7f7;
            .section-title {
                margin-bottom: pxtovw(50px);
            }
            .box {
                width: pxtovw(1400px);
                height: pxtovw(425px);
                margin: 0 auto;
                background-image: url(../../../assets/img/bg_recruit_apply.jpg);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                .cover {
                    float: right;
                    padding-left: pxtovw(70px);
                    padding-top: pxtovw(65px);
                    width: pxtovw(630px);
                    height: 100%;
                    background-color: rgba(34, 34, 34, .7);
                    color: white;
                    hr {
                        width: pxtovw(24px);
                        height: 1px;
                        border-color: white;
                        margin-left: 0;
                        margin-bottom: pxtovw(50px);
                    }
                    p {
                        margin-bottom: pxtovw(25px);
                        font-size: pxtovw(24px);
                        line-height: pxtovw(42px);
                        font-weight: bold;
                    }
                    a {
                        display: block;
                        width: pxtovw(251px);
                        height: pxtovw(58px);
                        border: 1px solid white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: pxtovw(18px);
                        font-family: 'Montserrat', sans-serif;
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>