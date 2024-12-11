import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Cats from '../views/CatsPage.vue';
import Dogs from '../views/DogsPage.vue';
import Birds from '../views/BirdsPage.vue';
import Fish from '../views/FishPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cats', // Default route
  },
  {
    path: '/cats',
    component: Cats,
  },
  {
    path: '/dogs',
    component: Dogs,
  },
  {
    path: '/birds',
    component: Birds,
  },
  {
    path: '/fish',
    component: Fish,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
