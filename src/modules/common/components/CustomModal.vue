<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-blue-500 p-4">
        <!-- Header-->
        <slot name="header" />
      </div>

      <div class="my-5">
        <slot name="body" />
      </div>

      <div class="border-t border-blue-500 p-4">
        <div class="flex justify-end mt-5">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-back opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

interface Props {
  open: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});

defineEmits<{
  close_emit: [void];
}>();
</script>