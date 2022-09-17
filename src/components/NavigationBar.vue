<template>
  <nav class="flex items-center justify-between flex-wrap p-6 bg-red-700">
    <a class="flex items-center flex-no-shrink text-white mr-6" href="/">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Chronicles</span>
    </a>

    <div class="text-sm sm:flex-grow">
      <a href="/posts" class="no-underline block mt-4 sm:inline-block text-white sm:mt-0  hover:text-white mr-4">Posts</a>
      <a href="/docs" class="no-underline block mt-4 sm:inline-block text-white sm:mt-0  hover:text-white mr-4">Docs</a>
    </div>

    <div @click="togglePosts()">
      <a href="#" id="posts" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-white hover:text-red-700 mt-4 sm:mt-0">Show post</a>
    </div>

  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NavigationBar',

  setup() {
    let showPosts = ref(false)

    // function toggleLogged() {
    //   loggedIn.value = !loggedIn.value
    //   document.getElementById('loginout').text = loggedIn.value ? 'Hide Post' : 'Show Post'
    // }

    function togglePosts() {
      showPosts.value = !showPosts.value
      document.getElementById('posts').text = showPosts.value ? 'Hide Post' : 'Show Post'
    }

    return {
      showPosts,
      togglePosts
    }
  }
}
</script>