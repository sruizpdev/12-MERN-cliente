import React, { useReducer } from 'react';
import { FORM_PROJECT } from '../../types';
import projectContext from './projectContex';
import projectReducer from './projectReducer';

const ProjectState = (props) => {
  const initialState = {
    form: false,
    projects: [
      { id: 1, name: 'Online shop' },
      { id: 2, name: 'intranet' },
      { id: 3, name: 'website' },
    ],
  };
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  return (
    <projectContext.Provider
      value={{ form: state.form, projects: state.projects, showForm }}
    >
      {props.children}
    </projectContext.Provider>
  );
};
export default ProjectState;
