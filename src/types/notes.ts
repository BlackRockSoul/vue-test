export interface INote {
  id: number;
  title: string;
  isDone: boolean;

  createdAt: Date;
  updateAt: Date;
}

export type INewNote = Omit<INote, 'id' | 'isDone' | 'createdAt' | 'updateAt'>;
