<template>
  <dialog id="my_modal_1" class="modal" :open="props.open">
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
    v-if="props.open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-back opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, watch, nextTick } from 'vue';

interface Props {
  open: boolean;
  placeHolder?: string;
  title?: string;
  subTitle?: string;
}

const props = defineProps<Props>();

const _emits = defineEmits<{
  close: [void];
  valueInput: [text: string];
}>();

const inputValue = ref<string>(''); // esto es para manejar el valor del input
const inputRef = ref<HTMLInputElement | null>(null); // esto es para manter una referencia al elemento del document

watch(props, async ({ open }) => {
  if (open) {
    await nextTick(); // espera a que el DOM se renderice
    inputRef.value?.focus();
  }
});

const submit = () => {
  console.log('submit', inputValue.value);
  if (inputValue.value) {
    _emits('valueInput', inputValue.value.trim()); // emite el valor fguera del formulario
    _emits('close');
    inputValue.value = '';
  } else {
    inputRef.value?.focus();
  }
};
</script>