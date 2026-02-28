<script setup>
 import { alpEn,alpRu } from './Info';
</script>
<template>
  <div>
    <div class=" w-full font-semibold grid grid-cols-5 gap-x-6 pr-8">
      <div v-for="al in alpEn" :key="al" class=" h-14 w-14 mt-1 pt-2 bg-gray-950 opacity-40 text-2xl text-center text-cyan-400">          
        {{al}}
      </div>
    </div>
    <hr class=" my-7 border-gray-700">
    <div class=" font-semibold w-full grid grid-cols-5 gap-x-6 pr-8 mb-5">
      <div v-for="al in alpRu" :key="al" class=" h-14 w-14 mt-1 pt-2 bg-gray-950 opacity-40 text-2xl text-center text-cyan-400">          
        {{al}}
      </div>
    </div>
  </div>
</template>