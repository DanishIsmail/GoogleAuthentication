import React from "react";
import { GoogleLogin } from "react-google-login";

const Login = (props) => {
  const onSuccess = (res) => {
    // console.log("Login sucess", res.profileObj);
    props.setProfileData(
      res.profileObj.name,
      res.profileObj.email,
      res.profileObj.imageUrl,
      res.profileObj.googleId
    );
  };

  const onFailure = (res) => {
    console.log("failure", res);
  };

  const clientId =
    "655028439560-oq3daevvblu7k3kpjfjalp76gt4clqjs.apps.googleusercontent.com";
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
