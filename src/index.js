import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/common.css'
import './asset/css/font.css'
import './asset/css/iconfont.css'
import AppRouter from './router'
import './asset/csstest/iconfont.css'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter></AppRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


