import React from 'react';
import Project from './Project';

const ListProjects = () => {
  const projects = [
    { name: 'Online shop' },
    { name: 'intranet' },
    { name: 'website' },
  ];
  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
