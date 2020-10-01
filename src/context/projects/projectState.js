import React, { useReducer } from 'react';
import { FORM_PROJECT, GET_PROJECTS } from '../../types';
import projectContext from './projectContex';
import projectReducer from './projectReducer';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Online shop' },
    { id: 2, name: 'intranet' },
    { id: 3, name: 'website' },
  ];
  const initialState = {
    form: false,
    projects: [],
  };
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};
export default ProjectState;
