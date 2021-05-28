<template>
    <div class="slide welcome">
        <div class="bg"></div>
        <div class="container-fluid px-0">
            <div class="row no-gutters align-items-center">
                <div class="col">
                    <section>
                        <header>
                            <h2 class="title">
                                <span>생명을 향한 끊임없는 헌신</span>
                                <span class="bar"></span>
                            </h2>
                        </header>
                        <p class="desc ml-1">
                            인류에게 생명의 희망과<br>
                            지속가능한 행복을 누릴수 있도록<br>
                            티엠디랩은 늘 헌신하고 노력하겠습니다.
                        </p>
                        <router-link class="detail ml-1" to="/w/ko/introduce">자세히 보기</router-link>
                    </section>
                </div>
                <div class="col d-flex justify-content-end">
                    <section class="news-list">
                        <header>
                            <h4>NEWS</h4>
                            <router-link to="/w/ko/promotion/news" class="more">더보기<span class="box"><span></span></span></router-link>
                        </header>
                        <ul>
                            <li><router-link to="/w/ko/promotion/news/15"><span>한국산업기술진흥협회에서 지원하는 고경력 연구인력 채용지원사업에 ...</span><time>2021년 05월 24일</time></router-link></li>
                            <li><router-link to="/w/ko/promotion/news/14"><span>혈관외벽 서포트 연구 논문, Small journal cover 선정 (2021.05)</span><time>2021년 05월 06일</time></router-link></li>
                            <li><router-link to="/w/ko/promotion/news/13"><span>2021년 춘계 생체재료학회 우수 논문 발표상 수상</span><time>2021년 03월 26일</time></router-link></li>
                            <li><router-link to="/w/ko/promotion/news/12"><span>티엠디랩-연세대 의대 공동연구, ‘의료기기 맞춤형 소재’ 국책과제 선정</span><time>2020년 9월 15일</time></router-link></li>
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