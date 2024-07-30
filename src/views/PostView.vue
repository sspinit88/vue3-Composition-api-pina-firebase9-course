<template>
  <div class="post">
    <h1>Post</h1>

    <ul>
      <li v-for="post in posts">
        <RouterLink to="/posts/{{post.id}}">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>

  </div>
</template>


<script lang="ts">
import { reactive } from 'vue';
import { POST_DATA } from '../constants/post.constant';

export default {
  name: 'PostView',
  setup() {
    const posts = reactive(POST_DATA);

    return {
      posts,
    }
  }


}
</script>

<style scoped>

</style>
