
export type Task = {
  id: string;
  title: string;
  dueDate: string;
};
export const emptyTask = { id: '', title: 'No task marked as top priority, go mark sth in Notion', dueDate: ''}