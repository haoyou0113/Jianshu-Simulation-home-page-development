import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';
class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => {
          return (
            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          );
        })}
        <img
          src='https://images.weserv.nl/?url=http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
          alt=''
        />
      </RecommendWrapper>
    );
  }
}
const mapStateToProps = state => ({
  list: state.getIn(['home', 'recommendList'])
});
export default connect(mapStateToProps, null)(Recommend);
