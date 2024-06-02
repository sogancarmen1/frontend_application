import { ref } from 'vue'
export const isSidebarVisible = ref(true)

export function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value
}
