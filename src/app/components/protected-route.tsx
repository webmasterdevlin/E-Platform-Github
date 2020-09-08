import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { IApplicationState } from '../../store/types';

const ProtectedRoute: React.FC<any> = props => {
  const { accessToken } = useSelector(
    (state: IApplicationState) => state.signInReducer,
  );

  return accessToken ? <Route {...props} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
