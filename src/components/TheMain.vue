<script setup>
import {
  CalendarDaysIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from '@heroicons/vue/24/solid'
import { mainGrid, mainInfo, menuMain } from './Info'
import { inject } from 'vue'
const customNav = inject('change')
const page = 100
</script>
<template>
  <div class="w-full text-white pl-4">
    <div v-show="customNav != 'music'">
      <p class="w-100 text-2xl text-red-600 font-semibold">{{ menuMain[customNav] }}</p>
      <hr class="border-gray-600 mt-2" />
    </div>
    <div
      :class="mainGrid[customNav]"
      class="mt-10 text-xs text-slate-400 grid gap-4 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-4"
    >
      <div v-for="item in mainInfo[customNav]" :key="item" class="ml-2">
        <div>
          <div v-if="customNav != 'music'" class="relative group">
            <img :src="item['source']" :alt="item['movieName']" class="w-60 rounded-md" />
            <div
              class="w-full pl-1 bottom-0 bg-black opacity-70 absolute text-[16px] text-white invisible group-hover:visible"
            >
              <div class="flex">
                {{ item['rating'] }}
                <div v-for="star in item['rating']" :key="star">
                  <StarIcon class="w-2.5 ml-1.5 mt-1.5 text-yellow-400" />
                </div>
              </div>
              <span v-if="customNav == 'movie'">{{ item['date'] }} , {{ item['country'] }} ,</span>
              {{ item['genre'] }}
              <div>{{ item['time'] }}</div>
            </div>
          </div>
          <div v-else class="bg-white rounded-3xl pt-3">
            <div class="h-58.5 w-58.5 rounded-full shadow-xl shadow-gray-300 mx-auto">
              <img
                :src="item['source']"
                class="w-58 h-58 mr-0.5 rounded-full object-cover animat-spin"
                alt=""
              />
              <div class="relative bottom-38 left-20 bg-white w-15 h-15 rounded-full"></div>
            </div>
            <div class="h-full text-center pb-1">
              <p class="text-xl font-semibold">{{ item['name'] }}</p>
              <hr class="bg-gray-400 w-30 h-2 rounded-full mt-7 mx-auto" />
            </div>
          </div>
        </div>
        <div v-if="customNav != 'music'">
          <div class="flex">
            <a class="flex items-center">
              <CalendarDaysIcon class="h-5 w-3 mr-1" />
              <p>{{ item['addDate'] }}</p>
            </a>
            <a class="flex items-center">
              <EyeIcon class="h-5 w-3 mx-1" />
              <p>{{ item['view'] }}</p>
            </a>
          </div>
          <a class="text-white font-bold">
            {{ item['name'] }}
          </a>
        </div>
      </div>
    </div>
    <div class="flex mt-20 text-center ml-50 text-black">
      <div class="h-9 w-9 rounded-lg bg-white mr-2">
        <ChevronLeftIcon class="w-4 m-auto mt-2.5" />
      </div>
      <div v-for="i in page" :key="i">
        <div
          v-show="i <= 10"
          :class="[{ 'bg-blue-600': i == 1 }, 'h-9 w-9 rounded-lg bg-white  mr-2 pt-1.5']"
        >
          {{ i }}
        </div>
        <div v-show="i == 11" class="h-9 w-9 rounded-lg bg-white mr-2 pt-1.5">...</div>
        <div v-show="i == 45 || i == 46" class="h-9 w-9 rounded-lg bg-white mr-2 pt-1.5">
          {{ i }}
        </div>
      </div>
      <div class="h-9 w-9 rounded-lg bg-white">
        <ChevronRightIcon class="w-4 m-auto mt-2.5" />
      </div>
    </div>
  </div>
</template>
