<template>
  <div class="flex flex-col text-center items-center justify-between gap-3">
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn btn-circle fixed top-24 right-10" onclick="my_modal_1.showModal()">
      <Vue3Lottie :animationData="Color" />
    </button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-extrabold text-2xl">¡Bienvenido a Latte!</h3>
        <p class="p-4 bg-base-100 rounded text-xl font-bold">
          Elegí y personalizá el diseño de la página
        </p>
        <div class="flexCol">
          <select
            v-model="selected"
            @change="(e) => changeTheme(e)"
            class="select select-primary w-full max-w-xs"
          >
            <option disabled selected>Select a theme!</option>
            <option v-for="theme in daisyThemes" :key="theme">{{ theme }}</option>
          </select>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useThemeManager } from 'vue-daisyui-theme-manager'
import { Vue3Lottie } from 'vue3-lottie'

import Color from '@/assets/lottie/Animation - 1717867124193.json'
import { daisyThemes } from '@/modules/common/utils/index'

const $theme = useThemeManager()
const changeTheme = (e: any) => $theme.set({ theme: e.target.value })
const selected = computed(() => $theme.get())
</script>
