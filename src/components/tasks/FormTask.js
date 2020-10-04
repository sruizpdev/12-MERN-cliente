import React, { useContext, useState } from 'react';
import ProjectContext from '../../context/projects/projectContex';
import TaskContext from '../../context/task/taskContext';

const FromTask = () => {
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  const taskContext = useContext(TaskContext);
  const { addTask, validateTask, errortask, getTasks } = taskContext;

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

    task.projectId = currentProject.id;
    task.status = false;

    addTask(task);

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
            value="Add task"
          />
        </div>
      </form>

      {errortask ? <p className="error message">Task name mandatory</p> : null}
    </div>
  );
};

export default FromTask;
