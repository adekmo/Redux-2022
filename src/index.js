import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Kasir from './Kasir';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RecoilRoot>
      <Suspense fallback={<div>Loading . . .</div>}>
        <BrowserRouter>
          <Kasir />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);


