<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import type { INote } from '@/types/notes';
import { computed } from 'vue';

interface IProps {
  note: INote;
}

const { note } = defineProps<IProps>();
const notesStore = useNotesStore();

const done = computed({
  get: () => note.isDone,
  set: () => {
    notesStore.toggleDone(note.id);
  }
});

const title = computed({
  get: () => note.title,
  set: (value: string) => {
    notesStore.updateNote({ ...note, title: value });
  }
});
</script>

<template>
  <div class="flex flex-row gap-2">
    <a-checkbox v-model:checked="done" />

    <a-typography-text :delete="note.isDone" v-model:content="title" editable />
  </div>
</template>
