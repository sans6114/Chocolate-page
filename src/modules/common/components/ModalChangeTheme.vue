<template>
  <div class="flexCol">
    Select theme:
    <select
      v-model="selected"
      @change="(e) => changeTheme(e)"
      class="select select-primary w-full max-w-xs"
    >
      <option disabled selected>Select a theme!</option>
      <option v-for="theme in daisyThemes" :key="theme">{{ theme }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useThemeManager } from 'vue-daisyui-theme-manager'

import { daisyThemes } from '@/modules/common/utils/index'

const $theme = useThemeManager()
const changeTheme = (e: any) => $theme.set({ theme: e.target.value })
const selected = computed(() => $theme.get())
</script>
