import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriaView.vue'),
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductoView.vue'),
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: () => import('../views/VentaView.vue'),
    },
    {
      path: '/detalle-ventas', // Asegúrate de que este path coincida exactamente con el RouterLink
      name: 'detalle-ventas',
      component: () => import('../views/DetalleVentaView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach(async to => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore() // Asegúrate de que useAuthStore esté disponible

  // Verifica si la página requiere autenticación y si el token no está presente
  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) {
      authStore.logout() // Deslogea al usuario
    }
    authStore.returnUrl = to.fullPath // Guarda la URL a la que intentarían acceder
    return '/login' // Redirige al login
  }
})

export default router
