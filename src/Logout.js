import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("token");
    history.push("/login");
  }, []);

  return (
  <div>
    <p>
    Lütfen Giriş Yapınız.
    </p>
    </div>
    );
}

export default Logout;