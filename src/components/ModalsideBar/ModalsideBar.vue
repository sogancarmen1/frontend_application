<template>
  <font-awesome-icon icon="fa-diagram-project"></font-awesome-icon>
  <span>Nouveau projet</span>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  iconProp: String,
  textProp: String,
});
</script>
