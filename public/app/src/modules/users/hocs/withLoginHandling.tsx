
import React from 'react';
import { UsersState } from '../redux/states';
import { IUserOperators } from '../redux/operators';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

interface withLoginHandlingProps extends IUserOperators {
  users: UsersState;
}

function withLoginHandling (WrappedComponent: any) {
  class HOC extends React.Component<withLoginHandlingProps, any> {
    constructor (props: withLoginHandlingProps) {
      super(props)
    }

    handleLogin (username: string, password: string) {
      this.props.login(username, password);
    }

    afterSuccessfulLogin (prevProps: withLoginHandlingProps) {
      const currentProps: withLoginHandlingProps = this.props;
      if (currentProps.users.isLoggingInSuccess && !prevProps.users.isLoggingInSuccess) {
        this.props.getUserProfile();
        setTimeout(() => {<Navigate to="/" />}, 3000)
        return toast.success("Logged in! 🤠", {
          autoClose: 3000
        })
      }
    }

    afterFailedLogin (prevProps: withLoginHandlingProps) {
      const currentProps: withLoginHandlingProps = this.props;
      if (currentProps.users.isLoggingInFailure && !prevProps.users.isLoggingInFailure) {
        const error = currentProps.users.error;
        return toast.error(`Had some trouble logging in! ${error} 🤠`, {
          autoClose: 3000
        })
      }
    }

    componentDidUpdate (prevProps: withLoginHandlingProps) {
      this.afterSuccessfulLogin(prevProps);
      this.afterFailedLogin(prevProps);
    }

    render () {
      return (
        <WrappedComponent
        {...this.props}
        login={(u: string, p: string) => this.handleLogin(u, p)}
        />
      );
    }
  }
  return HOC;
}

export default withLoginHandling;