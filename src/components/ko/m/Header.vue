<template>
    <div>
        <header id="header">
            <h1><router-link to="/m/ko/"><img src="../../../assets/img/logo_2020_white.png" alt=""></router-link></h1>
            <button class="btn btn-link btn-menu" data-toggle="modal" data-target="#nav" data-backdrop="false">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="sr-only">메뉴</span>
            </button>
        </header>
        <nav id="nav" class="modal">
            <header>
                <h1><router-link to="/m/ko/"><img src="../../../assets/img/logo_2020.png" alt=""></router-link></h1>
                <button class="btn btn-link btn-menu" data-dismiss="modal">
                    <img src="../../../assets/img/ico_close_black.png" alt="">
                </button>
            </header>
            <div class="listgroup">
                <h3><router-link to="/m/ko/introduce" data-dismiss="modal">소개</router-link></h3>
            </div>
            <div class="listgroup">
                <h3><router-link to="/m/ko/technology" data-dismiss="modal">기술</router-link></h3>
                <ul>
                    <li><router-link to="/m/ko/technology#smp" data-dismiss="modal">형상기억고분자</router-link></li>
                    <li><router-link to="/m/ko/technology#cnv" data-dismiss="modal">세포유래 나노소포체 </router-link></li>
                </ul>
            </div>
            <div class="listgroup product">
                <h3><a href="#">제품</a></h3>
                <div class="d-flex">
                    <div>
                        <h4><router-link to="/m/ko/product/smp-l" data-dismiss="modal">형상기억고분자</router-link></h4>
                        <ul>
                            <li><router-link to="/m/ko/product/innoself-l" data-dismiss="modal">누도 누액관 스텐트</router-link></li>
                            <li><router-link to="/m/ko/product/innoself-v" data-dismiss="modal">혈관 외벽 스텐트</router-link></li>
                            <li><router-link to="/m/ko/product/innoself-b" data-dismiss="modal">담관 스텐트</router-link></li>
                            <li><router-link to="/m/ko/product/innoself-p" data-dismiss="modal">누점플러그</router-link></li>
                            <li><router-link to="/m/ko/product/innoself-g" data-dismiss="modal">형상기억 녹내장 튜브</router-link></li>
                            <li><router-link to="/m/ko/product/innoself-r" data-dismiss="modal">코 성형물 임플란트</router-link></li>
                        </ul>
                    </div>
                    <div>
                        <h4><router-link to="/m/ko/product/tnv" data-dismiss="modal">세포유래 나노소포체</router-link></h4>
                        <ul>
                            <li><router-link to="/m/ko/product/tnv" data-dismiss="modal">관절염 치료제</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="listgroup">
                <h3><router-link to="/m/ko/promotion/news" data-dismiss="modal">홍보/활동</router-link></h3>
                <ul>
                    <li><router-link to="/m/ko/promotion/news" data-dismiss="modal">뉴스</router-link></li>
                    <li><router-link to="/m/ko/promotion/journal" data-dismiss="modal">논문</router-link></li>
                </ul>
            </div>
            <div class="listgroup">
                <h3><router-link to="/m/ko/qna" data-dismiss="modal">문의</router-link></h3>
            </div>
            <div class="langs">
                <a class="en" :class="isLangActive('en') ? 'active' : ''" href="#" @click.prevent="changeLang('en')">ENG</a>
                <a class="ko" :class="isLangActive('ko') ? 'active' : ''" href="#" @click.prevent="changeLang('ko')">KOR</a>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data: function() {
        return {
            isExpendNav: false,
        }
    },
    computed: {
        ...mapState({
            lang: state => state.lang
        }),
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

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

#header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: pxtovw2(118px);
    background: rgba(#000, .2);
    //background: transparent;
    display: flex;
    align-items: center;
    padding-left: pxtovw2(40px);
    padding-right: pxtovw2(40px);
    border: 0;
    h1 {
        flex: 1;
        margin: 0;
        img {
            display: block;
            height: pxtovw2(40px);
        }
    }
    .btn-menu {
        position: relative;
        padding: pxtovw2(10px);
        border: 0;
        border-radius: 0;
        width: pxtovw2(65px);
        height: pxtovw2(46px);
        //background: rgba(#000, .1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .bar {
            display: block;
            width: pxtovw2(45px);
            height: pxtovw2(2px);
            background: #fff;
        }
    }
}
#nav {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    padding: 0 pxtovw2(40px) pxtovw2(150px) !important;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: pxtovw2(118px);
        margin-bottom: pxtovw2(30px);
        h1 {
            flex: 1;
            margin: 0;
            img {
                display: block;
                height: pxtovw2(40px);
            }
        }
        .btn-menu {
            position: relative;
            padding: pxtovw2(15px);
            border: 0;
            border-radius: 0;
            width: pxtovw2(65px);
            height: pxtovw2(65px);
            //background: rgba(#000, .1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img {
                display: block;
                width: 100%;
            }
        }
    }
    h3 {
        margin: 0;
        a {
            font-size: pxtovw2(44px);
            line-height: pxtovw2(90px);
            color: #333;
            font-weight: 900;
            text-decoration: none;
        }
    }
    h4 {
        margin: pxtovw2(-13px) 0 0 0;
        margin: 0;
        padding-left: pxtovw2(25px);
        display: flex;
        align-items: center;
        a {
            font-size: pxtovw2(24px);
            line-height: pxtovw2(50px);
            color: #a2a2a2;
            font-weight: 900;
            text-decoration: none;
        }
    }
    ul {
        margin: 0 0 pxtovw2(-13px) 0;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            padding-left: pxtovw2(25px);
            background-image: url('../../../assets/img/ico_arrow_right_small.png');
            background-repeat: no-repeat;
            background-position: 0 50%;
            background-size: pxtovw2(11px) pxtovw2(18px);
            a {
                font-size: pxtovw2(24px);
                line-height: pxtovw2(50px);
                color: #404040;
                font-weight: 900;
                text-decoration: none;
            }
        }
    }
    .listgroup {
        margin-top: pxtovw2(30px);
        padding-left: pxtovw2(15px);
        &.product {
            .d-flex {
                div:nth-of-type(1) {
                    width: pxtovw2(300px);
                }
                div:nth-of-type(2) {
                    padding-left: pxtovw2(45px);
                    border-left: 1px solid #e1e1e1;
                }
                h4 {
                    margin: pxtovw2(-13px) 0 0 0;
                }
                ul {
                    margin: 0 0 pxtovw2(-13px) 0;
                }
            }
        }
    }
    .langs {
        z-index: 9999;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: pxtovw2(100px);
        background: #222;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 pxtovw2(25px);
        a {
            width: pxtovw2(100px);
            height: pxtovw2(50px);
            border: 1px solid #7b7b7b;
            color: #7b7b7b;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Arial Black', sans-serif;
            font-size: pxtovw2(30px);
            text-decoration: none;
            &.active {
                color: #fff;
                border-color: #fff;
            }
            & + a {
                margin-left: pxtovw2(10px);
            }
        }
    }
}
</style>