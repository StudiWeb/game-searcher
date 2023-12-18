import { createRouter, createWebHistory } from 'vue-router'
import GamesView from "@/views/GamesView.vue";
import StoresView from "@/views/StoresView.vue";
import DevelopersView from "@/views/DevelopersView.vue";
import PublishersView from "@/views/PublishersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: {name: 'games'} },
    { path: '/games',name: 'games', component: GamesView },
    { path: '/stores',name: 'stores', component: StoresView },
    { path: '/developers',name: 'developers', component: DevelopersView },
    { path: '/publishers',name: 'publishers', component: PublishersView },
  ]
})

export default router
