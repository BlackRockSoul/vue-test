<script setup lang="ts">
import NewNote from '@/components/NewNote.vue';
import NoteRow from '@/components/NoteRow.vue';
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';

const store = useNotesStore();

const { notes } = storeToRefs(store);
</script>

<template>
  <a-typography-title>Tasks</a-typography-title>

  <div class="rounded p-2 bg-slate-200">
    <a-list :data-source="notes">
      <template #renderItem="{ item }">
        <a-list-item><NoteRow :note="item" :key="item.id" /></a-list-item>
      </template>
    </a-list>

    <NewNote />
  </div>
</template>
