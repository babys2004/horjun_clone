<script setup>
import { MicrophoneIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="mb-5">
    <p class="text-xl mt-4 mb-2">Исполнители</p>
    <hr class="mb-7 border-gray-700" />
    <input
      type="text"
      placeholder="Введите текст"
      class="w-full h-10 rounded pl-3 font-mono text-gray-600 border-1"
    />
    <p class="text-xl mb-2 mt-4">Основные</p>
    <hr class="border-gray-700" />
    <div class="h-20 px-5 text-gray-400 flex items-center">
      <MicrophoneIcon class="w-4 mr-3" />
      <p>Песни</p>
    </div>
    <hr class="mb-7 border-gray-700" />
    <div class="mb-5">
      <p class="text-2xl mb-2">Страны</p>
      <input
        type="text"
        placeholder="Введите текст"
        class="w-full h-10 rounded pl-3 font-mono text-gray-600 border-1"
      />
      <p class="h-10 text-xl my-5 border-b border-gray-700">Жанры</p>
    </div>
  </div>
</template>
