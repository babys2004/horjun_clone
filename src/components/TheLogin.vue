<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { inject } from 'vue'
const log = inject('sign in')
const isLoginOpen = inject('openLogin')
</script>
<template>
  <Transition name="sign-in">
    <div
      v-show="isLoginOpen == true"
      class="z-50 fixed top-0 bottom-0 left-0 right-0 bg-black opacity-70"
    ></div>
  </Transition>
  <Transition name="sign-in">
    <div
      v-show="isLoginOpen == true"
      class="z-50 -mt-20 pt-10 fixed flex justify-around h-full w-full overflow-scroll"
      @:click.self="isLoginOpen = false"
    >
      <div
        class="inner absolute text-center px-5 w-99.5 bg-white rounded-md transition-all duration-300 ease-in-out"
        :class="log == 'sign in' ? 'h-100' : 'h-185'"
      >
        <XMarkIcon
          class="absolute h-6 p-1 top-3 right-3 text-gray-500 hover:border hover:border-gray-400 active:bg-slate-500 transition-colors"
          @click="isLoginOpen = false"
        />
        <p class="text-lg font-bold my-5">Horjuntv.com.tm</p>
        <div class="opacity-80 mb-4 h-10 overflow-hidden">
          <Transition name="sign">
            <p v-if="log === 'sign in'">Введите свой номер телефона и пароль</p>
            <p v-else-if="log === 'login'">Регистрация аккаунта</p>
          </Transition>
        </div>
        <Transition name="sign">
          <div v-if="log == 'login'">
            <p class="opacity-80 text-left mb-2">Имя</p>
            <input
              type="text"
              placeholder="Имя"
              class="w-full h-10 pl-5 mb-7 rounded-s-sm border border-gray-300"
            />
          </div>
        </Transition>
        <div
          class="absolute transition-all duration-300"
          :class="log == 'sign in' ? 'left-5 right-5 bottom-30' : 'left-5 right-5 bottom-85'"
        >
          <div>
            <p class="opacity-80 text-left mb-2">Номер телефона</p>
            <input type="text" class="w-full h-10 pl-5 rounded-s-sm border border-gray-300" />
          </div>
          <div>
            <p class="opacity-80 text-left mb-2 mt-7">Пароль</p>
            <input
              type="text"
              placeholder="Пароль"
              class="w-full h-10 pl-5 rounded-s-sm border border-gray-300"
            />
          </div>
        </div>
        <Transition name="sign">
          <div class="absolute bottom-60 left-5 right-5" v-if="log == 'login'">
            <p class="opacity-80 text-left mb-2 mt-7">Повторите пароль</p>
            <input
              type="text"
              class="w-full h-10 pl-5 rounded-s-sm border border-gray-300"
              placeholder="Повторите пароль"
            />
          </div>
        </Transition>
        <Transition name="sign">
          <div class="absolute bottom-30 left-5 right-5" v-if="log == 'login'">
            <p class="opacity-80 text-left mb-3 mt-7">Изображение</p>
            <div class="h-13 pt-2.5 text-left pl-3 border-0.5 border-sky-400">
              <button class="bg-gray-200 px-1 rounded-sm border border-gray-500">
                Choose file
              </button>
              <span class="opacity-80 ml-1">No file Choosen</span>
            </div>
          </div>
        </Transition>
        <div class="absolute left-5 right-5 bottom-3 rounded font-bold text-base">
          <div class="bg-sky-400 w-full h-10 pt-2 text-white hover:bg-sky-500">
            <p v-if="log == 'sign in'" class="cursor-default">Войти</p>
            <p v-else class="cursor-default">Регистрация</p>
          </div>
          <div class="bg-white w-full h-10 pt-1 text-sky-400">
            <a
              class="cursor-default hover:text-sky-500"
              @click="log = 'login'"
              v-if="log == 'sign in'"
              >Регистрация</a
            >
            <a
              class="cursor-default hover:text-sky-500 active:bg-red-400"
              @click="log = 'sign in'"
              v-else
              >Войти</a
            >
          </div>
        </div>

        <div class="invisible">{{ log }}</div>
      </div>
    </div>
  </Transition>
</template>
