import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import * as actionCreators from './store/actionCreators';
import { connect } from 'react-redux';

class Home extends PureComponent {
  handleScrollTop = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src='https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg'
            alt=''
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>BackTop</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
    // 组件解绑后移除组件使用的事件 防止影响其他组件
  }
}

const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    console.log(action);
    dispatch(action);
  },
  changeScrollTopShow(e) {
    console.log(document.documentElement.scrollTop);
    // 打印滚动举例
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
const mapStateToProps = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
