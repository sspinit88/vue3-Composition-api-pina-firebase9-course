<template>
  <div class="home">

    <h2>{{ appTitle }}</h2>

    <h3 ref="appTitleRef">{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2, $event)"
              class="btn">--
      </button>
      <button @click="decreaseCounter(1, $event)"
              class="btn">-
      </button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)"
              class="btn">+
      </button>
      <button @click="increaseCounter(2, $event)"
              class="btn">++
      </button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title"
             v-auto-focus
             type="text">
    </div>

  </div>
</template>

<script setup
        lang="ts">

import { reactive, computed, watch, onMounted, ref, nextTick } from 'vue';
import { vAutoFocus } from '@/directives/v-auto-focus.ts';


/*  app title */

const appTitle: string = 'My Ok Counter App';
const appTitleRef = ref(null);

onMounted(() => {
  // appTitleRef.value = this.$refs.appTitleRef;
  console.log('App title ref:', appTitleRef.value);
})

/* counter */

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(() => counterData.count, (newCount) => {
  if (newCount === 20) {
    alert('Way to go! You made it to 20!!');
  }
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even';
  return 'odd';
})

const blur = (e) => {
  return nextTick(() => {
    console.log('DOM is updated with nextTick');
  });
};

const increaseCounter = async (amount: number, e: Event) => {
  counterData.count += amount;
  await blur(e);
}

const decreaseCounter = (amount: number, e: Event) => {
  counterData.count -= amount;
  blur(e);
}

onMounted(() => {
  console.log('Do stuff related to Counter');
})


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
