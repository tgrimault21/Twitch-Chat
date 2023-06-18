import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/style.scss";
import Chat from './components/Chat/Chat';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
);
