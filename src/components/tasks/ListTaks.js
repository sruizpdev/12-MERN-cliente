import React, { Fragment, useContext } from 'react';
import projectContext from '../../context/projects/projectContex';

import Task from './Task';

const ListTask = () => {
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;
  if (!project) {
    return <h1>Select a project</h1>;
  }
  const [currentProject] = project;

  const tasksProject = [
    {
      name: 'choose platform',
      status: true,
    },
    {
      name: 'choose color',
      status: true,
    },
    {
      name: 'choose pay platform',
      status: false,
    },
    {
      name: 'choose platform',
      status: true,
    },
  ];

  return (
    <Fragment>
      <h2>
        Project:
        {currentProject.name}
      </h2>
      <ul className="task-list">
        {tasksProject.length === 0 ? (
          <li>No task</li>
        ) : (
          tasksProject.map((task) => <Task task={task} />)
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
