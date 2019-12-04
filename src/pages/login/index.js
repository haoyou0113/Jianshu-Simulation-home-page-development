import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    console.log(loginStatus);
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder='UserName'
              ref={input => {
                this.account = input;
              }}
            ></Input>
            <Input
              placeholder='PassWord'
              type='password'
              ref={input => {
                this.password = input;
              }}
            ></Input>
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              login
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to='/' />;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login(accountElem, passwordElem) {
      dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
  };
};
const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
