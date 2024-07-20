<template>
  <section class="host">
    <h3 class="title">{{ title }} :</h3>

    <div class="counter">
      <button @click="decrement"
              class="counter-minus">
        -
      </button>

      <div class="counter-val">{{ count }}</div>

      <button @click="increment"
              class="counter-plus">
        +
      </button>


    </div>
    <div class="edit">
      <h4 class="edit-title">Edit title:</h4>
      <div class="edit__input-text">
        <input v-model="title" type="text"
               class="input-text">
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const title = ref('Counter App');

const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<style scoped>
.host {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter-minus,
.counter-plus {
  background-color: blue;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
}

.counter-val {
  font-size: 30px;
  margin: 0 20px;
}

.edit-title {
  margin-top: 20px;
}

.input-text {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.edit__input-text {
  width: 500px
}

</style>
