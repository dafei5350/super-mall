import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue');
const Cart = () => import('../views/cart/cart.vue');
const Profile = () => import('../views/profile/profile.vue');

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      title: '购物车'
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',

})
router.beforeEach((to, from, next) =>{
  document.title = to.meta.title || 'super-mall'
  next()
})

export default router