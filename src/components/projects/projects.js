import React from 'react';
import Bar from '../layouts/Bar';
import Sidebar from '../layouts/Sidebar';
import FromTask from '../tasks/FormTask';
import ListTask from '../tasks/ListTaks';

const Projects = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Bar />
        <main>
          <FromTask />
          <div className="tasks-container">
            <ListTask />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
