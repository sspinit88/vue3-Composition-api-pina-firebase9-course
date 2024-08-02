<template>
  <div class="home">

    <h2>{{ appTitle }}</h2>

    <h3 ref="appTitleRef">{{ title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)"
              class="btn">--
      </button>
      <button @click="decreaseCounter(1)"
              class="btn">-
      </button>
      <span class="counter">{{ count }}</span>
      <button @click="increaseCounter()"
              class="btn">+
      </button>
      <button @click="increaseCounter(2)"
              class="btn">++
      </button>
    </div>

<!--    <p>This counter is {{ oddOrEven }}</p>-->

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="title"
             v-auto-focus
             type="text">
    </div>

  </div>
</template>

<script setup
        lang="ts">
/*imports*/
import { onMounted, ref } from 'vue';
import { vAutoFocus } from '@/directives/v-auto-focus.ts';
import { useCounterStore } from '@/stores/counter.ts';

/*  app title */
const appTitle: string = 'My Ok Counter App';
const appTitleRef = ref(null);

onMounted(() => {
  // appTitleRef.value = this.$refs.appTitleRef;
  console.log('App title ref:', appTitleRef.value);
})

/* counter */
const {
  title,
  count,
  increaseCounter,
  decreaseCounter,
} = useCounterStore();

</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
