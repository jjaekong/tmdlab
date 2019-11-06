<template>
    <div id="app" :class="$route.path.split('/')[2]">
        <router-view/>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    beforeCreate: function() {
        if (this.$route.fullPath.indexOf('/en/') > -1) {
            this.$store.commit('changeLang', 'en')   
        } else if (this.$route.fullPath.indexOf('/ko/') > -1) {
            this.$store.commit('changeLang', 'ko')   
        }
    }
}
</script>

<style lang="scss">
@import "./src/assets/css/functions.scss";
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,700&display=swap');

html, body {
    position: relative;
    height: 100%;
}
body {
    // overflow: hidden;
    margin: 0;
    padding: 0;
}

#app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    &.ko {
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: pxtovw(-1px);
        .web {
            &.product {
                .keyword {
                    position: relative;
                    width: pxtovw(96px);
                    height: pxtovw(96px);
                    border-radius: 50%;
                    background: #f1f1f1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: pxtovw(18px);
                    color: #878787;
                    &:after {
                        content: ' ';
                        width: pxtovw(8px);
                        height: pxtovw(8px);
                        border-radius: 50%;
                        background: #0072bc;
                        position: absolute;
                        top: pxtovw(18px);
                        right: pxtovw(5px);
                    }
                }
            }
        }
    }
    &.en {
        font-family: 'MontSerrat', sans-serif;
        font-weight: 300;
        letter-spacing: pxtovw(-1px);
        .web {
            .product-title {
                .category {
                    font-family: 'Noto Sans KR', sans-serif;
                }
            }
            &.product {
                .keyword {
                    position: relative;
                    width: pxtovw(96px);
                    height: pxtovw(96px);
                    border-radius: 50%;
                    background: #f1f1f1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: pxtovw(14px);
                    color: #878787;
                    text-align: center;
                    &:after {
                        content: ' ';
                        width: pxtovw(8px);
                        height: pxtovw(8px);
                        border-radius: 50%;
                        background: #0072bc;
                        position: absolute;
                        top: pxtovw(18px);
                        right: pxtovw(5px);
                    }
                }
            }
        }
    }
    .web {
        .section-title {
            text-align: center;
            font-size: pxtovw(34px);
            line-height: pxtovw(66px);
            color: #383838;
            font-weight: bold;
        }
        .product-title {
            margin-top: pxtovw(120px);
            display: flex;
            justify-content: center;
            align-items: center;
            .category {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: pxtovw(15px);
                padding-right: pxtovw(15px);
                //width: pxtovw(100px);
                height: pxtovw(40px);
                border: 1px solid #c5c5c5;
                border-radius: pxtovw(5px);
                color: #8b8b8b;
                font-size: pxtovw(18px);
                margin-right: pxtovw(20px);
            }
            .title {
                margin: 0;
                font-size: pxtovw(34px);
                line-height: pxtovw(40px);
                color: #222;
                font-weight: 900;
            }
            .brand {
                margin-left: pxtovw(15px);
                font-family: 'MontSerrat', sans-serif;
                font-weight: 900;
                color: #0160a1;
                font-size: pxtovw(20px);
            }
        }
        &.promotion {
            .news-view {
                .modal-dialog {
                    margin: 0;
                    max-width: none;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(#000, .6);
                }
                .modal-content {
                    width: pxtovw(870px);
                    border: 0;
                    border-radius: 0;
                }
                .modal-header {
                    flex-direction: column;
                    justify-content: flex-start;
                    padding-top: pxtovw(20px);
                    padding-left: pxtovw(40px);
                    padding-right: pxtovw(40px);
                    height: pxtovw(110px);
                    border-bottom: 0;
                    background: #fff;
                    .btn-back {
                        display: flex;
                        width: pxtovw(26px);
                        height: pxtovw(33px);
                        align-items: center;
                        margin-bottom: pxtovw(20px);
                        img {
                            width: 100%;
                        }
                    }
                    h4 {
                        margin-bottom: 0;
                        font-size: pxtovw(20px);
                        line-height: pxtovw(34px);
                        color: #373737;
                        font-weight: normal;
                    }
                    span {
                        font-size: pxtovw(14px);
                        line-height: pxtovw(26px);
                        color: #a1a1a1;
                    }
                }
                .modal-body {
                // padding: pxtovw(30px) pxtovw(40px);
                    padding: 0;
                    background: #fff;
                    .news-image {
                        display: block;
                        width: 100%;
                    }
                    .news-body {
                        padding: pxtovw(20px) pxtovw(40px);
                        font-size: pxtovw(16px);
                        line-height: pxtovw(26px);
                        color: #4e4e4e;
                        min-height: pxtovw(220px);
                    }
                }
                .modal-footer {
                    border: 0;
                    padding: 0;
                    border-radius: 0;
                    justify-content: center;
                    .btn {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: pxtovw(870px);
                        padding: 0;
                        border: 0;
                        border-radius: 0;
                        background: #e5e5e5;
                        box-shadow: none;
                        height: pxtovw(50px);
                        font-size: pxtovw(16px);
                        color: #999999;
                    }
                }
                .news-body {
                    color: #4e4e4e;
                    font-size: pxtovw(16px);
                    line-height: pxtovw(26px);
                    img {
                        width: 100%;
                    }
                    p {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
    .mobile {
        .keyword {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: pxtovw2(120px);
            height: pxtovw2(120px);
            border-radius: 50%;
            background: #f1f1f1;
            color: #383838;
            font-size: pxtovw2(16px);
            text-align: center;
            &:after {
                position: absolute;
                top: pxtovw2(20px);
                right: pxtovw2(8px);
                content: ' ';
                width: pxtovw2(8px);
                height: pxtovw2(8px);
                border-radius: 50%;
                background: #0072bc;
            }
        }
        .feature-define {
            display: flex;
            align-items: center;
            color: #383838;
            .keyword {
                margin-right: pxtovw2(30px);
            }
            .desc {
                max-width: pxtovw2(490px);
                font-size: pxtovw2(22px);
                line-height: pxtovw2(34px);
                ul {
                    max-width: pxtovw2(490px);
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        position: relative;
                        padding-left: pxtovw2(20px);
                        &:before {
                            position: absolute;
                            left: 0;
                            top: pxtovw2(14px);
                            content: ' ';
                            width: pxtovw2(6px);
                            height: pxtovw2(6px);
                            border-radius: 50%;
                            background: #383838;
                        }
                    }
                }
            }
        }
        .feature-figure {
            margin-left: pxtovw2(-40px);
            margin-right: pxtovw2(-40px);
            img {
                display: block;
                width: 100%;
            }
        }
        &.product {
            > section {
                padding-left: pxtovw2(40px);
                padding-right: pxtovw2(40px);
                color: #fff;
                > h3 {
                    display: inline-block;
                    font-size: pxtovw2(30px);
                    line-height: pxtovw2(56px);
                    border-bottom: pxtovw2(2px) solid #fff;
                    margin-bottom: pxtovw2(60px);
                }
            }
            .overview {
                padding-top: pxtovw2(150px);
                padding-bottom: pxtovw2(200px);
                background-image: url(./assets/img/m/product/bg_smp.jpg);
                background-size: cover;
                background-position: 50% 0;
                .page-title {
                    display: flex;
                    flex-direction: column;
                    padding-left: pxtovw2(40px);
                    span {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: pxtovw2(5px);
                        width: pxtovw2(98px);
                        height: pxtovw2(40px);
                        font-size: pxtovw2(18px);
                        border: pxtovw2(2px) solid #c5c5c5;
                        border-radius: pxtovw2(6px);
                    }
                    h4 {
                        font-weight: 900;
                        font-size: pxtovw2(54px);
                        line-height: pxtovw2(66px);
                        margin-bottom:  pxtovw2(30px);
                        sup {
                            font-size: pxtovw2(30px);
                            font-family: "MontSerrat", sans-serif;
                        }
                    }
                }
            }
            .summary {
                margin: 0 auto;
                width: pxtovw2(450px);
                h5 {
                    margin-bottom: pxtovw2(30px);
                    font-size: pxtovw2(34px);
                    line-height: pxtovw2(34px);
                    color: #0072bc;
                    //font-family: 'MontSerrat', sans-serif;
                    font-weight: 900;
                    text-align: center;
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        position: relative;
                        // align-items: center;
                        padding-top: pxtovw2(5px);
                        padding-bottom: pxtovw2(5px);
                        padding-left: pxtovw2(70px);
                        color: #383838;
                        font-size: pxtovw2(22px);
                        line-height: pxtovw2(34px);
                        &:before {
                            position: absolute;
                            top: 0;
                            left: 0;
                            margin-right: pxtovw2(25px);
                            content: ' ';
                            background-image: url(./assets/img/ico_check_circle.png);
                            background-size: cover;
                            width: pxtovw2(43px);
                            height: pxtovw2(43px);
                        }
                        & + li {
                            margin-top: pxtovw2(13px);
                        }
                    }
                }
            }
        }
        &.promotion {
            .news-view {
                .modal-dialog {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    max-width: none;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(#000, .6);
                }
                .modal-content {
                    padding-bottom: pxtovw2(90px);
                    width: pxtovw2(640px);
                    height: auto;
                    max-height: pxtovw2(1000px);
                    border: 0;
                    border-radius: 0;
                }
                .modal-header {
                    padding: pxtovw2(30px) pxtovw2(40px); 
                    // height: pxtovw2(245px);
                    border: 0;
                    display: flex;
                    flex-direction: column;
                    .btn-close {
                        border: 0;
                        padding: 0;
                        width: pxtovw2(37px);
                        height: pxtovw2(37px);
                        display: flex;
                        align-items: center;
                        img {
                            display: block;
                            width: 100%;    
                        }
                    }
                    .modal-title {
                        color: #373737;
                        font-size: pxtovw2(30px);
                        line-height: pxtovw2(40px);
                        //margin-top: pxtovw2(20px);
                        //margin-top: pxtovw2(20px);
                        margin-bottom: pxtovw2(10px);
                        letter-spacing: pxtovw2(-1px);
                    }
                    time {
                        color: #a1a1a1;
                        font-size: pxtovw2(22px);
                        line-height: pxtovw2(26px);
                    }
                }
                .modal-body {
                    overflow: auto;
                    border: 0;
                    //height: pxtovw2(665px);
                    padding: 0 pxtovw2(40px) pxtovw2(40px);
                    .news-image {
                        display: block;
                        width: 100%;
                    }
                    p {
                        margin-top: pxtovw2(30px);
                        margin-bottom: 0;
                        color: #4e4e4e;
                        font-size: pxtovw2(22px);
                        line-height: pxtovw2(36px);
                        letter-spacing: pxtovw2(-1px);
                    }
                }
                .modal-footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    display: block;
                    border: 0;
                    padding: 0;
                    height: pxtovw2(90px);
                    .btn {
                        height: 100%;
                        padding: 0;
                        border: 0;
                        background: #e5e5e5;
                        color: #999999;
                        font-size: pxtovw2(22px);
                        box-shadow: none;
                        border-radius: 0;
                    }
                }
            }
        }
    }
}
</style>
