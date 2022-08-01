import React, { useState } from "react";
import Card from "./Card";
import Login from "./Login";
import Logout from "./Logout";

const Home = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [googleId, setGoogleId] = useState();

  const setProfileData = (username, useremail, userimageUrl, usergoogleId) => {
    setName(username);
    setEmail(useremail);
    setImageUrl(userimageUrl);
    setGoogleId(usergoogleId);
  };
  return (
    <React.Fragment>
      {name && email && (
        <>
          <Logout />
          <Card
            name={name}
            email={email}
            imageUrl={imageUrl}
            googleId={googleId}
          />
        </>
      )}
      {!name && !email && <Login setProfileData={setProfileData} />}
    </React.Fragment>
  );
};

export default Home;
