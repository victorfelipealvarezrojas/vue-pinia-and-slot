<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="projectRef?.name ?? 'NO NAME'" />
    </section>
    <section>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input
                  type="text"
                  class="input input-bordered input-primary w-full opacity-60 transition-all hover:opacity-100"
                  placeholder="Ingrese el nombre de la tarea"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interfaces';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}

const route = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectStore();
const projectRef = ref<Project | undefined>();

watch(
  () => props.id,
  () => {
    projectRef.value = projectStore.projects.find((project) => project.id === props.id);
    if (!projectRef.value) {
      route.replace('/');
    }
  },
  {
    immediate: true,
  },
);
</script>
