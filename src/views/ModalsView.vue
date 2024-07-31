<template>
  <div class="modals">
    <h1>Modals</h1>
  </div>

  <button @click="openModal"
          class="btn">
    Show Modal
  </button>

  <Modal v-if="showModal"
         :subTitle='subTitle'
         @closeModal="closeModal">
    <template #title>
      <h2 slot="title">Modal Title !</h2>
    </template>
  </Modal>

</template>

<script lang="ts"
        setup>

import { ref } from 'vue';
import Modal from './../comonents/Modal.vue';

const showModal = ref(false);
const subTitle = ref('Main Modal Subtitle');

const openModal = () => {
  showModal.value = true;
};

const closeModal = (val: boolean) => {
  // console.log('g-closeModal', val);
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
