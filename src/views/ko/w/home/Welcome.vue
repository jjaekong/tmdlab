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
                            TMD랩은 늘 헌신하고 노력하겠습니다.
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
                            <li><router-link to="/w/ko/promotion/news/4"><span>2019년 의료기기 CHAMP 교육과정 의료기기 입문 마스터 과정 수료</span><time>2019년 7월 16일</time></router-link></li>
                            <li><router-link to="/w/ko/promotion/news/3"><span>2019년 한국조직공학재생의학회 (KTERMS) 학술대회 참여, 포스터 ...</span><time>2019년 6월 6일</time></router-link></li>
                            <li><router-link to="/w/ko/promotion/news/2"><span>연세대학교 산학협력단으로부터 형상기억고분자 통상실시권 획득</span><time>2019년 5월 21일</time></router-link></li>
                            <li><router-link to="/w/ko/promotion/news/1"><span>형상기억고분자를 이용한 스텐트 관련 특허 2건 출원</span><time>2018년 12월 19일</time></router-link></li>
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