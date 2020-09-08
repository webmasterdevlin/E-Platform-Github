import React, { useEffect } from 'react';
import NavigationBar from '../../components/navigation-bar';
import Footer from '../../components/footer';
import AuthTabs from '../../features/auth/sign-in/auth-tabs';
import TitleBar from '../../components/title-bar';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../../store/types';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const { accessToken } = useSelector(
    (state: IApplicationState) => state.signInReducer,
  );

  useEffect(() => {
    if (accessToken) navigate('/dashboard');
  }, []);

  return (
    <div id="wrapper">
      <NavigationBar />
      <TitleBar title={'Login'} />
      <div className={'container d-flex justify-content-center'}>
        <div className={'w-75'}>
          <AuthTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
