import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import Redux from './Redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RecoilRoot>
        <Suspense fallback={<div>Loading . . .</div>}>
          <BrowserRouter>

          <Redux />
          </BrowserRouter>
        </Suspense>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


