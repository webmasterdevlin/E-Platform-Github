import React from 'react';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../store/types';
import UserMenu from '../features/auth/components/user-menu';
import AuthDialog from '../features/auth/sign-in/auth-dialog';

function NavBarUserStatus() {
  const { email } = useSelector(
    (state: IApplicationState) => state.signInReducer,
  );
  return <>{email ? <UserMenu /> : <AuthDialog />}</>;
}

export default NavBarUserStatus;
