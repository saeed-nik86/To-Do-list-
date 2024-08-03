import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Container from '../views/Container.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Container',
    component: Container
  },
  {
    path: "/addwork",
    name: "Addcontainer",
    component: ()=> import("../views/Addcontainer.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
