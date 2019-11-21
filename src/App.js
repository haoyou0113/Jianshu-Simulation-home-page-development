import { GlobalStyle } from './style.js';
import React, { Fragment } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
// import GlobalStyleFont from './statics/iconfont/iconfont.js';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>

      <div>hello</div>
    </Fragment>
  );
}

export default App;
