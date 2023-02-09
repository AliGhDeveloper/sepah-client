import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'
import ApolloProvider from './apollo/ApolloProvider';
import { DataProvider } from './store/globalStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DataProvider>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </DataProvider>
);

