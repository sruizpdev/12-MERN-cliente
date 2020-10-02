import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContex';

const FromTask = () => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  if (!project) return null;
  const [currentProject] = project;
  return (
    <div className="formulario">
      <form>
        <div className="container-input">
          <input
            type="text"
            placeholder="Name of task"
            name="name"
            className="input-text"
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
    </div>
  );
};

export default FromTask;
