import React from 'react'
import { Route, Redirect } from "react-router";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("token");
  const ProtectedComp = component;


  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <ProtectedComp {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
};

export default PrivateRoute