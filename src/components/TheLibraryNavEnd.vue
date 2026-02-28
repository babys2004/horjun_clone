<script setup>
  import { fanBook } from './Info';
</script>
<template>
  <div>
    <div class="flex">
      <p class=" h-11 w-2/5 mt-3 text-xl font-bold text-white border-b-2 border-yellow-500">Популярное</p>
      <p class=" h-11 w-3/5 mt-3 text-xl font-bold text-white border-b-2"></p>
    </div>
    <div v-for="book in fanBook" :key="book">
      <div class="flex  text-black bg-white pl-3 pr-15 pt-3 pb-5 rounded-md mt-3">
        <div class="h-35 w-1/3 ">
          <img :src="book['source']" class="h-28 w-30" alt="">
        </div>
        <div class="text-sm ml-5 w-2/3">
          <p class="text-base font-bold w-50 h-10">{{ book['name'] }}</p>
          <p><span class="font-bold">Автор :</span> {{book['author']}}</p>
          <p class=" my-1"><span class="font-bold">Категория :</span> {{ book['category'] }}</p>
          <p class=" mb-1"><span class="font-bold"> Размер :</span> {{ book['size'] }}</p>
          <p> <span class="font-bold">Просмотров :</span>{{ book['view'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>