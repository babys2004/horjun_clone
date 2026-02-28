<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { mainInfo } from './Info'
</script>
<template>
  <div class="text-black">
    <div class="bg-white h-13 text-xl font-bold pl-2 pt-3 mb-4">
      Всего книг на сайте : {{ mainInfo['library'].length }}
    </div>
    <div class="bg-yellow-500 h-0.5 w-1/2 -mt-4.5"></div>
    <input
      type="text"
      placeholder="Имя книги"
      class="block mt-4 w-full h-8 rounded pl-3 font-mono text-gray-600 border-1"
    />
    <input
      type="text"
      placeholder="Автор"
      class="block my-1 w-full h-8 rounded pl-3 font-mono text-gray-600 border-1"
    />
    <select name="filterLan" class="w-full h-8 rounded pl-3 font-mono text-gray-600 border-1">
      <option value="1">Turkmençe</option>
      <option value="2">Rusça</option>
      <option value="3">Iňlisçe</option>
      <option value="4">Nemesçe</option>
      <option value="5">Fransuzça</option>
      <option value="6">Parsça</option>
    </select>
    <div class="h-13 flex items-center mt-4 border-b-0.5 border-gray-700">
      <Bars3Icon class="text-white h-6" />
      <p class="text-xl text-white font-semibold ml-1">Категория</p>
    </div>
  </div>
</template>
