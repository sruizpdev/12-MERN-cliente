import React from 'react';
import Bar from '../layouts/Bar';
import Sidebar from '../layouts/Sidebar';

const Projects = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Bar />
        <main>
          <div className="tasks-container"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
