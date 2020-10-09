import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  CURRENT_PROJECT,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_TASK,
} from '../../types';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      {
        id: 1,
        name: 'choose platform',
        status: true,
        projectId: 1,
      },
      {
        id: 2,
        name: 'choose color',
        status: true,
        projectId: 2,
      },
      {
        id: 3,
        name: 'choose pay platform',
        status: false,
        projectId: 3,
      },
      {
        id: 4,
        name: 'choose platform',
        status: true,
        projectId: 4,
      },
      {
        id: 5,
        name: 'choose platform',
        status: true,
        projectId: 4,
      },
      {
        id: 6,
        name: 'choose color',
        status: true,
        projectId: 2,
      },
      {
        id: 7,
        name: 'choose pay platform',
        status: false,
        projectId: 2,
      },
      {
        id: 8,
        name: 'choose platform',
        status: true,
        projectId: 1,
      },
      {
        id: 9,
        name: 'choose platform',
        status: true,
        projectId: 1,
      },
      { id: 10, name: 'choose color', status: true, projectId: 1 },
      {
        id: 11,
        name: 'choose pay platform',
        status: false,
        projectId: 4,
      },
      {
        id: 12,
        name: 'choose platform',
        status: true,
        projectId: 4,
      },
    ],
    tasksproject: null,
    errortask: false,
    selectedTask: null,
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  const changeStatus = (task) => {
    dispatch({
      type: STATUS_TASK,
      payload: task,
    });
  };

  const saveCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };
  const clearTask = () => {
    dispatch({
      type: CLEAR_TASK,
    });
  };
  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStatus,
        saveCurrentTask,
        updateTask,
        clearTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
