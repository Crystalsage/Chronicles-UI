<template>
  <div class="parent bg-gray-700 absolute w-full h-full">
    <NavigationBar />
    <HomePage />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    HomePage
  }
}
</script>