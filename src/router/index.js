import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

import KO_W_Home from '../views/ko/w/Home.vue'
import KO_W_Introduce from '../views/ko/w/Introduce.vue'
import KO_W_Technology from '../views/ko/w/Technology.vue'
import KO_W_ProdSMPL from '../views/ko/w/product/SMP-L.vue'
import KO_W_ProdSMPB from '../views/ko/w/product/SMP-B.vue'
import KO_W_ProdSMPV from '../views/ko/w/product/SMP-V.vue'
import KO_W_ProdTNV from '../views/ko/w/product/TNV.vue'
// import KO_W_PromNews from '../views/ko/w/promotion/News.vue'
// import KO_W_PromNewsItem1 from '../views/ko/w/promotion/NewsItem1.vue'
// import KO_W_PromNewsItem2 from '../views/ko/w/promotion/NewsItem2.vue'
// import KO_W_PromNewsItem3 from '../views/ko/w/promotion/NewsItem3.vue'
// import KO_W_PromNewsItem4 from '../views/ko/w/promotion/NewsItem4.vue'
// import KO_W_PromNewsItem5 from '../views/ko/w/promotion/NewsItem5.vue'
// import KO_W_PromNewsItem6 from '../views/ko/w/promotion/NewsItem6.vue'
// import KO_W_PromNewsItem7 from '../views/ko/w/promotion/NewsItem7.vue'
// import KO_W_PromNewsItem8 from '../views/ko/w/promotion/NewsItem8.vue'
// import KO_W_PromNewsItem9 from '../views/ko/w/promotion/NewsItem9.vue'
// import KO_W_PromNewsItem10 from '../views/ko/w/promotion/NewsItem10.vue'
// import KO_W_PromNewsItem11 from '../views/ko/w/promotion/NewsItem11.vue'
// import KO_W_PromJournal from '../views/ko/w/promotion/Journal.vue'
// import KO_W_PromJournalItem1 from '../views/ko/w/promotion/JournalItem1.vue'
// import KO_W_PromJournalItem2 from '../views/ko/w/promotion/JournalItem2.vue'
// import KO_W_PromJournalItem3 from '../views/ko/w/promotion/JournalItem3.vue'
// import KO_W_PromJournalItem4 from '../views/ko/w/promotion/JournalItem4.vue'
import KO_W_QnA from '../views/ko/w/QnA.vue'

import KO_M_Home from '../views/ko/m/Home.vue'
import KO_M_Introduce from '../views/ko/m/Introduce.vue'
import KO_M_Technology from '../views/ko/m/Technology.vue'
import KO_M_ProdSMPL from '../views/ko/m/product/SMP-L.vue'
import KO_M_ProdSMPB from '../views/ko/m/product/SMP-B.vue'
import KO_M_ProdSMPV from '../views/ko/m/product/SMP-V.vue'
import KO_M_ProdTNV from '../views/ko/m/product/TNV.vue'
// import KO_M_PromNews from '../views/ko/m/promotion/News.vue'
// import KO_M_PromNewsItem1 from '../views/ko/m/promotion/NewsItem1.vue'
// import KO_M_PromNewsItem2 from '../views/ko/m/promotion/NewsItem2.vue'
// import KO_M_PromNewsItem3 from '../views/ko/m/promotion/NewsItem3.vue'
// import KO_M_PromNewsItem4 from '../views/ko/m/promotion/NewsItem4.vue'
// import KO_M_PromNewsItem5 from '../views/ko/m/promotion/NewsItem5.vue'
// import KO_M_PromNewsItem6 from '../views/ko/m/promotion/NewsItem6.vue'
// import KO_M_PromNewsItem7 from '../views/ko/m/promotion/NewsItem7.vue'
// import KO_M_PromNewsItem8 from '../views/ko/m/promotion/NewsItem8.vue'
// import KO_M_PromNewsItem9 from '../views/ko/m/promotion/NewsItem9.vue'
// import KO_M_PromNewsItem10 from '../views/ko/m/promotion/NewsItem10.vue'
// import KO_M_PromNewsItem11 from '../views/ko/m/promotion/NewsItem11.vue'
// import KO_M_PromJournal from '../views/ko/m/promotion/Journal.vue'
// import KO_M_PromJournalItem1 from '../views/ko/m/promotion/JournalItem1.vue'
// import KO_M_PromJournalItem2 from '../views/ko/m/promotion/JournalItem2.vue'
// import KO_M_PromJournalItem3 from '../views/ko/m/promotion/JournalItem3.vue'
// import KO_M_PromJournalItem4 from '../views/ko/m/promotion/JournalItem4.vue'
import KO_M_QnA from '../views/ko/m/QnA.vue'

import EN_W_Home from '../views/en/w/Home.vue'
import EN_W_Introduce from '../views/en/w/Introduce.vue'
import EN_W_Technology from '../views/en/w/Technology.vue'
import EN_W_ProdSMPL from '../views/en/w/product/SMP-L.vue'
import EN_W_ProdSMPB from '../views/en/w/product/SMP-B.vue'
import EN_W_ProdSMPV from '../views/en/w/product/SMP-V.vue'
import EN_W_ProdTNV from '../views/en/w/product/TNV.vue'
// import EN_W_PromNews from '../views/en/w/promotion/News.vue'
// import EN_W_PromNewsItem1 from '../views/en/w/promotion/NewsItem1.vue'
// import EN_W_PromNewsItem2 from '../views/en/w/promotion/NewsItem2.vue'
// import EN_W_PromNewsItem3 from '../views/en/w/promotion/NewsItem3.vue'
// import EN_W_PromNewsItem4 from '../views/en/w/promotion/NewsItem4.vue'
// import EN_W_PromNewsItem5 from '../views/en/w/promotion/NewsItem5.vue'
// import EN_W_PromNewsItem6 from '../views/en/w/promotion/NewsItem6.vue'
// import EN_W_PromNewsItem7 from '../views/en/w/promotion/NewsItem7.vue'
// import EN_W_PromNewsItem8 from '../views/en/w/promotion/NewsItem8.vue'
// import EN_W_PromNewsItem9 from '../views/en/w/promotion/NewsItem9.vue'
// import EN_W_PromNewsItem10 from '../views/en/w/promotion/NewsItem10.vue'
// import EN_W_PromNewsItem11 from '../views/en/w/promotion/NewsItem11.vue'
// import EN_W_PromJournal from '../views/en/w/promotion/Journal.vue'
// import EN_W_PromJournalItem1 from '../views/en/w/promotion/JournalItem1.vue'
// import EN_W_PromJournalItem2 from '../views/en/w/promotion/JournalItem2.vue'
// import EN_W_PromJournalItem3 from '../views/en/w/promotion/JournalItem3.vue'
// import EN_W_PromJournalItem4 from '../views/en/w/promotion/JournalItem4.vue'
import EN_W_QnA from '../views/en/w/QnA.vue'

import EN_M_Home from '../views/en/m/Home.vue'
import EN_M_Introduce from '../views/en/m/Introduce.vue'
import EN_M_Technology from '../views/en/m/Technology.vue'
import EN_M_ProdSMPL from '../views/en/m/product/SMP-L.vue'
import EN_M_ProdSMPB from '../views/en/m/product/SMP-B.vue'
import EN_M_ProdSMPV from '../views/en/m/product/SMP-V.vue'
import EN_M_ProdTNV from '../views/en/m/product/TNV.vue'
// import EN_M_PromNews from '../views/en/m/promotion/News.vue'
// import EN_M_PromNewsItem1 from '../views/en/m/promotion/NewsItem1.vue'
// import EN_M_PromNewsItem2 from '../views/en/m/promotion/NewsItem2.vue'
// import EN_M_PromNewsItem3 from '../views/en/m/promotion/NewsItem3.vue'
// import EN_M_PromNewsItem4 from '../views/en/m/promotion/NewsItem4.vue'
// import EN_M_PromNewsItem5 from '../views/en/m/promotion/NewsItem5.vue'
// import EN_M_PromNewsItem6 from '../views/en/m/promotion/NewsItem6.vue'
// import EN_M_PromNewsItem7 from '../views/en/m/promotion/NewsItem7.vue'
// import EN_M_PromNewsItem8 from '../views/en/m/promotion/NewsItem8.vue'
// import EN_M_PromNewsItem9 from '../views/en/m/promotion/NewsItem9.vue'
// import EN_M_PromNewsItem10 from '../views/en/m/promotion/NewsItem10.vue'
// import EN_M_PromNewsItem11 from '../views/en/m/promotion/NewsItem11.vue'
// import EN_M_PromJournal from '../views/en/m/promotion/Journal.vue'
// import EN_M_PromJournalItem1 from '../views/en/m/promotion/JournalItem1.vue'
// import EN_M_PromJournalItem2 from '../views/en/m/promotion/JournalItem2.vue'
// import EN_M_PromJournalItem3 from '../views/en/m/promotion/JournalItem3.vue'
// import EN_M_PromJournalItem4 from '../views/en/m/promotion/JournalItem4.vue'
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
      component: EN_W_Introduce,
    },
    {
      path: '/w/en/technology',
      component: EN_W_Technology,
    },
    {
      path: '/w/en/product/smp-l',
      component: EN_W_ProdSMPL,
    },
    {
      path: '/w/en/product/smp-b',
      component: EN_W_ProdSMPB,
    },
    {
      path: '/w/en/product/smp-v',
      component: EN_W_ProdSMPV,
    },
    {
      path: '/w/en/product/tnv',
      component: EN_W_ProdTNV,
    },
    {
        path: '/w/en/promotion/news',
        component: () => import('../views/en/w/promotion/News.vue'),
        children: [
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
      component: EN_M_Introduce
    },
    {
      path: '/m/en/technology',
      component: EN_M_Technology
    },
    {
      path: '/m/en/product/',
      redirect: '/m/en/product/smp-l',
    },
    {
      path: '/m/en/product/smp-l',
      component: EN_M_ProdSMPL,
    },
    {
      path: '/m/en/product/smp-b',
      component: EN_M_ProdSMPB,
    },
    {
      path: '/m/en/product/smp-v',
      component: EN_M_ProdSMPV,
    },
    {
      path: '/m/en/product/tnv',
      component: EN_M_ProdTNV,
    },
    {
        path: '/m/en/promotion/news',
        component: () => import('../views/en/m/promotion/News.vue'),
        children: [
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
      component: KO_W_Introduce,
    },
    {
      path: '/w/ko/technology',
      component: KO_W_Technology,
    },
    {
      path: '/w/ko/product/smp-l',
      component: KO_W_ProdSMPL,
    },
    {
      path: '/w/ko/product/smp-b',
      component: KO_W_ProdSMPB,
    },
    {
      path: '/w/ko/product/smp-v',
      component: KO_W_ProdSMPV,
    },
    {
      path: '/w/ko/product/tnv',
      component: KO_W_ProdTNV,
    },
    {
        path: '/w/ko/promotion/news',
        component: () => import('../views/ko/w/promotion/News.vue'),
        children: [
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
      component: KO_M_Introduce
    },
    {
      path: '/m/ko/technology',
      component: KO_M_Technology
    },
    {
      path: '/m/ko/product/',
      redirect: '/m/ko/product/smp-l',
    },
    {
      path: '/m/ko/product/smp-l',
      component: KO_M_ProdSMPL,
    },
    {
      path: '/m/ko/product/smp-b',
      component: KO_M_ProdSMPB,
    },
    {
      path: '/m/ko/product/smp-v',
      component: KO_M_ProdSMPV,
    },
    {
      path: '/m/ko/product/tnv',
      component: KO_M_ProdTNV,
    },
    {
        path: '/m/ko/promotion/news',
        component: () => import('../views/ko/m/promotion/News.vue'),
        children: [
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
  scrollBehavior (to, from, savedPosition) {
    if (to.path.indexOf('/news') > -1 || to.path.indexOf('/journal') > -1) {
      // console.log('aaaaaaa', savedPosition)
      return savedPosition
    }

    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  let isMobile = false
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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