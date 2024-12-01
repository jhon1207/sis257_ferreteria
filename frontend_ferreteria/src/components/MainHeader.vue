<script setup lang="ts">
import { useAuthStore } from '@/stores'
import { useRoute } from 'vue-router'
const authStore = useAuthStore()
const location = useRoute()

</script>

<template>
  <div>
  <!-- Spinner Start -->
  <div
    id="spinner"
    class="spinner show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      class="spinner-border text-primary"
      style="width: 3rem; height: 3rem"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <!-- Spinner End -->

  <!-- Header Start -->
  <header class="site-header bg-light">
    <div class="container">
      <div class="row"></div>
    </div>
  </header>
  <!-- Header End -->

  <!-- Topbar Start -->
  <div class="topbar container-fluid bg-light p-0">
    <div class="row gx-0 d-none d-lg-flex">
      <div class="col-lg-7 px-5 text-start">
        <div class="address h-100 d-inline-flex align-items-center py-3 me-4">
          <small class="fa fa-map-marker-alt text-primary me-2"></small>
          <small>Avenida Principal, Sucre, Bolivia</small>
        </div>
        <div class="schedule h-100 d-inline-flex align-items-center py-3">
          <small class="far fa-clock text-primary me-2"></small>
          <small id="current-time"></small>
        </div>
      </div>
      <div class="col-lg-5 px-5 text-end">
        <div class="contact h-100 d-inline-flex align-items-center py-3 me-4">
          <small class="fa fa-phone-alt text-primary me-2"></small>
          <small>+012 345 6789</small>
        </div>
        <div class="social h-100 d-inline-flex align-items-center">
          <a class="btn btn-sm-square bg-white text-primary me-1" href=""
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="btn btn-sm-square bg-white text-primary me-1" href=""
            ><i class="fab fa-twitter"></i
          ></a>
          <a class="btn btn-sm-square bg-white text-primary me-1" href=""
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a class="btn btn-sm-square bg-white text-primary me-0" href=""
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
    :style="location.path != '/' ? 'background-color: black' : ''"
  >
    <div class="container">
      <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 class="m-0 text-primary">
          <i class="fa fa-car me-3"></i>Ferreteria
        </h2>
      </a>

      <RouterLink
        v-if="!authStore.token"
        to="/login"
        class="btn login-btn custom-btn d-lg-none ms-auto me-4"
        >Iniciar Sesión</RouterLink
      >
      <a
        v-else
        @click="authStore.logout()"
        class="btn logout-btn custom-btn d-lg-none ms-auto me-4"
        >Salir</a
      >

      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link click-scroll"
              >Inicio</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link click-scroll"
              >Acerca De</RouterLink
            >
          </li>

          <slot v-if="authStore.token">
            <li class="nav-item">
              <RouterLink to="/productos" class="nav-link click-scroll"
                >Productos</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/categorias" class="nav-link click-scroll"
                >Categorias</RouterLink
              >
            </li>
            <li class="nav-item">
            <RouterLink to="/clientes" class="nav-link click-scroll"
              >Clientes</RouterLink
            >
          </li>
            <li class="nav-item">
              <RouterLink to="/ventas" class="nav-link click-scroll"
                >Ventas</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/detalles_ventas" class="nav-link click-scroll"
                >Detalles Ventas</RouterLink
              >
            </li>
            <li class="nav-item">
              <a class="nav-link click-scroll">Hola {{ authStore.user }}</a>
            </li>
          </slot>
        </ul>

        <RouterLink
          v-if="!authStore.token"
          to="/login"
          class="btn login-btn custom-btn d-lg-block d-none"
          >Iniciar Sesión</RouterLink
        >
        <a
          v-else
          @click="authStore.logout()"
          class="btn logout-btn custom-btn d-lg-block d-none"
          >Salir</a
        >
      </div>
    </div>
  </nav>
  <!-- Navbar End -->
</div>

</template>

<style scoped></style>
