<script setup>
import { i1, i2, nextPg, prevPg, goLine, stopLine } from '@/components/function'
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/solid'
import { mainMovie1, mainMovie2, mainMovieTable } from './Info'
</script>
<template>
  <div class="h-155 mt-20 flex overflow-hidden relative">
    <div class="flex">
      <div
        class="w-screen"
        :style="{ translate: -i1 + '%' }"
        :class="[i1 <= 400 && i1 >= -100 ? ' transition-transform duration-500' : '']"
        v-for="movie in mainMovie1"
        :key="movie"
      >
        <img :src="movie['source']" alt="" class="w-500 h-155 shrink-0 object-cover" />
        <div class="absolute h-104 w-140 left-20 bottom-30 text-white flex flex-col justify-around">
          <div>
            <div class="text-7xl hover:text-sky-500 font-bold mb-5">{{ movie['name'] }}</div>
            <div class="flex mb-5">
              <div>{{ movie['date'] }}</div>
              <div class="h-2 px-3 border-r-2 border-l-2 mt-2.5 mx-3">
                <div class="-mt-2.5">{{ movie['genre'] }}</div>
              </div>
              <div>{{ movie['time'] }}</div>
            </div>
            <div class="flex mb-5">
              <div><EyeIcon class="inline-block w-4 -mt-0.5" /> {{ movie['view'] }}</div>
              <div class="border-l-2 h-2 mt-2.5 mx-3"></div>
              <div class="flex">
                {{ movie['rating'] }}
                <div v-for="star in movie['rating']" :key="star">
                  <StarIcon class="w-2.5 text-yellow-400 ml-1.5 mt-2" />
                </div>
              </div>
            </div>
            <button class="bg-sky-400 px-5 py-2 rounded-sm">Посмотреть</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div
        class="w-screen"
        :style="{ translate: -i2 + '%' }"
        :class="[i2 <= 800 && i2 >= 300 ? ' transition-transform duration-500' : '']"
        v-for="movie in mainMovie2"
        :key="movie"
      >
        <img :src="movie['source']" alt="" class="w-500 h-155 shrink-0 object-cover" />
        <div class="absolute h-104 w-140 left-20 bottom-30 text-white flex flex-col justify-around">
          <div>
            <div class="text-7xl hover:text-sky-500 font-bold mb-5">{{ movie['name'] }}</div>
            <div class="flex mb-5">
              <div>{{ movie['date'] }}</div>
              <div class="h-2 px-3 border-r-2 border-l-2 mt-2.5 mx-3">
                <div class="-mt-2.5">{{ movie['genre'] }}</div>
              </div>
              <div>{{ movie['time'] }}</div>
            </div>
            <div class="flex mb-5">
              <div><EyeIcon class="inline-block w-4 -mt-0.5" /> {{ movie['view'] }}</div>
              <div class="border-l-2 h-2 mt-2.5 mx-3"></div>
              <div class="flex">
                {{ movie['rating'] }}
                <div v-for="star in movie['rating']" :key="star">
                  <StarIcon class="w-2.5 text-yellow-400 ml-1.5 mt-2" />
                </div>
              </div>
            </div>
            <button class="bg-sky-400 px-5 py-2 rounded-sm">Посмотреть</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ChevronLeftIcon
        class="absolute bg-white text-gray-300 left-0 top-80 h-10 p-2 rounded-full hover:bg-sky-500 hover:text-white duration-200"
        @click="prevPg"
      />
      <ChevronRightIcon
        class="absolute bg-white text-gray-300 right-0 top-80 h-10 p-2 rounded-full hover:bg-sky-500 hover:text-white duration-200"
        @click="nextPg"
      />
    </div>

    <div class="h-100 w-160 absolute right-30 bottom-18">
      <h4 class="h-8 text-white text-2xl mb-3">Выбрано</h4>
      <div class="grid grid-cols-3 gap-y-3">
        <div v-for="movie in mainMovieTable" :key="movie">
          <img :src="movie['source']" class="h-30 w-51 rounded-sm" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div>
    <button
      class="fixed text-white left-70 top-125 mt-5 ml-2 h-6 px-2 rounded-full border hover:bg-sky-500 hover:text-white duration-200"
      @click="goLine"
    >
      start
    </button>
    <button
      class="fixed text-white left-50 top-130 ml-2 h-6 px-2 rounded-full border hover:bg-sky-500 hover:text-white duration-200"
      @click="stopLine"
    >
      stop
    </button>
  </div>
</template>
