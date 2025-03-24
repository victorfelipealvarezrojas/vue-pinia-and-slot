<template>
  <dialog id="my_modal_1" class="modal" :open="openis">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title ?? 'Ingrese Titulo' }}</h3>
      <p class="py-4">{{ subTitle ?? 'Ingrese Sub-titulo' }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submit">
          <input
            type="text"
            class="input input-bordered input-primary w-full flex-1"
            :placeholder="placeHolder ?? 'Ingrese un valor'"
            v-model="inputValue"
            ref="inputRef"
          />
          <div class="flex justify-end mt-5">
            <button type="submit" class="btn btn-primary mr-10">Aceptar</button>
            <button @click="$emit('close')" class="btn btn-info">Close</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div
    v-if="openis"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-back opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

interface Props {
  open: boolean;
  placeHolder?: string;
  title?: string;
  subTitle?: string;
}

const { open: openis } = defineProps<Props>();

const _emits = defineEmits<{
  close: [void];
  valueInput: [text: string];
}>();

const inputValue = ref<string>('');
const inputRef = ref<HTMLInputElement | null>(null);

const submit = () => {
  console.log('submit', inputValue.value);
  if (inputValue.value) {
    _emits('valueInput', inputValue.value.trim());
    _emits('close');
    inputValue.value = '';
  } else {
    inputRef.value?.focus();
  }
};
</script>