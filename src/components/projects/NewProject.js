import React, { Fragment, useState } from 'react';
const NewProject = () => {
  const [project, setProject] = useState({
    name: '',
  });
  const { name } = project;
  const onSubmitProject = (e) => {
    e.preventDefault();
  };
  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primary">
        New Project
      </button>

      <form className="form-new-project" onSubmit="onSubmitProject">
        <input
          type="text"
          className="input-text"
          placeholder="Project name"
          name="name"
          value={name}
          onChange={onChangeProject}
        />
        <input
          type="submit"
          className="btn btn-primary  btn-block"
          value="Add project"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
