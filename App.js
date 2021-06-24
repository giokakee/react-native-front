import React from 'react';
import Main from './components/main'
import { NativeRouter } from 'react-router-native';
import createApolloClient from './utils/apolloClient'
import { ApolloProvider } from '@apollo/client';


const apolloClient = createApolloClient()

export default function App() {

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}


