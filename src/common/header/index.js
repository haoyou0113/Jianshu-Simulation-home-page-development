import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';
import { connect } from 'react-redux';
import '../../statics/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登陆</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition classNames='slide' timeout={200} in={props.focused}>
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i
            className={
              props.focused ? 'focused iconfont zoom' : 'iconfont zoom'
            }
          >
            &#xe62d;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className='iconfont'>&#xe624;</i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return { focused: state.header.focused };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
