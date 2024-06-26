import { createStore } from 'redux';

// Actions
const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const FILTER_TASKS = 'FILTER_TASKS';

// Action creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description }
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: { filter }
});

// Initial state
const initialState = {
  tasks: [],
  filter: 'ALL' // ALL, COMPLETED, INCOMPLETE
};

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        description: action.payload.description,
        isDone: false
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        )
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        )
      };
    case FILTER_TASKS:
      return { ...state, filter: action.payload.filter };
    default:
      return state;
  }
};

// Create store
const store = createStore(todoReducer);

export default store;
