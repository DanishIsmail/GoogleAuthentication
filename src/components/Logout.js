import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const onSuccess = () => {
    console.log("Logout sucess");
  };
  const clientId =
    "655028439560-oq3daevvblu7k3kpjfjalp76gt4clqjs.apps.googleusercontent.com";
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
