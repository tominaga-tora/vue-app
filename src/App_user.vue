<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
const id = ref(null)
</script>

<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <input type="number" v-model="id" />
    <router-link :to="`/user/${id}`">User</router-link>
  </div>
  <router-view msg="Vite + Vue"></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.nav {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
