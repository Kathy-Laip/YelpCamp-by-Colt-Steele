import React from 'react';
import ReactDOM from 'react-dom/client';
import MainTextLand from './components/landing_main_text';
import HeadLand from './components/landing_page_head';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HeadLand/>
    <MainTextLand/>
  </>
);
