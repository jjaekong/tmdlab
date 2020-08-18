<template>
    <footer id="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-5">
                    <h2><img src="@/assets/img/logo_2020_white.png" alt=""></h2>
                </div>
                <div class="col col-7 d-flex flex-column align-items-end">
                    <div class="dropdown langs">
                        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
                            {{langCode3}}
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item ko" :class="isLangActive('ko') ? 'active' : ''" href="#" @click.prevent="changeLang('ko')">KOR</a>
                            <a class="dropdown-item en" :class="isLangActive('en') ? 'active' : ''" href="#" @click.prevent="changeLang('en')">ENG</a>
                        </div>
                    </div>
                    <p>Beyond a possibility, achievement of high-tech medical advancement</p>
                    <dl>
                        <dt>HEAD OFFICE</dt>
                        <dd>
                            <address>
                                31, Gwangnaru-ro 8-gil, Seongdong-gu, Seoul, 04799 Republic of Korea
                            </address>
                        </dd>
                    </dl>
                    <dl>
                        <dt>LABORATORY</dt>
                        <dd>
                            <address>
                                Avison Biomedical Research Center #525, 50-1, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea
                            </address>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data: function() {
        return {
        }
    },
    computed: {
        ...mapState({
            lang: state => state.lang
        }),
        langCode3: function() {
            var langCode3 = null
            if (this.lang == 'ko') {
                langCode3 = 'KOR'
            } else if (this.lang == 'en') {
                langCode3 = 'ENG'
            }
            return langCode3
        }
    },
    methods: {
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

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

#footer {
    padding-top: pxtovw(50px);
    padding-bottom: pxtovw(50px);
    height: pxtovw(355px);
    background: #222;
    color: #fff;
    .container-fluid {
        height: 100%;
        padding-left: pxtovw(60px);
        padding-right: pxtovw(60px);
        .row {
            height: 100%;
        }
    }
    .col:nth-of-type(1) {
        h2 {
            margin: 0;
            img {
                display: block;
                width: pxtovw(150px);
            }
        }
    }
    .col:nth-of-type(2) {
        // text-align: right;
        .langs {
            // float: right;
            font-family: 'MontSerrat', sans-serif;
            width: pxtovw(90px);
            .btn {
                padding: 0 0 0 pxtovw(10px);
                border: 1px solid #222;
                box-shadow: none;
                width: pxtovw(90px);
                height: pxtovw(33px);
                font-size: pxtovw(20px) !important;
                color: #7b7b7b;
                border-radius: 0;
                text-align: left;
                letter-spacing: 0;
                font-weight: bold;
                display: flex;
                align-items: center;
                &:after {
                    z-index: 1001;
                    position: absolute;
                    top: pxtovw(12px);
                    right: pxtovw(10px);
                    content: ' ';
                    border: 0;
                    width: pxtovw(12px);
                    height: pxtovw(8px);
                    background-image: url(../../../assets/img/ico_arrow_up.png);
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    transform: rotate(180deg);
                }
            }
            &.show {
                .btn {
                    &:after {
                        transform: rotate(0deg);
                    }
                }
            }
            .dropdown-menu {
                padding: 0;
                margin: 1px 0 0 0;
                width: pxtovw(90px);
                height: pxtovw(66px);
                min-width: auto;
                border-radius: 0;
                background: #11110f;
                border: 1px solid #ffffff;
                letter-spacing: 0;
                &.show {
                    top: pxtovw(-33px) !important;
                }
                .dropdown-item {
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    padding: 0 0 0 pxtovw(10px);
                    border: 0;
                    color: #7b7b7b;
                    font-size: pxtovw(20px) !important;
                    background: transparent;
                    &:hover, &:focus {
                        color: #fff;
                    }
                    &.active {
                        color: #fff;
                    }
                }
            }
        }
        p {
            margin-top: pxtovw(40px);
            margin-bottom: pxtovw(20px);
            font-size: pxtovw(24px);
            font-weight: bold;
        }
        dl {
            text-align: right;
            dd {
                margin-bottom: 0;
            }
        }
        address {
            display: flex;
            flex-direction: column;
            margin: 0;
            font-size: pxtovw(14px);
            text-align: right;
            small {
                color: #7b7b7b;
                font-size: pxtovw(12px);
            }
        }
    }
}
</style>