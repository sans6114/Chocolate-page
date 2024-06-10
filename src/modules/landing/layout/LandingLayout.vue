<template>
  <div class="flex flex-col h-screen">
    <!-- Header navbar -->
    <NavBar />
    <!-- Main especifico de cada router -->
    <main class="flex-1 flex items-center justify-center py-6 bg-slate-300 relative">
      <router-view></router-view>
      <FabButton />
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <Footer />
    <!-- Fin Footer -->
  </div>
</template>

<script lang="ts" setup>
import { FabButton, Footer, NavBar } from '@/modules/common/components'
</script>
