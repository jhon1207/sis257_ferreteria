<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

/*import 'https://code.jquery.com/jquery-3.4.1.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js';
import '@/assets/lib/wow/wow.min.js';
import '@/assets/lib/easing/easing.min.js';
import '@/assets/lib/waypoints/waypoints.min.js';
import '@/assets/lib/counterup/counterup.min.js';
import '@/assets/lib/owlcarousel/owl.carousel.min.js';
import '@/assets/lib/tempusdominus/js/moment.min.js';
import '@/assets/lib/tempusdominus/js/moment-timezone.min.js';
import '@/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js';*/

import '@/assets/js/main.js'
</script>

<template>
  <main>
    <MainHeader />
    <RouterView />
    <MainFooter />
  </main>
</template>

<style>
/*@import '@/assets/lib/animate/animate.css';
@import '@/assets/lib/owlcarousel/assets/owl.carousel.css';
@import '@/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';*/

@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/style.css';
</style>
