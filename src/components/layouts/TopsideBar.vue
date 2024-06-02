<template>
  <nav>
    <top-bar @toggle-sidebar="toggleSidebar"></top-bar>
  </nav>
  <div class="flex">
    <div>
      <side-bar v-if="isSidebarVisible"></side-bar>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar/TopBar.vue'
import SideBar from '@/components/SideBar/SideBar.vue'
import { isSidebarVisible } from './topSideBar'
import { toggleSidebar } from './topSideBar'
</script>
