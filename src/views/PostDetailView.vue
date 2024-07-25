<template>
  <div class="post-detail">
    <h1 class="post-title">Post page {{ currentId }} </h1>
    <p class="post-id">
      Displaying post with id: {{ currentId }}
    </p>
    <button @click="onBack"
            class="back">Back
    </button>
    <button @click="goHomeIn3Sec"
            class="go-home">
      Go home in 3 sec
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { PAGE_ROUTER_DATA } from '../constants/page-router-data.constant';

const router = useRouter();
const route = useRoute();
const mainPage = PAGE_ROUTER_DATA.home.main.path;

const currentId = route.params.id;

const goHomeIn3Sec = () => {
  setTimeout(() => {
    router.push(mainPage);
  }, 3000);
};

const onBack = () => {
  router.back();
};
</script>

<style scoped>
.post-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.post-id {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.back {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.4s;
}

.go-home {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.4s;
  margin-left: 1rem;
}
</style>
