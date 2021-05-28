<template>
    <div class="slide welcome">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col">
                    <section>
                        <header>
                            <h2 class="title">
                                <span>Endless devotion to life</span>
                                <span class="bar"></span>
                            </h2>
                        </header>
                        <p class="desc ml-1">
                            TMD LAB will dedicate ourselves and take effort,<br>
                            so that humankind can stand with hopes of lives,<br>
                            and with sustainable happiness.
                        </p>
                        <router-link class="detail ml-1" to="/w/en/introduce">Click here for details</router-link>
                    </section>
                </div>
                <div class="col d-flex justify-content-end">
                    <section class="news-list">
                        <header>
                            <h4>NEWS</h4>
                            <router-link to="/w/en/promotion/news" class="more">Here for details<span class="box"><span></span></span></router-link>
                        </header>
                        <ul>
                            <li><router-link to="/w/en/promotion/news/15"><span>Selected for the recruitment support project for highly ...</span><time>24th May 2021</time></router-link></li>
                            <li><router-link to="/w/en/promotion/news/14"><span>Outer Vascular Wall Support Research Paper, Selected as ...</span><time>6th May 2021</time></router-link></li>
                            <li><router-link to="/w/en/promotion/news/13"><span>2021 Spring Biomaterials Society Outstanding Paper Presentation ...</span><time>26th March 2021</time></router-link></li>
                            <li><router-link to="/w/en/promotion/news/12"><span>TMD Lab - Yonsei University College of Medicine Joint ...</span><time>15th September 2020</time></router-link></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/functions.scss";

.welcome {
    p.desc {
        margin-top: pxtovw(30px) !important;
        margin-bottom: pxtovw(50px) !important;
    }
}
.news-list {
    margin-top: pxtovw(155px);
    width: pxtovw(490px);
    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: pxtovw(45px);
        h4 {
            font-size: pxtovw(44px);
            line-height: pxtovw(66px);
            font-weight: bold;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            height: pxtovw(80px);
            & + li {
                margin-top: 1px;
            }
            a {
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
                background: rgba(#fff, .1);
                text-decoration: none;
                // padding-left: pxtovw(40px);
                // padding-right: pxtovw(40px);
                font-size: pxtovw(18px);
                color: #fff;
                transition: background .2s;
                span {
                    flex: 1;
                    padding-left: pxtovw(40px);
                }
                time {
                    width: pxtovw(175px);
                    font-size: pxtovw(14px);
                    text-align: center;
                }
                &:hover, &:focus {
                    background: rgba(#fff, .25);
                }
            }
        }
    }
}
</style>