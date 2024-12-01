<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/index'

const usuario = ref('')
const clave = ref('')
const error = ref(false)

function onSubmit() {
  const authStore = useAuthStore()
  authStore.login(usuario.value, clave.value).catch(() => (error.value = true))
}
</script>
<template>
  <div class="login-container">
    <div class="form-container">
      <h1 class="text-center text-white mb-5">
        Iniciar Sesión
      </h1>
      <form class="form" @submit.prevent="onSubmit">
        <!-- Usuario -->
        <div class="form-group">
          <label class="form-label">Usuario:</label>
          <div class="input-group">
            <input
              v-model="usuario"
              type="text"
              class="form-input"
              placeholder="Usuario"
              autofocus
            />
          </div>
        </div>

        <!-- Contraseña -->
        <div class="form-group">
          <label class="form-label">Contraseña:</label>
          <div class="input-group">
            <input
              v-model="clave"
              type="password"
              class="form-input"
              placeholder="Contraseña"
            />
          </div>
        </div>

        <!-- Error message -->
        <p v-if="error" class="text-danger text-center">Usuario y/o contraseña incorrectos</p>

        <!-- Submit button -->
        <div class="text-center">
          <input type="submit" class="form-submit" value="Ingresar" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.login-container {
  background-image: url('../assets/img/login.jpg'); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 450px;
  background: rgba(74, 85, 93, 0.8); /* Fondo oscuro semitransparente */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

h1 {
  font-size: 2.2rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  color: white;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.input-group {
  display: flex;
  align-items: center;
}

.form-input {
  padding: 10px 15px;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 5px;
  width: 100%;
}

.form-submit {
  background: #ee5007;
  border: none;
  border-radius: 25px;
  color: white;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s;
}

.form-submit:hover {
  background: #d64500;
}

.text-danger {
  font-size: 0.9rem;
}
</style>
