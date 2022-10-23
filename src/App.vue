<template>
  <div class="parent bg-gray-700 absolute w-full h-full">
    <NavigationBar />
    <HomePage />
  </div>
</template>

<script lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import HomePage from './components/HomePage.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: "App",
  components: { 
    NavigationBar, 
    HomePage
  }
})
</script>