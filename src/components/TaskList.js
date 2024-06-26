import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from '../store';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'COMPLETED') return task.isDone;
    if (filter === 'INCOMPLETE') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTasks('ALL'))}>All</button>
        <button onClick={() => dispatch(filterTasks('COMPLETED'))}>Completed</button>
        <button onClick={() => dispatch(filterTasks('INCOMPLETE'))}>Incomplete</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
