import { useEffect, useState } from "react";

const MyCollection = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(sessionStorage.getItem("currentUser"));
  }, []);
  return (
    <div style={{ marginTop: "150px" }}>
      {currentUser ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Hello {currentUser}</h1>
        </div>
      ) : (
        ""
      )}
      <h1 style={{ textAlign: "center" }}>This page will be update soon ! </h1>
    </div>
  );
};

export default MyCollection;
