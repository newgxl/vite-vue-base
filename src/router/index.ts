import { createRouter, createWebHistory } from "vue-router";
//导入页面的路由
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
// 前置路由
router.beforeEach((to, from) => {
})

export default router;
