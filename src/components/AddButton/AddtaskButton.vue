<template>
  <div class="sm:flex justify-between">
    <div :class="classProp" class="border rounded px-2 cursor-pointer whitespace-nowrap">
      <font-awesome-icon icon="fa-plus" class="text-sm pr-2"></font-awesome-icon>
      <span class="text-sm ">Ajouter une tâche</span>
    </div>
    <div class="flex cursor-pointer">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  classProp: String
})
</script>
