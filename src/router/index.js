import Vue from 'vue'
import VueRouter from 'vue-router'

import KO_W_Home from '../views/ko/w/Home.vue'
import KO_W_QnA from '../views/ko/w/QnA.vue'

import KO_M_Home from '../views/ko/m/Home.vue'
import KO_M_QnA from '../views/ko/m/QnA.vue'

import EN_W_Home from '../views/en/w/Home.vue'
import EN_W_QnA from '../views/en/w/QnA.vue'

import EN_M_Home from '../views/en/m/Home.vue'
import EN_M_QnA from '../views/en/m/QnA.vue'
import $ from 'jquery'

Vue.use(VueRouter)

let router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        // 영문 웹
        {
            path: '/',
            redirect: '/w/en/home',
        },
        {
            path: '/w',
            redirect: '/w/en/home',
        },
        {
            path: '/w/en',
            redirect: '/w/en/home',
        },
        {
            path: '/w/en/home',
            component: EN_W_Home
        },
        {
            path: '/w/en/introduce',
            component: () => import('../views/en/w/Introduce.vue'),
        },
        {
            path: '/w/en/technology',
            component: () => import('../views/en/w/Technology.vue'),
        },
        {
            path: '/w/en/product/innoself-l',
            component: () => import('../views/en/w/product/Innoself-L.vue'),
        },
        {
            path: '/w/en/product/innoself-b',
            component: () => import('../views/en/w/product/Innoself-B.vue'),
        },
        {
            path: '/w/en/product/innoself-v',
            component: () => import('../views/en/w/product/Innoself-V.vue'),
        },
        {
            path: '/w/en/product/innoself-p',
            component: () => import('../views/en/w/product/Innoself-P.vue'),
        },
        {
            path: '/w/en/product/innoself-g',
            component: () => import('../views/en/w/product/Innoself-G.vue'),
        },
        {
            path: '/w/en/product/innoself-r',
            component: () => import('../views/en/w/product/Innoself-R.vue'),
        },
        // {
        //     path: '/w/en/product/tnv',
        //     component: () => import('../views/en/w/product/TNV.vue'),
        // },
        {
            path: '/w/en/promotion/news',
            component: () => import('../views/en/w/promotion/News.vue'),
            children: [
                {
                    path: '/w/en/promotion/news/15',
                    component: () => import('../views/en/w/promotion/NewsItem15.vue'),
                },
                {
                    path: '/w/en/promotion/news/14',
                    component: () => import('../views/en/w/promotion/NewsItem14.vue'),
                },
                {
                    path: '/w/en/promotion/news/13',
                    component: () => import('../views/en/w/promotion/NewsItem13.vue'),
                },
                {
                    path: '/w/en/promotion/news/12',
                    component: () => import('../views/en/w/promotion/NewsItem12.vue'),
                },
                {
                    path: '/w/en/promotion/news/11',
                    component: () => import('../views/en/w/promotion/NewsItem11.vue'),
                },
                {
                    path: '/w/en/promotion/news/10',
                    component: () => import('../views/en/w/promotion/NewsItem10.vue'),
                },
                {
                    path: '/w/en/promotion/news/9',
                    component: () => import('../views/en/w/promotion/NewsItem9.vue'),
                },
                {
                    path: '/w/en/promotion/news/8',
                    component: () => import('../views/en/w/promotion/NewsItem8.vue'),
                },
                {
                    path: '/w/en/promotion/news/7',
                    component: () => import('../views/en/w/promotion/NewsItem7.vue'),
                },
                {
                    path: '/w/en/promotion/news/6',
                    component: () => import('../views/en/w/promotion/NewsItem6.vue'),
                },
                {
                    path: '/w/en/promotion/news/5',
                    component: () => import('../views/en/w/promotion/NewsItem5.vue'),
                },
                {
                    path: '/w/en/promotion/news/4',
                    component: () => import('../views/en/w/promotion/NewsItem4.vue'),
                },
                {
                    path: '/w/en/promotion/news/3',
                    component: () => import('../views/en/w/promotion/NewsItem3.vue'),
                },
                {
                    path: '/w/en/promotion/news/2',
                    component: () => import('../views/en/w/promotion/NewsItem2.vue'),
                },
                {
                    path: '/w/en/promotion/news/1',
                    component: () => import('../views/en/w/promotion/NewsItem1.vue'),
                }
            ]
        },
        {
            path: '/w/en/promotion/journal',
            component: () => import('../views/en/w/promotion/Journal.vue'),
            children: [
                {
                    path: '/w/en/promotion/journal/8',
                    component: () => import('../views/en/w/promotion/JournalItem8.vue'),
                },
                {
                    path: '/w/en/promotion/journal/7',
                    component: () => import('../views/en/w/promotion/JournalItem7.vue'),
                },
                {
                    path: '/w/en/promotion/journal/6',
                    component: () => import('../views/en/w/promotion/JournalItem6.vue'),
                },
                {
                    path: '/w/en/promotion/journal/5',
                    component: () => import('../views/en/w/promotion/JournalItem5.vue'),
                },
                {
                    path: '/w/en/promotion/journal/4',
                    component: () => import('../views/en/w/promotion/JournalItem4.vue'),
                },
                {
                    path: '/w/en/promotion/journal/3',
                    component: () => import('../views/en/w/promotion/JournalItem3.vue'),
                },
                {
                    path: '/w/en/promotion/journal/2',
                    component: () => import('../views/en/w/promotion/JournalItem2.vue'),
                },
                {
                    path: '/w/en/promotion/journal/1',
                    component: () => import('../views/en/w/promotion/JournalItem1.vue'),
                }
            ]
        },
        {
            path: '/w/en/qna',
            component: EN_W_QnA,
        },
        {
            path: '/w/en/recruit',
            component: () => import('../views/en/w/Recruit.vue'),
        },

        // 영문 모바일
        {
            path: '/m/en/',
            redirect: '/m/en/home',
        },
        {
            path: '/m/en/home',
            component: EN_M_Home
        },
        {
            path: '/m/en/introduce',
            component: () => import('../views/en/m/Introduce.vue'),
        },
        {
            path: '/m/en/technology',
            component: () => import('../views/en/m/Technology.vue'),
        },
        {
            path: '/m/en/product/',
            redirect: '/m/en/product/innoself-l',
        },
        {
            path: '/m/en/product/innoself-l',
            component: () => import('../views/en/m/product/Innoself-L.vue'),
        },
        {
            path: '/m/en/product/innoself-b',
            component: () => import('../views/en/m/product/Innoself-B.vue'),
        },
        {
            path: '/m/en/product/innoself-v',
            component: () => import('../views/en/m/product/Innoself-V.vue'),
        },
        {
            path: '/m/en/product/innoself-p',
            component: () => import('../views/en/m/product/Innoself-P.vue'),
        },
        {
            path: '/m/en/product/innoself-g',
            component: () => import('../views/en/m/product/Innoself-G.vue'),
        },
        {
            path: '/m/en/product/innoself-r',
            component: () => import('../views/en/m/product/Innoself-R.vue'),
        },
        // {
        //     path: '/m/en/product/tnv',
        //     component: () => import('../views/en/m/product/TNV.vue'),
        // },
        {
            path: '/m/en/promotion/news',
            component: () => import('../views/en/m/promotion/News.vue'),
            children: [
                {
                    path: '/m/en/promotion/news/15',
                    component: () => import('../views/en/m/promotion/NewsItem15.vue'),
                },
                {
                    path: '/m/en/promotion/news/14',
                    component: () => import('../views/en/m/promotion/NewsItem14.vue'),
                },
                {
                    path: '/m/en/promotion/news/13',
                    component: () => import('../views/en/m/promotion/NewsItem13.vue'),
                },
                {
                    path: '/m/en/promotion/news/12',
                    component: () => import('../views/en/m/promotion/NewsItem12.vue'),
                },
                {
                    path: '/m/en/promotion/news/11',
                    component: () => import('../views/en/m/promotion/NewsItem11.vue'),
                },
                {
                    path: '/m/en/promotion/news/10',
                    component: () => import('../views/en/m/promotion/NewsItem10.vue'),
                },
                {
                    path: '/m/en/promotion/news/9',
                    component: () => import('../views/en/m/promotion/NewsItem9.vue'),
                },
                {
                    path: '/m/en/promotion/news/8',
                    component: () => import('../views/en/m/promotion/NewsItem8.vue'),
                },
                {
                    path: '/m/en/promotion/news/7',
                    component: () => import('../views/en/m/promotion/NewsItem7.vue'),
                },
                {
                    path: '/m/en/promotion/news/6',
                    component: () => import('../views/en/m/promotion/NewsItem6.vue'),
                },
                {
                    path: '/m/en/promotion/news/5',
                    component: () => import('../views/en/m/promotion/NewsItem5.vue'),
                },
                {
                    path: '/m/en/promotion/news/4',
                    component: () => import('../views/en/m/promotion/NewsItem4.vue'),
                },
                {
                    path: '/m/en/promotion/news/3',
                    component: () => import('../views/en/m/promotion/NewsItem3.vue'),
                },
                {
                    path: '/m/en/promotion/news/2',
                    component: () => import('../views/en/m/promotion/NewsItem2.vue'),
                },
                {
                    path: '/m/en/promotion/news/1',
                    component: () => import('../views/en/m/promotion/NewsItem1.vue'),
                }
            ]
        },
        {
            path: '/m/en/promotion/journal',
            component: () => import('../views/en/m/promotion/Journal.vue'),
            children: [
                {
                    path: '/m/en/promotion/journal/8',
                    component: () => import('../views/en/m/promotion/JournalItem8.vue'),
                },
                {
                    path: '/m/en/promotion/journal/7',
                    component: () => import('../views/en/m/promotion/JournalItem7.vue'),
                },
                {
                    path: '/m/en/promotion/journal/6',
                    component: () => import('../views/en/m/promotion/JournalItem6.vue'),
                },
                {
                    path: '/m/en/promotion/journal/5',
                    component: () => import('../views/en/m/promotion/JournalItem5.vue'),
                },
                {
                    path: '/m/en/promotion/journal/4',
                    component: () => import('../views/en/m/promotion/JournalItem4.vue'),
                },
                {
                    path: '/m/en/promotion/journal/3',
                    component: () => import('../views/en/m/promotion/JournalItem3.vue'),
                },
                {
                    path: '/m/en/promotion/journal/2',
                    component: () => import('../views/en/m/promotion/JournalItem2.vue'),
                },
                {
                    path: '/m/en/promotion/journal/1',
                    component: () => import('../views/en/m/promotion/JournalItem1.vue'),
                }
            ]
        },
        {
            path: '/m/en/qna',
            component: EN_M_QnA,
        },
        {
            path: '/m/en/recruit',
            component: () => import('../views/en/m/Recruit.vue'),
        },

        // 국문 웹
        {
            path: '/w/ko',
            redirect: '/w/ko/home',
        },
        {
            path: '/w/ko/home',
            component: KO_W_Home
        },
        {
            path: '/w/ko/introduce',
            component: () => import('../views/ko/w/Introduce.vue')
        },
        {
            path: '/w/ko/technology',
            component: () => import('../views/ko/w/Technology.vue')
        },
        {
            path: '/w/ko/product/innoself-l',
            component: () => import('../views/ko/w/product/Innoself-L.vue')
        },
        {
            path: '/w/ko/product/innoself-b',
            component: () => import('../views/ko/w/product/Innoself-B.vue')
        },
        {
            path: '/w/ko/product/innoself-v',
            component: () => import('../views/ko/w/product/Innoself-V.vue')
        },
        // {
        //     path: '/w/ko/product/tnv',
        //     component: () => import('../views/ko/w/product/TNV.vue')
        // },
        {
            path: '/w/ko/product/innoself-p',
            component: () => import('../views/ko/w/product/Innoself-P.vue')
        },
        {
            path: '/w/ko/product/innoself-g',
            component: () => import('../views/ko/w/product/Innoself-G.vue')
        },
        {
            path: '/w/ko/product/innoself-r',
            component: () => import('../views/ko/w/product/Innoself-R.vue')
        },
        {
            path: '/w/ko/promotion/news',
            component: () => import('../views/ko/w/promotion/News.vue'),
            children: [
                {
                    path: '/w/ko/promotion/news/15',
                    component: () => import('../views/ko/w/promotion/NewsItem15.vue'),
                },
                {
                    path: '/w/ko/promotion/news/14',
                    component: () => import('../views/ko/w/promotion/NewsItem14.vue'),
                },
                {
                    path: '/w/ko/promotion/news/13',
                    component: () => import('../views/ko/w/promotion/NewsItem13.vue'),
                },
                {
                    path: '/w/ko/promotion/news/12',
                    component: () => import('../views/ko/w/promotion/NewsItem12.vue'),
                },
                {
                    path: '/w/ko/promotion/news/11',
                    component: () => import('../views/ko/w/promotion/NewsItem11.vue'),
                },
                {
                    path: '/w/ko/promotion/news/10',
                    component: () => import('../views/ko/w/promotion/NewsItem10.vue'),
                },
                {
                    path: '/w/ko/promotion/news/9',
                    component: () => import('../views/ko/w/promotion/NewsItem9.vue'),
                },
                {
                    path: '/w/ko/promotion/news/8',
                    component: () => import('../views/ko/w/promotion/NewsItem8.vue'),
                },
                {
                    path: '/w/ko/promotion/news/7',
                    component: () => import('../views/ko/w/promotion/NewsItem7.vue'),
                },
                {
                    path: '/w/ko/promotion/news/6',
                    component: () => import('../views/ko/w/promotion/NewsItem6.vue'),
                },
                {
                    path: '/w/ko/promotion/news/5',
                    component: () => import('../views/ko/w/promotion/NewsItem5.vue'),
                },
                {
                    path: '/w/ko/promotion/news/4',
                    component: () => import('../views/ko/w/promotion/NewsItem4.vue'),
                },
                {
                    path: '/w/ko/promotion/news/3',
                    component: () => import('../views/ko/w/promotion/NewsItem3.vue'),
                },
                {
                    path: '/w/ko/promotion/news/2',
                    component: () => import('../views/ko/w/promotion/NewsItem2.vue'),
                },
                {
                    path: '/w/ko/promotion/news/1',
                    component: () => import('../views/ko/w/promotion/NewsItem1.vue'),
                }
            ]
        },
        {
            path: '/w/ko/promotion/journal',
            component: () => import('../views/ko/w/promotion/Journal.vue'),
            children: [
                {
                    path: '/w/ko/promotion/journal/8',
                    component: () => import('../views/ko/w/promotion/JournalItem8.vue'),
                },
                {
                    path: '/w/ko/promotion/journal/7',
                    component: () => import('../views/ko/w/promotion/JournalItem7.vue'),
                },
                {
                    path: '/w/ko/promotion/journal/6',
                    component: () => import('../views/ko/w/promotion/JournalItem6.vue'),
                },
                {
                    path: '/w/ko/promotion/journal/5',
                    component: () => import('../views/ko/w/promotion/JournalItem5.vue'),
                },
                {
                    path: '/w/ko/promotion/journal/4',
                    component: () => import('../views/ko/w/promotion/JournalItem4.vue'),
                },
                {
                    path: '/w/ko/promotion/journal/3',
                    component: () => import('../views/ko/w/promotion/JournalItem3.vue'),
                },
                {
                    path: '/w/ko/promotion/journal/2',
                    component: () => import('../views/ko/w/promotion/JournalItem2.vue'),
                },
                {
                    path: '/w/ko/promotion/journal/1',
                    component: () => import('../views/ko/w/promotion/JournalItem1.vue'),
                }
            ]
        },
        {
            path: '/w/ko/qna',
            component: KO_W_QnA,
        },
        {
            path: '/w/ko/recruit',
            component: () => import('../views/ko/w/Recruit.vue'),
        },

        // 국문 모바일
        {
            path: '/m/ko/',
            redirect: '/m/ko/home',
        },
        {
            path: '/m/ko/home',
            component: KO_M_Home
        },
        {
            path: '/m/ko/introduce',
            component: () => import('../views/ko/m/Introduce.vue'),
        },
        {
            path: '/m/ko/technology',
            component: () => import('../views/ko/m/Technology.vue'),
        },
        {
            path: '/m/ko/product/',
            redirect: '/m/ko/product/innoself-l',
        },
        {
            path: '/m/ko/product/innoself-l',
            component: () => import('../views/ko/m/product/Innoself-L.vue'),
        },
        {
            path: '/m/ko/product/innoself-b',
            component: () => import('../views/ko/m/product/Innoself-B.vue'),
        },
        {
            path: '/m/ko/product/innoself-v',
            component: () => import('../views/ko/m/product/Innoself-V.vue'),
        },
        // {
        //     path: '/m/ko/product/tnv',
        //     component: () => import('../views/ko/m/product/TNV.vue'),
        // },
        {
            path: '/m/ko/product/innoself-p',
            component: () => import('../views/ko/m/product/Innoself-P.vue')
        },
        {
            path: '/m/ko/product/innoself-g',
            component: () => import('../views/ko/m/product/Innoself-G.vue')
        },
        {
            path: '/m/ko/product/innoself-r',
            component: () => import('../views/ko/m/product/Innoself-R.vue')
        },
        {
            path: '/m/ko/promotion/news',
            component: () => import('../views/ko/m/promotion/News.vue'),
            children: [
                {
                    path: '/m/ko/promotion/news/15',
                    component: () => import('../views/ko/m/promotion/NewsItem15.vue'),
                },
                {
                    path: '/m/ko/promotion/news/14',
                    component: () => import('../views/ko/m/promotion/NewsItem14.vue'),
                },
                {
                    path: '/m/ko/promotion/news/13',
                    component: () => import('../views/ko/m/promotion/NewsItem13.vue'),
                },
                {
                    path: '/m/ko/promotion/news/12',
                    component: () => import('../views/ko/m/promotion/NewsItem12.vue'),
                },
                {
                    path: '/m/ko/promotion/news/11',
                    component: () => import('../views/ko/m/promotion/NewsItem11.vue'),
                },
                {
                    path: '/m/ko/promotion/news/10',
                    component: () => import('../views/ko/m/promotion/NewsItem10.vue'),
                },
                {
                    path: '/m/ko/promotion/news/9',
                    component: () => import('../views/ko/m/promotion/NewsItem9.vue'),
                },
                {
                    path: '/m/ko/promotion/news/8',
                    component: () => import('../views/ko/m/promotion/NewsItem8.vue'),
                },
                {
                    path: '/m/ko/promotion/news/7',
                    component: () => import('../views/ko/m/promotion/NewsItem7.vue'),
                },
                {
                    path: '/m/ko/promotion/news/6',
                    component: () => import('../views/ko/m/promotion/NewsItem6.vue'),
                },
                {
                    path: '/m/ko/promotion/news/5',
                    component: () => import('../views/ko/m/promotion/NewsItem5.vue'),
                },
                {
                    path: '/m/ko/promotion/news/4',
                    component: () => import('../views/ko/m/promotion/NewsItem4.vue'),
                },
                {
                    path: '/m/ko/promotion/news/3',
                    component: () => import('../views/ko/m/promotion/NewsItem3.vue'),
                },
                {
                    path: '/m/ko/promotion/news/2',
                    component: () => import('../views/ko/m/promotion/NewsItem2.vue'),
                },
                {
                    path: '/m/ko/promotion/news/1',
                    component: () => import('../views/ko/m/promotion/NewsItem1.vue'),
                }
            ]
        },
        {
            path: '/m/ko/promotion/journal',
            component: () => import('../views/ko/m/promotion/Journal.vue'),
            children: [
                {
                    path: '/m/ko/promotion/journal/8',
                    component: () => import('../views/ko/m/promotion/JournalItem8.vue'),
                },
                {
                    path: '/m/ko/promotion/journal/7',
                    component: () => import('../views/ko/m/promotion/JournalItem7.vue'),
                },
                {
                    path: '/m/ko/promotion/journal/6',
                    component: () => import('../views/ko/m/promotion/JournalItem6.vue'),
                },
                {
                    path: '/m/ko/promotion/journal/5',
                    component: () => import('../views/ko/m/promotion/JournalItem5.vue'),
                },
                {
                    path: '/m/ko/promotion/journal/4',
                    component: () => import('../views/ko/m/promotion/JournalItem4.vue'),
                },
                {
                    path: '/m/ko/promotion/journal/3',
                    component: () => import('../views/ko/m/promotion/JournalItem3.vue'),
                },
                {
                    path: '/m/ko/promotion/journal/2',
                    component: () => import('../views/ko/m/promotion/JournalItem2.vue'),
                },
                {
                    path: '/m/ko/promotion/journal/1',
                    component: () => import('../views/ko/m/promotion/JournalItem1.vue'),
                }
            ]
        },
        {
            path: '/m/ko/qna',
            component: KO_M_QnA,
        },
        {
            path: '/m/ko/recruit',
            component: () => import('../views/ko/m/Recruit.vue'),
        },
        {
            path: '*',
            redirect: '/',
        }

        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.path.indexOf('/news') > -1 || to.path.indexOf('/journal') > -1) {
            // console.log('aaaaaaa', savedPosition)
            return savedPosition
        }

        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

router.beforeEach((to, from, next) => {
    let isMobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true
    }
    // console.log('isMobile =>', isMobile, to.path)
    // 모달이 있을 경우 해제
    $('.modal').modal('hide')

    // // 접속한 언어 확인
    // var enPattern = /\/en\//i;
    // var koPattern = /\/en\//i;

    // console.log(to.path);
    // if (enPattern.test(to.path)) {
    //   console.log('en 입니다.')
    // } else if () {
    //   console.log('ko 입니다.')
    // }

    var mPattern = /^\/m\//i;
    var wPattern = /^\/w\//i;
    if (isMobile) {
        if (wPattern.test(to.path)) {
            next(to.path.replace(wPattern, '/m/'))
        }
    } else {
        if (mPattern.test(to.path)) {
            next(to.path.replace(mPattern, '/w/'))
        }
    }
    next()
})

export default router;