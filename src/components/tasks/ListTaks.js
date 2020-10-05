import React, { Fragment, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContex';
import TaskContext from '../../context/task/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Task from './Task';

const ListTask = () => {
  const projectsContext = useContext(ProjectContext);
  const { project, deleteProject } = projectsContext;

  const taskContext = useContext(TaskContext);
  const { tasksproject } = taskContext;

  if (!project) {
    return <h1>Select a project</h1>;
  }
  const [currentProject] = project;

  return (
    <Fragment>
      <h2>
        Project:
        {currentProject.name}
      </h2>
      <ul className="task-list">
        {tasksproject.length === 0 ? (
          <li>No task</li>
        ) : (
          <TransitionGroup>
            {tasksproject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="task">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => deleteProject(currentProject.id)}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListTask;
