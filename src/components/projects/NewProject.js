import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContex';

const NewProject = () => {
  const projectsContext = useContext(ProjectContext);
  const { form, showForm, addProject, showError, errorform } = projectsContext;

  const [project, setProject] = useState({
    name: '',
  });
  const { name } = project;

  const onSubmitProject = (e) => {
    e.preventDefault();
    if (name === '') {
      showError();
      return;
    }
    addProject(project);

    setProject({
      nanme: '',
    });
  };
  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={() => showForm()}
      >
        New Project
      </button>

      {form ? (
        <form className="form-new-project" onSubmit={onSubmitProject}>
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
      ) : null}

      {errorform ? (
        <p className="message error">Name project is mandatory</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
