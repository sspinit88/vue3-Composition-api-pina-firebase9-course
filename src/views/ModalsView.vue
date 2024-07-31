<template>
  <div class="modals">
    <h1>Modals</h1>
  </div>

  <div class="dark">
    <label>Dark Mode: </label>
    <input v-model="showDarkModal"
           type="checkbox">
  </div>

  <button @click="openModal"
          class="btn">
    Show Modal
  </button>

  <component v-if="showModal"
             :is="showDarkModal ? ModalDark : Modal"
             :subTitle='subTitle'
             @closeModal="closeModal">
    <template #title>
      <h2 slot="title">Modal Title v2</h2>
    </template>
  </component>

</template>

<script lang="ts"
        setup>

import { ref } from 'vue';
import Modal from './../comonents/Modal.vue';
import ModalDark from './../comonents/ModalDark.vue';

const showDarkModal = ref(false);
const showModal = ref(false);

const subTitle = ref('Main Modal Subtitle');

const openModal = () => {
  showModal.value = true;
};

const closeModal = (val: boolean) => {
  showModal.value = false;
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
}
</style>
