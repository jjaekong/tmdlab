<template>
    <header id="header" :class="{ 'expend': isExpendNav }" @mouseleave="collapseNav()" :style="{ top: scrollTop+'px' }">
        <div class="container-fluid" id="topmenu">
            <div class="row justify-content-between align-items-center">
                <div class="col-2 d-flex"><h1 class="logo"><router-link to="/w/ko/home"><span class="sr-only">TMD LAP - TRANSFORMATIVE MEDICAL DEVICE</span></router-link></h1></div>
                <div class="col-8 d-flex justify-content-center" style="height: 100%;">
                    <nav class="menu d-flex align-items-center" @mouseover="expendNav()">
                        <ul>
                            <li><router-link to="/w/ko/introduce" @focus="expendNav()">소개</router-link></li>
                            <li><router-link to="/w/ko/technology" @focus="expendNav()">기술</router-link></li>
                            <li><router-link to="/w/ko/product/smp-l" @focus="expendNav()">제품</router-link></li>
                            <li><router-link to="/w/ko/promotion/news" @focus="expendNav()">홍보/활동</router-link></li>
                            <li><router-link to="/w/ko/qna"  @focus="expendNav()">문의</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-2 d-flex justify-content-end">
                    <ul class="langs">
                        <li><a class="en" :class="isLangActive('en') ? 'active' : ''" href="#" @click.prevent="changeLang('en')">ENG</a></li>
                        <li><a class="ko" :class="isLangActive('ko') ? 'active' : ''" href="#" @click.prevent="changeLang('ko')">KOR</a></li>
                    </ul>
                    <button class="btn btn-link btn-menu" @mouseover="expendNav()">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="sr-only">메뉴</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="container-fluid" id="submenu">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8 d-flex justify-content-center">
                    <nav class="submenu">
                        <ul class="p-0 d-flex">
                            <li>
                                <ul>
                                    <li><router-link to="/w/ko/introduce">회사소개</router-link></li>
                                    <li><router-link to="/w/ko/introduce#history">연혁</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><router-link to="/w/ko/technology">형상기억고분자</router-link></li>
                                    <li><router-link to="/w/ko/technology#cnv">세포유래 나노소포체</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <h5>형상기억고분자</h5>
                                <ul>
                                    <li><router-link to="/w/ko/product/innoself-l">누도·누액관 스텐트</router-link></li>
                                    <li><router-link to="/w/ko/product/innoself-v">혈관 외벽 스텐트</router-link></li>
                                    <li><router-link to="/w/ko/product/innoself-b">담관 스텐트</router-link></li>
                                    <li><router-link to="/w/ko/product/innoself-p">누점플러그</router-link></li>
                                    <li><router-link to="/w/ko/product/innoself-g">형상기억 녹내장 튜브</router-link></li>
                                    <li><router-link to="/w/ko/product/innoself-r">코 성형물 임플란트</router-link></li>
                                </ul>
                                <h5>세포유래 나노소포체</h5>
                                <ul>
                                    <li><router-link to="/w/ko/product/tnv">관절염 치료제</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><router-link to="/w/ko/promotion/news">뉴스</router-link></li>
                                    <li><router-link to="/w/ko/promotion/journal">논문</router-link></li>
                                    <!-- <li><a href="#">학회활동</a></li> -->
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><router-link to="/w/ko/qna">고객문의</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data: function() {
        return {
            isExpendNav: false,
            scrollTop: 0,
        }
    },
    computed: {
        ...mapState({
            lang: state => state.lang
        }),
    },
    beforeCreate: function() {
        window.addEventListener('scroll', () => {
            this.scrollTop = document.documentElement.scrollTop
        })
    },
    methods: {
        expendNav: function() {
            this.isExpendNav = true;
        },
        collapseNav: function() {
            this.isExpendNav = false;
        },
        isLangActive: function(langCode) {
            if (langCode == this.lang) {
                return true;
            }
            return false;
        },
        changeLang: function(langCode) {
            if (langCode == 'en') {
                var pattern = /\/ko\//i;
                this.$store.commit('changeLang', langCode)   
                this.$router.push(
                    this.$route.fullPath.replace(pattern, '/en/')
                )
            }
        },
    }
}
</script>

<style lang="scss">
@import "./src/assets/css/functions.scss";

.ko .web #header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: pxtovw(1600px);
    // height: 4.42708333333vw;
    background: #fff;
    border-bottom: 1px solid rgba(#ebebeb, .1);
    z-index: 10;
    background: rgba(#000, .1);
    &.expend {
        background: #fff;
        #topmenu {
            border-bottom: 1px solid rgba(#383838, .1);
            .logo {
                a {
                    // background-image: url(../../../assets/img/logo_black.gif);
                    background-image: url(../../../assets/img/logo_2020.png);
                }
            }
            .menu {
                a {
                    color: #424242;
                }
            }
            .btn-menu {
                .bar {
                    background: #000;
                }
            }
            .langs {
                li {
                    a {
                        border: 1px solid #000;
                        color: #000;
                        &.active {
                            background: #000;
                            color: #fff;
                        }
                    }
                }
            }
        }
        #submenu {
            display: block;
        }
    }
    .container-fluid {
        height: 100%;
        padding-left: pxtovw(60px);
        padding-right: pxtovw(60px);
        .row {
            height: 100%;
        }
    }
    #topmenu {
        // height: 4.42708333333vw;
        height: pxtovw(85px);
        border-bottom: 1px solid rgba(#383838, 0);
        .logo {
            margin: 0;
            width: pxtovw(150px);
            height: pxtovw(40px);
            a {
                display: block;
                width: 100%;
                height: 100%;
                // background-image: url(../../../assets/img/logo_black.gif);
                // background-image: url(../../../assets/img/logo_white.png);
                background-image: url(../../../assets/img/logo_2020_white.png);
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-position: 50% 50%;
            }
        }
        .menu {
            height: 100%;
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                align-items: center;
                height: 100%;
            }
            li {
                width: pxtovw(165px);
                height: 100%;
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    // font-size: 0.9375vw;
                    font-size: pxtovw(18px);
                    // color: #424242;
                    height: 100%;
                    text-decoration: none;
                    color: #fff;
                }
                &:nth-of-type(4) {
                    width: pxtovw(195px);
                }
            }
        }
        .langs {
            display: flex;
            list-style: none;
            margin: 0 pxtovw(30px) 0 0;
            padding: 0;
            li {
                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: pxtovw(32px);
                    height: pxtovw(18px);
                    border: 1px solid #fff;
                    font-size: pxtovw(10px);
                    font-family: 'Arial', sans-serif;
                    border-radius: pxtovw(3px);
                    text-decoration: none;
                    letter-spacing: 0;
                    background: transparent;
                    color: #fff;
                    &.active {
                        background: #fff;
                        color: #000;
                    }
                }
                & + li {
                    margin-left: pxtovw(4px);
                }
            }
        }
        .btn-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;
            border: 0;
            width: pxtovw(26px);
            height: pxtovw(19px);
            .bar {
                height: 1px;
                width: pxtovw(26px);
                // background: #000;
                background-color: #fff;
                &:nth-of-type(2) {
                    width: pxtovw(20px);
                }
            }
        }
    }
    #submenu {
        display: none;
        height: pxtovw(320px);
        .submenu {
            padding-top: pxtovw(20px);
            > ul {
                margin: 0;
                padding: 0;
                list-style: none;
                text-align: center;
                > li {
                    width: pxtovw(165px);
                    h5 {
                        margin: 0 0 pxtovw(3px) 0;
                        font-size: pxtovw(16px);
                        line-height: pxtovw(34px);
                        color: #424242;
                        display: block;
                        text-decoration: none;
                        & ~ h5 {
                            margin-top: pxtovw(10px);
                        }
                    }
                    > ul {
                        padding: 0;
                        list-style: none;
                        a {
                            margin: 0;
                            font-size: pxtovw(16px);
                            line-height: pxtovw(34px);
                            color: #424242;
                            display: block;
                            &:hover, &:focus {
                                color: #0762a1;
                            }
                        }
                    }
                    &:nth-of-type(3) {
                        > ul {
                            a {
                                display: inline;
                                line-height: pxtovw(28px);
                                color: #999;
                            }
                        }
                    }
                    &:nth-of-type(4) {
                        width: pxtovw(195px);
                    }
                }
            }
        }
    }
}
</style>