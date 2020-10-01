import React, { useContext, useEffect } from 'react';
import projectContext from '../../context/projects/projectContex';
import Project from './Project';

const ListProjects = () => {
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
