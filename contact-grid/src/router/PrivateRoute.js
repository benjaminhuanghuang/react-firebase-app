import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';


/*
  Check user id passed from params with userid in session
  redirect to /login if not match or no user in session
*/
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useSession();

  return (
    <Route
      {...rest}
      render={(props) => {
        const id = props.match.params.id;

        if (!!user && (user.uid === id || isAdmin)) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
