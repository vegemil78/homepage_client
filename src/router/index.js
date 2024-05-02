import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
//import MainPage from '@/views//pages/Main.vue'
//import BoardPage from '@/views/pages/Board.vue'
import WritePage from '@/views/pages/BoardWrite.vue'
import BindTestPage from '@/views/DataBindingList.vue'
//import ContentPage from '@/views/pages/Content.vue'
import ImageInsert from '@/views/ImageInsert.vue'
import SalesList from '@/views/SalesList.vue' 


const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageAbout.vue')
  },
  // {
  //   path: '/board/list',
  //   name: 'BoardList',
  //   component: BoardList
  // }
  
    {
    path: '/board/BoardWrite',
    name: 'Boardwrite',
    component: WritePage
  },
  {
    path: '/bindtest', 
    name: 'Bindtest',
    component: BindTestPage
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router