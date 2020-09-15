import React, { useEffect } from "react";

import Profile from "./Profile";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      console.log("Not Authenticated");
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <header>
        <h1>{window.location.host}</h1>
        <nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</nav>
      </header>
      <main>
        <Profile />
      </main>
    </>
  );
}

export default App;
