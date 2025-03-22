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

  <FabButton @click="() => console.log('Button clicked')" position="bottom-right">
    <AddCircle />
  </FabButton>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
</script>