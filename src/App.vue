<script setup>
import { provide, ref } from 'vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import TheLogin from './components/TheLogin.vue'
import TheMain from './components/TheMain.vue'
import TheNav from './components/TheNav.vue'
import TheMovieMain from './components/TheMovieMain.vue'
const customNav = ref('movie')
const log = ref('sign in')
const isLoginOpen = ref(false)
function updateMain(key) {
  customNav.value = key
}
function loginUpdate(bool, str) {
  isLoginOpen.value = bool
  log.value = str
}
provide('change', customNav)
provide('sign in', log)
provide('openLogin', isLoginOpen)
</script>
<template>
  <TheLogin />
  <TheHeader @update="updateMain" @update-is-login="loginUpdate" />
  <TheMovieMain v-if="customNav == 'main'" />
  <main v-else-if="customNav != 'main' && customNav != 'online'" class="flex bg-slate-950 my-30">
    <TheNav />
    <TheMain />
  </main>
  <TheFooter />
</template>
