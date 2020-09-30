import React from 'react';
import ListProjects from '../projects/ListProjects';
import NewProject from '../projects/NewProject';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Task</span>
        <NewProject />
      </h1>
      <div className="projects">
        <h2>Your Projects</h2>
        <ListProjects />
      </div>
    </aside>
  );
};

export default Sidebar;
