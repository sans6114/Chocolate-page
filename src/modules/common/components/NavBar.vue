<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-base-100 bg-transparent btn-circle flex justify-center items-center"
        >
          <Menu />
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-3"
        >
          <RouterLink :to="{ name: 'home' }" class="btn btn-outline btn-secondary">
            Inicio
          </RouterLink>
          <RouterLink :to="{ name: 'historia' }" class="btn btn-outline btn-secondary">
            Nuestra historia
          </RouterLink>
          <RouterLink :to="{ name: 'Emprender' }" class="btn btn-outline btn-secondary">
            Quiero emprender
          </RouterLink>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <Logo />
    </div>
    <div class="navbar-end px-10 p-2">
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <Avatar />
          <span class="badge badge-xs badge-primary indicator-item p-2">Usuario</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Logo, Menu } from '@/modules/common/icons'
</script>
