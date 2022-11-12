<template>
    <div class="parent bg-gray-700 text-white mx-auto max-w-xl leading-7">
      <h1 class="text-4xl font-semibold">Welcome to Chronicles!</h1>
      <p class="mt-4">Chronicles is a message archiving service that will archive your IRC and Discord messages!</p>
      <p class="mt-4">It does so by deploying a bot on your server that will, when invoked, collect messages that you designate and will post to your account over on here. This way, you can archive all of your important conversatios and access them until the end of time!</p>
    </div>

    <div class="post mt-5 text-white mx-auto max-w-xl bg-gray-500" v-on:click="get_post_by_id(1)">
      <div class="flex justify-between bg-red-700 p-6">
        <div class="author-title">
          <p class="post-title text-3xl font-bold"> {{ post.title }} </p>
          <p class="post-author mt-3 font-semibold text-xl"> {{ post.messages[0].author }} </p>
        </div>

        <div class="date-time border-l-2 p-2">
          <p>{{ post.date }}</p>
        </div>
      </div>

      <div class="post-message">
        <p class="mt-2 p-5">
          {{ post.messages[0].content }}
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
        title: "Hello from Discord!",
        date: "18-09-2022",
        messages: [
          {
            timestamp: 90923,
            content: "This is a message",
            author: "Bourbon"
          }
        ],
      })
    }

    let post: Ref<Post> =  new_post();

    async function get_post_by_id(id: number) {
      const res = await axios.get("http://0.0.0.0:9001/get_post_by_id",  { params: { id: id } });

      post.value.id = res.data.id;
      post.value.title = res.data.title;
      post.value.date = res.data.date;
      post.value.messages = res.data.messages;
    }

    return {
      post,
      new_post,
      get_post_by_id
    }
  }
}

</script>
