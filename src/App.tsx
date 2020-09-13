import React from 'react';

import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <header>
        <h1>Auth 0 Test</h1>
        <nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</nav>
      </header>
      <main>
        <Profile />
      </main>
    </>
  );
}

export default App;
