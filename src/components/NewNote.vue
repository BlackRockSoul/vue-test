<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { reactive } from 'vue';

interface IFormState {
  title: string;
}

const notesStore = useNotesStore();
const { addNote } = notesStore;

const formState = reactive<IFormState>({
  title: ''
});

const onFinish = (formData: IFormState) => {
  addNote(formData);
};
</script>

<template>
  <a-form layout="inline" name="new-note" :model="formState" @finish="onFinish">
    <a-form-item name="title" class="!flex-1">
      <a-input placeholder="Create new task" v-model:value="formState.title" />
    </a-form-item>

    <a-form-item class="!mr-0">
      <a-button type="primary" htmlType="submit">Create</a-button>
    </a-form-item>
  </a-form>
</template>
