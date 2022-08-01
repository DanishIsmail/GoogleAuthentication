import React, { useEffect } from "react";
import "./App.css";
import { gapi } from "gapi-script";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId:
          "655028439560-oq3daevvblu7k3kpjfjalp76gt4clqjs.apps.googleusercontent.com",
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  });

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}

export default App;
