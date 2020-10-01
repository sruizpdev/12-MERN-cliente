import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {
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
      <h2>Project: Tienda Virtual</h2>
      <ul className="task-list">
        {tasksProject.length === 0 ? (
          <li>No task</li>
        ) : (
          tasksProject.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-primary">
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListTask;
