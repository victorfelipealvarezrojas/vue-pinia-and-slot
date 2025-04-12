<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(pjct, index) in projectList" :key="pjct.id">
          <td>{{ index + 1 }}</td>
          <td>{{ pjct.name }}</td>
          <td>10</td>
          <td>
            <progress class="progress progress-primary w-56" value="10" max="100"></progress>
          </td>
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
import { ref } from 'vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import inputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import { useProjectStore } from '../store/projects.store';

const modalOpen = ref<boolean>(false);
const modalOpen2 = ref<boolean>(false);

const { projectList, addProyect } = useProjectStore();

const onNewValue = (proyectName: string) => {
  projectList.push({
    id: '3',
    name: proyectName,
    tasks: [],
  });

  addProyect(proyectName);
};
</script>