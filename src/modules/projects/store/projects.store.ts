import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interfaces';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

export const useProjectStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProyect = (name: string) => {
    if (name.length === 0) return;
    console.log('Project added!');
    projects.value = [
      ...projects.value,
      {
        id: uuidv4(),
        name: name,
        tasks: [],
      },
    ];
  };

  return {
    // properties
    projects,

    // Getters
    projectList: computed(() => [...projects.value]),
    projectListCount: computed(() => projects.value.length === 0),

    // Actions
    addProyect,
  };
});
