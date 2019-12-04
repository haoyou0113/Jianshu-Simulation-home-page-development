import Loadable from 'react-loadable';
import React from 'react';
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div> loading</div>;
  }
  //   加载时显示的临时内容
});

export default () => {
  return <LoadableComponent />;
};
