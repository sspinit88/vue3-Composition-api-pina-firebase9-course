<template>
  <div class="post">
    <h1>Post</h1>

    <ul>
      <li>
        <RouterLink to="/posts/1">
          Post 1
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/posts/2">
          Post 2
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/posts/3">
          Post 3
        </RouterLink>
      </li>
    </ul>

  </div>
</template>


<script>
export default {
  name: 'PostView'
}
</script>

<style scoped>

</style>
