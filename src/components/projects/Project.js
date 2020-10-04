import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContex';
import TaskContext from '../../context/task/taskContext';

const Project = ({ project }) => {
  const projectsContext = useContext(ProjectContext);
  const { currentProject } = projectsContext;

  const tasksContext = useContext(TaskContext);
  const { getTasks } = tasksContext;

  const selectProject = (id) => {
    currentProject(id);
    getTasks(id);
  };

  return (
    <li>
      <button
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
