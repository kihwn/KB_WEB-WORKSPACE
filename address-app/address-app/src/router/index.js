import { createRouter, createWebHistory } from 'vue-router';
import BoardReadList from '../components/BoardReadList.vue';
import BoardCreate from '../components/BoardCreate.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: BoardReadList },
  { path: '/create', component: BoardCreate },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
