import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UsersState } from '../../../modules/users/redux/states';
//@ts-ignore
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersOperators from '../../../modules/users/redux/operators';

interface AuthenticatedRouteProps {
  users: UsersState;
  component: React.ReactElement;
  path: any;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  users,
  component: Component,
  ...rest
}) => {
  // Add your own authentication on the below line.
  const isLoggedIn = users.isAuthenticated;

  if (!isLoggedIn) {
    return <Navigate to={'/'} />;
  }

  return <Route {...rest} element={Component} />;
};

function mapStateToProps({ users }: { users: UsersState }) {
  return {
    users
  };
}

function mapActionCreatorsToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...usersOperators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(AuthenticatedRoute);
