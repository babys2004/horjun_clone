<script setup>
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { defineEmits, ref, onMounted, onUnmounted } from 'vue'
import { menuHeader, any } from './Info'
import { movieMain } from './function'
const emit = defineEmits(['update'], ['updateIsLogin'])
const updateMain = (info) => {
  emit('update', info)
}
const updateLogin = (bool, str) => {
  emit('updateIsLogin', bool, str)
}
const isLoginActive = ref(null)
const changeLan = ref('tm')
const closeModal = (event) => {
  if (event.target.id !== 'modal-background') {
    isLoginActive.value = false
  }
}
onMounted(() => {
  window.addEventListener('click', closeModal)
})

onUnmounted(() => {
  window.removeEventListener('click', closeModal)
})
</script>
<template>
  <header
    class="z-30 fixed flex font-normal justify-between items-center w-full bg-white top-0 h-20 shadow-md pt-5 shadow-slate-800"
  >
    <div class="ml-3 flex items-center w-2/3">
      <img src="/src/image/logo/homemy.png" class="h-9 mr-20" />
      <div class="relative items-center flex w-280 justify-between max-xl:hidden">
        <div v-for="(item, key) in menuHeader" :key="key">
          <div
            @click="[movieMain, updateMain(key)]"
            class="flex items-center h-15 hover:text-blue-500 transition duration-200 group"
          >
            <div class="cursor-default">{{ item }}</div>
            <ChevronDownIcon
              class="h-3.5"
              :class="{ hidden: item != 'Онлайн ТВ' && item != 'Другие' }"
            />
            <div
              class="invisible absolute top-18 -right-60 px-3 cursor-default bg-slate-50 group-hover:text-black group-hover:transition-all duration-100"
              :class="
                item == 'Другие'
                  ? 'group-hover:visible group-hover:top-15 group-hover:opacity-100'
                  : ' group-hover:opacity-0'
              "
            >
              <div
                v-for="i in any"
                :key="i"
                class="flex w-76 pl-5 pr-3 items-center hover:text-blue-500"
              >
                <div class="flex items-center border-b border-slate-300 h-15 w-70">
                  <img :src="i['imgUrl']" class="w-8 h-8" alt="" />
                  <div @click.self="updateMain(i['id'])" class="text-start py-4 pl-3 font-bold">
                    {{ i['name'] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-50">
      <div class="flex w-2/3 justify-around">
        <div class="relative w-10">
          <p class="flex justify-around cursor-default" @click="changeLan = 'tm'">TM</p>
          <span
            class="absolute bg-red-500 h-0.5 right-0 transition-all ease-linear"
            :class="changeLan == 'tm' ? 'left-0 duration-150' : 'left-10 duration-75'"
          ></span>
        </div>
        <div class="relative w-10">
          <p class="flex justify-around cursor-default" @click="changeLan = 'ru'">RU</p>
          <span
            class="absolute bg-red-500 h-0.5 left-0 transition-all ease-linear"
            :class="changeLan == 'ru' ? 'right-0 duration-150' : 'right-10 duration-75'"
          ></span>
        </div>
      </div>

      <div
        id="modal-background"
        class="flex items-center w-1/3 group"
        @click.self="isLoginActive = !isLoginActive"
      >
        <UserCircleIcon class="h-9 w-10 rounded-full pointer-events-none" />
        <ChevronDownIcon class="h-3 w-3 rounded-full mr-4 pointer-events-none" />
        <Transition name="login-btn">
          <div
            v-show="isLoginActive == true"
            @click.stop
            class="fixed top-22 w-38 h-15 bg-white right-5 rounded-b-md"
          >
            <div
              class="relative w-4 h-4 ml-31 -mt-4.5 border-b-3 border-x-3 border-slate-200 border-x-transparent"
            >
              <div
                class="absolute h-2 w-2 top-1.5 -left-2.5 border-b-2.5 border-x-2.5 border-x-transparent border-white"
              ></div>
            </div>
            <div
              class="cursor-default text-lg h-8 hover:bg-gray-100 border-black"
              @click="(updateLogin(true, 'sign in'), (isLoginActive = false))"
            >
              <p class="mt-5 ml-3 text-base">Войти</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>
