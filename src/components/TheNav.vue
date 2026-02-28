<script setup>
import TheMusicNavStart from './TheMusicNavStart.vue'
import TheLibraryNavStart from './TheLibraryNavStart.vue'
import TheLibraryNavEnd from './TheLibraryNavEnd.vue'
import { inject } from 'vue'
import { nav, series } from './Info'
import TheMovieNavEnd from './TheMovieNavEnd.vue'
import TheMusicNavEnd from './TheMusicNavEnd.vue'

const customNav = inject('change')
</script>
<template>
  <div
    class="pt-2 w-115 h-full truncate bg-slate-900 shadow-md px-3 text-white"
    :class="{ 'px-5': customNav == 'music' }"
  >
    <TheMusicNavStart v-show="customNav == 'music'" />
    <TheLibraryNavStart v-show="customNav == 'library'" />
    <div v-show="customNav != 'music' && customNav != 'library'">
      <div class="h-10 text-2xl mb-8 border-b-1 border-gray-700">Жанры</div>
      <input
        type="text"
        placeholder="Введите текст"
        class="w-full h-10 rounded pl-3 font-mono text-gray-600 border-1"
      />
    </div>
    <div class="grid grid-cols-2 my-5">
      <div v-for="i in nav[customNav]" :key="i">
        <div class="flex mt-0.5">
          <input type="checkbox" />
          <div class="ml-2 truncate">{{ i }}</div>
        </div>
      </div>
    </div>
    <div v-show="nav[customNav][0] == 'Топ Фильмы'">
      <div class="h-10 text-2xl mb-8 border-b-1 border-gray-700">Сериалы</div>
      <div class="grid grid-cols-2 my-5">
        <div v-for="i in series" :key="i">
          <div class="flex mt-0.5">
            <input type="checkbox" />
            <div class="ml-2 truncate">{{ i }}</div>
          </div>
        </div>
      </div>
    </div>
    <TheMovieNavEnd v-show="customNav == 'movie'" />
    <TheMusicNavEnd v-show="customNav == 'music'" />
    <TheLibraryNavEnd v-show="customNav == 'library'" />
  </div>
</template>
