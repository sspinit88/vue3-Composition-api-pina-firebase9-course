<template>
  <div class="modals">
    <h1>Modals</h1>
  </div>

  <button @click="openModal">Show Modal</button>

  <teleport to="body">
    <div v-if="showModal"
         class="modal">
      <h2>Modal Title</h2>
      <p>Modal Content</p>
      <button @click="closeModal">Close Modal</button>
    </div>
  </teleport>


</template>

<script lang="ts"
        setup>
import { ref } from 'vue';

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
}


// export default {
//   name: 'ModalsView',
//   setup() {
//     const showModal = ref(false);
//     return {
//       showModal,
//     };
//   },
//   methods: {
//     openModal() {
//       this.showModal = true;
//     },
//     closeModal() {
//       this.showModal = false;
//     }
//   }
// }
</script>

<style scoped>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
</style>
