import React, { useEffect } from 'react';
import DashboardTitleBar from '../../dashboard-title-bar';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../../../../store/types';

function VirtualClassroomsContent() {
  const { sub, roles, email } = useSelector(
    (state: IApplicationState) => state.signInReducer,
  );

  useEffect(() => {
    console.log('ROLE::', roles);
  }, []);

  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Virtual Classrooms'} />
      {roles.includes('student') && <h1>Student!</h1>}
      {roles.includes('mentor') && <h1>Mentor!</h1>}

      <h2>Welcome, {email}</h2>
    </div>
  );
}

export default VirtualClassroomsContent;
