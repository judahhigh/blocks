<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { MenuItem } from 'primevue/menuitem';

const items: MenuItem[] = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "ABOUT",
    url: "/about",
  }
]

</script>

<template>
  <TabMenu :model="items" />
</template>

<style scoped>
</style>
