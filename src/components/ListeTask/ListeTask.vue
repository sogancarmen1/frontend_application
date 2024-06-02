<template>
  <table class="w-full">
    <tr class="">
      <td class="pl-2 pb-8 pt-2 pr-[325px] border-y text-sm whitespace-nowrap cursor-pointer">
        <form @submit.prevent="onSubmit" action="" class="relative">
          <input
            :class="showInput ? 'inline' : 'hidden'"
            class="border outline-none absolute left-11 top-[2px]"
            type="text"
            v-model="nameOfTask"
            placeholder="Donner un nom à la tâche"
          />
        </form>
        <div
          class="flex mx-[20px] space-x-1 absolute"
          :class="showValueOfInput ? 'inline' : 'hidden'"
        >
          <font-awesome-icon class="pt-[3px] px-[3px]" icon="fa-circle-check"></font-awesome-icon>
          <p
            @click="onClick"
            :class="nameOfTask.length > 20 ? 'text-ellipsis' : ''"
            class="text-ellipsis overflow-hidden w-full border"
          >
            {{ nameOfTask }}
          </p>
        </div>
      </td>
      <td
        class="pl-2 pr-20 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span>Projet</span>
      </td>
      <td
        class="pl-2 pr-20 border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span>Date de fin</span>
      </td>
      <td
        class="pl-2 pr-14 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span>Priorité</span>
      </td>
      <td
        class="pl-2 pr-20 border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span>Collaborateur</span>
      </td>
      <td
        class="pl-2 pr-20 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span>Status</span>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nameOfTask = ref('')
const showInput = ref(true)
const showValueOfInput = ref(false)
const onSubmit = function () {
  showValueOfInput.value = true
  showInput.value = false
}
const onClick = function () {
  showValueOfInput.value = false
  showInput.value = true
}
</script>
