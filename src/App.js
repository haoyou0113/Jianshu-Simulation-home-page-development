import React, { Fragment } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
// import GlobalStyleFont from './statics/iconfont/iconfont.js';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
