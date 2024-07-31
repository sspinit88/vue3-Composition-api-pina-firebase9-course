<template>
  <teleport to="body">
    <div class="modal-dark">
      <h1>
        <slot name="title"/>
      </h1>
      <h2>
        {{ subTitle }}
      </h2>
      <!--      <pre>-->
      <!--        {{ slots.title }}-->
      <!--      </pre>-->
      <button @click="close">
        Close Modal
      </button>
    </div>
  </teleport>
</template>

<script setup
        lang="ts">
/*imports*/
import { useSlots } from 'vue';



/*props*/

const props = defineProps({
  subTitle: {
    type: String,
    default: 'Default Modal Subtitle',  // default value
  },
});

/*emit*/
const emit = defineEmits({
  closeModal: (val) => {
    if (typeof val === 'boolean') {
      return true
    } else {
      console.warn('closeModal event expects a boolean value.')
      return false
    }
  }
})

const close = () => {
  emit('closeModal', true);
}



</script>

<style scoped>

.modal-dark {
  background: black;
  color: white;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
</style>

