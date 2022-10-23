<template>
    <div class="parent bg-gray-700 text-white mx-auto max-w-xl leading-7">
      <h1 class="text-4xl font-semibold">Welcome to Chronicles!</h1>
      <p class="mt-4">Chronicles is a message archiving service that will archive your IRC and Discord messages!</p>
      <p class="mt-4">It does so by deploying a bot on your server that will, when invoked, collect messages that you designate and will post to your account over on here. This way, you can archive all of your important conversatios and access them until the end of time!</p>
    </div>

    <div class="post mt-5 text-white mx-auto max-w-xl bg-gray-500" v-on:click="get_post_by_id(1)">
      <div class="flex justify-between bg-red-700 p-6">
        <div class="author-title">
          <p class="title text-3xl font-bold">This is my project in Rust with Vue.js!</p>
          <p class="author mt-3 font-semibold text-xl">Bourbon</p>
        </div>

        <div class="date-time border-l-2 p-2">
          <p>18th September</p>
          <p>12:18 AM</p>
        </div>
      </div>

      <div class="message">
        <p class="mt-2 p-5">
          Starting a new project to build do 3 main things. Use it  to learn GO. Motivate me to setup my personal Server. Actually build something I thought about for a bit.
        </p>
      </div>
    </div>
</template> 

<script lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import type { Ref } from 'vue';

import { Post } from '../types/Post';


export default {
  name: 'HomePage',

  setup() {
    function new_post(): Ref<Post> {
      return ref({
        id: 0,
        platform: "Discord",
        messages: [],
      })
    }

    async function get_post_by_id(id: number) {
      let post: Ref<Post> = new_post();
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      const res = await axios.get("http://0.0.0.0:8080/get_post_by_id",  { params: { id: id } });

      post.value.id = res.data.id;
      post.value.messages = res.data.messages;

      console.log(post);
    }

    return {
      new_post,
      get_post_by_id
    }
  }
}

</script>
