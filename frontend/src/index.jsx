import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:5555/graphql',
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
