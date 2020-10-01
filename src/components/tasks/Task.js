import React from 'react';
const Task = ({ task }) => {
  return (
    <li className="task shadow">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button type="button" className="complete btn">
            Complete
          </button>
        ) : (
          <button type="button" className="incomplete btn">
            Incomplete
          </button>
        )}
      </div>
      <div className="actions">
        <button type="button" className="btn btn-primary">
          Edit
        </button>
        <button type="button" className="btn btn-secondary">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
