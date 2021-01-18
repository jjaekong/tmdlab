<template>
    <header id="header" :class="{ 'expend': isExpendNav }" @mouseleave="collapseNav()" :style="{ top: scrollTop+'px' }">
        <div class="container-fluid" id="topmenu">
            <div class="row justify-content-between align-items-center">
                <div class="col-2 d-flex"><h1 class="logo"><router-link to="/"><span class="sr-only">TMD LAP - TRANSFORMATIVE MEDICAL DEVICE</span></router-link></h1></div>
                <div class="col-8 d-flex justify-content-center" style="height: 100%;">
                    <nav class="menu d-flex align-items-center" @mouseover="expendNav()">
                        <ul>
                            <li><router-link to="/w/en/introduce" @focus="expendNav()">Introduction</router-link></li>
                            <li><router-link to="/w/en/technology" @focus="expendNav()">Technology</router-link></li>
                            <li><router-link to="/w/en/product/smp-l" @focus="expendNav()">Products</router-link></li>
                            <li><router-link to="/w/en/promotion/news" @focus="expendNav()">Promotion/activity</router-link></li>
                            <li><router-link to="/w/en/qna"  @focus="expendNav()">Contact</router-link></li>
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
                                    <li><router-link to="/w/en/introduce">About TMD LAB</router-link></li>
                                    <li><router-link to="/w/en/introduce#history">History of TMD LAB</router-link></li>
                                    <li><router-link to="/w/en/introduce#vision">Vision</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><router-link to="/w/en/technology">Shape memory polymer</router-link></li>
                                    <li><router-link to="/w/en/technology#cnv">Cell-derived nanovesicles</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <h5>Shape memory polymer</h5>
                                <ul>
                                    <li><router-link to="/w/en/product/innoself-l">Lacrimal duct stent</router-link></li>
                                    <li><router-link to="/w/en/product/innoself-v">Blood vessel external wrapping stent</router-link></li>
                                    <li><router-link to="/w/en/product/innoself-b">Bile duct stent</router-link></li>
                                    <li><router-link to="/w/en/product/innoself-p">Punctal plug</router-link></li>
                                    <li><router-link to="/w/en/product/innoself-g">Glaucoma drainage device</router-link></li>
                                    <li><router-link to="/w/en/product/innoself-r">Rhinoplasty Implant</router-link></li>
                                </ul>
                                <h5>Cell-derived nanovesicles</h5>
                                <ul>
                                    <li><router-link to="/w/en/product/tnv">Treatment to osteoarthritis</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><router-link to="/w/en/promotion/news">News</router-link></li>
                                    <li><router-link to="/w/en/promotion/journal">Journal</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><router-link to="/w/en/qna">Customer inquiry</router-link></li>
                                    <li><router-link to="/w/en/recruit">Recruit</router-link></li>
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
            if (langCode == 'ko') {
                var pattern = /\/en\//i;
                this.$store.commit('changeLang', langCode)   
                this.$router.push(
                    this.$route.fullPath.replace(pattern, '/ko/')
                )
            }
        },
    }
}
</script>

<style lang="scss">
@import "./src/assets/css/functions.scss";

.en .web #header {
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
                    background-image: url(../../../assets/img/logo_2020.png);
                }
            }
            .menu {
                a {
                    color: #424242;
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
            .btn-menu {
                .bar {
                    background: #000;
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
        letter-spacing: 0;
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
                // width: pxtovw(165px);
                width: pxtovw(220px);
                height: 100%;
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: pxtovw(15px);
                    font-weight: bold;
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
                //background: #000;
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
        letter-spacing: 0;
        .submenu {
            padding-top: pxtovw(20px);
            > ul {
                margin: 0;
                padding: 0;
                list-style: none;
                text-align: center;
                > li {
                    // width: pxtovw(165px);
                    width: pxtovw(220px);
                    > ul {
                        padding: 0;
                        list-style: none;
                        a {
                            margin: 0;
                            font-size: pxtovw(14px);
                            line-height: pxtovw(34px);
                            color: #383838;
                            display: block;
                            //letter-spacing: pxtovw(-1px);
                            &:hover, &:focus {
                                color: #0762a1 !important;
                            }
                        }
                    }
                    &:nth-of-type(3) {
                        h5 {
                            margin: 0 0 pxtovw(3px) 0;
                            font-size: pxtovw(14px);
                            line-height: pxtovw(34px);
                            color: #383838;
                            display: block;
                            text-decoration: none;
                            font-weight: normal;
                            & ~ h5 {
                                margin-top: pxtovw(10px);
                            }
                        }
                        > ul {
                            margin-left: pxtovw(26px);
                            text-align: left;
                            li {
                                position: relative;
                                padding-left: pxtovw(12px);
                                font-size: pxtovw(13px);
                                &:before {
                                    position: absolute;
                                    top: pxtovw(12px);
                                    left: 0;
                                    content: " ";
                                    width: pxtovw(3px);
                                    height: pxtovw(3px);
                                    background: #383838;
                                    border-radius: 50%;
                                }
                            }
                            a {
                                display: inline;
                                font-size: pxtovw(13px);
                                line-height: pxtovw(28px);
                                color: #383838;
                                word-break: keep-all;
                                word-wrap: nowrap;
                                white-space: nowrap;
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