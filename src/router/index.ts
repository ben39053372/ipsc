import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/Main.vue'),
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('../screens/Home.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../screens/Login.vue'),
      },
      {
        path: '/signUp',
        name: 'Sign Up',
        component: () => import('../screens/SignUp.vue'),
      },
      {
        path: '/course',
        name: 'Course',
        component: () => import('../screens/Course.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../screens/404.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
