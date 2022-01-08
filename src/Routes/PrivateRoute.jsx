/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { setUser } from '../Components/CustomerAuth/CustomerLogin/Common';

export const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
