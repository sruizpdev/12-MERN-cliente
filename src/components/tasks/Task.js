import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContex';
import TaskContext from '../../context/task/taskContext';

const Task = ({ task }) => {
  const tasksContext = useContext(TaskContext);
  const { deleteTask, getTasks, changeStatus } = tasksContext;

  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  const [currentProject] = project;

  const taskToDelete = (id) => {
    deleteTask(id);
    getTasks(currentProject.id);
  };

  const changeStatusTask = (task) => {
    task.status = !task.status;
    changeStatus(task);
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="complete btn"
            onClick={() => changeStatusTask(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incomplete btn"
            onClick={() => changeStatusTask(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="actions">
        <button type="button" className="btn btn-primary">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => taskToDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
