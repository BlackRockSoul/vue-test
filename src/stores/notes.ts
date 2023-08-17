import type { INewNote, INote } from '@/types/notes';
import { defineStore } from 'pinia';

interface INotesStore {
  notes: INote[];
}

const LS_NOTES = 'vue-notes';

const getInitialState = (): INote[] => {
  const ls_notes = localStorage.getItem(LS_NOTES);

  if (!ls_notes) {
    localStorage.setItem(LS_NOTES, JSON.stringify([]));
    return [];
  }

  return JSON.parse(ls_notes);
};

const saveToLocalStorage = (notes: INote[]) => {
  localStorage.setItem(LS_NOTES, JSON.stringify(notes));
};

export const useNotesStore = defineStore('notes', {
  state: (): INotesStore => ({
    notes: getInitialState()
  }),
  getters: {},
  actions: {
    addNote(newNote: INewNote) {
      const note: INote = {
        ...newNote,
        id: Math.random(),
        isDone: false,
        createdAt: new Date(),
        updateAt: new Date()
      };

      this.notes.unshift(note);
      saveToLocalStorage(this.notes);
    },
    updateNote(note: INote) {
      const foundNote = this.notes.find((n) => n.id === note.id);
      if (!foundNote) return;

      Object.assign(foundNote, note);
      foundNote.updateAt = new Date();
      saveToLocalStorage(this.notes);
    },
    removeNote(noteId: INote['id']) {
      this.notes = this.notes.filter(({ id }) => id !== noteId);
      saveToLocalStorage(this.notes);
    },
    toggleDone(noteId: INote['id']) {
      const foundNote = this.notes.find((n) => n.id === noteId);
      if (!foundNote) return;

      foundNote.isDone = !foundNote.isDone;
      saveToLocalStorage(this.notes);
    }
  }
});
