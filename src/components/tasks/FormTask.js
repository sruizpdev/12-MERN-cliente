import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/projectContex';
import TaskContext from '../../context/task/taskContext';

const FromTask = () => {
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(TaskContext);
  const {
    selectedTask,
    addTask,
    validateTask,
    errortask,
    getTasks,
    updateTask,
  } = tasksContext;

  useEffect(() => {
    if (selectedTask !== null) {
      saveTask(selectedTask);
    } else {
      saveTask({
        name: '',
      });
    }
  }, [selectedTask]);
  const [task, saveTask] = useState({
    name: '',
  });
  const { name } = task;

  if (!project) return null;
  const [currentProject] = project;

  const handleChange = (e) => {
    saveTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      validateTask();
      return;
    }
    if (selectedTask === null) {
      task.projectId = currentProject.id;
      task.status = false;

      addTask(task);
    } else {
      updateTask(task);
    }

    getTasks(currentProject.id);

    saveTask({
      name: '',
    });
  };

  return (
    <div className="formulario" onSubmit={onSubmit}>
      <form>
        <div className="container-input">
          <input
            type="text"
            placeholder="Name of task"
            name="name"
            className="input-text"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value={selectedTask ? 'Edit task' : 'Add task'}
          />
        </div>
      </form>

      {errortask ? <p className="error message">Task name mandatory</p> : null}
    </div>
  );
};

export default FromTask;
