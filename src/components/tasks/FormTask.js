import React, { useState } from 'react';
const FromTask = () => {
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
