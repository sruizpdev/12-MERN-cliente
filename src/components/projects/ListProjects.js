import React, { useContext, useEffect } from 'react';
import ProjectContext from '../../context/projects/projectContex';
import Project from './Project';

const ListProjects = () => {
  const projectsContext = useContext(ProjectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return <p>No projects</p>;

  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
