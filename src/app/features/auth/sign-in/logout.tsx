import React from 'react';
import { logOut } from '../auth.localstorage.service';

function Logout() {
  React.useEffect(() => {
    logOut();
  }, []);

  return null;
}

export default Logout;
