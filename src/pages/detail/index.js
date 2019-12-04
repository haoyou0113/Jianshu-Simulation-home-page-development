import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';

class Detail extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetail(id);
  }
}
const mapStateToProps = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
// withRouter 使得detail获得router中的所有内容 配合loadable
