import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './routes';
import ABPolloClient from './components/ABApolloClient';

const queryClient = new QueryClient();

function App() {
  return (
    <ABPolloClient>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ABPolloClient>
  );
}

export default App;