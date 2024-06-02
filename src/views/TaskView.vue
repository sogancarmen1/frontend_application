<template>
  <Entete>
    <RouterView />
  </Entete>
</template>

<script setup lang="ts">
import Entete from '@/components/EnTete/EnTete.vue'
import { RouterView } from 'vue-router'
</script>
