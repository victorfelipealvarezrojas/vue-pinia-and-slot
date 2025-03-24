<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Notion</td>
          <td>10</td>
          <td>90%</td>
        </tr>
      </tbody>
    </table>
  </div>

  <inputModal
    @close="modalOpen = false"
    @valueInput="onNewValue"
    :open="modalOpen"
    placeHolder="Ingrese el nombre del proyecto"
    title="Nuevo Proyecto"
    subTitle="Ingrese el nombre del proyecto"
  />

  <CustomModal :open="modalOpen2">
    <template #header>
      <h1>Titulo Modal</h1>
    </template>
    <template #body>
      <h1>Contenido</h1>
    </template>
    <template #actions>
      <button @click="modalOpen2 = false" type="submit" class="btn btn-primary mr-10">
        Aceptar
      </button>
      <button @click="modalOpen2 = false" class="btn btn-info">Close</button>
    </template>
  </CustomModal>

  <FabButton @click="modalOpen = true" position="bottom-right">
    <AddCircle />
  </FabButton>

  <FabButton @click="modalOpen2 = true" position="bottom-left">
    <AddCircle />
  </FabButton>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import inputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';

const modalOpen = ref<boolean>(false);
const modalOpen2 = ref<boolean>(false);

const onNewValue = (proyectName: string) => {
  console.log('onNewValue', proyectName);
};
</script>