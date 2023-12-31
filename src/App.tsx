import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ABPolloClient from './components/ABApolloClient';
import CartProvider from './contextApi/cart';
import Router from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <ABPolloClient>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </CartProvider>
    </ABPolloClient>
  );
}

export default App;