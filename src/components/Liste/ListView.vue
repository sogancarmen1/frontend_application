<template>
  <TopsideBar>
    <EnTete>
      <div class="border-t">
        <AddtaskButton
          classProp="bg-blue-600 text-white hover:bg-blue-800"
          class="m-4"
        >
          <div class="px-4">
            <font-awesome-icon
              class="text-sm px-1"
              icon="fa-pen-nib"
            ></font-awesome-icon>
            <span class="text-sm">Description</span>
          </div>
          <div class="px-4">
            <font-awesome-icon
              class="text-sm px-1"
              icon="fa-filter"
            ></font-awesome-icon>
            <span class="text-sm">Filtrer</span>
          </div>
          <div class="px-4">
            <font-awesome-icon
              class="text-sm px-1"
              icon="fa-sort"
            ></font-awesome-icon>
            <span class="text-sm">Trier</span>
          </div>
        </AddtaskButton>
        <entete-tableau></entete-tableau>
        <div class="py-4">
          <liste-task></liste-task>
        </div>
      </div>
    </EnTete>
  </TopsideBar>
</template>

<script setup lang="ts">
import EnteteTableau from "../EnteteTableau/EnteteTableau.vue";
import EnTete from "../EnTete/EnTete.vue";
import TopsideBar from "../layouts/TopsideBar.vue";
import AddtaskButton from "../AddButton/AddtaskButton.vue";
import ListeTask from "../ListeTask/ListeTask.vue";
</script>
