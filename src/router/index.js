import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { PAGE_ROUTER_DATA } from '../constants/page-router-data.constant';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...PAGE_ROUTER_DATA.home.main,
      component: HomeView
    },
    {
      ...PAGE_ROUTER_DATA.post.main,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostView.vue')
    },
    {
      ...PAGE_ROUTER_DATA.post.children.detail,
      component: () => import('../views/PostDetailView.vue')
    }
  ]
})

export default router;
