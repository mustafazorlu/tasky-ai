import React from 'react';
import type { PropsWithChildren } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import TaskForm from './TaskForm';

const TaskFormDialog: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className='p-0 border-0 !rounded-xl'>
        <TaskForm />
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;
