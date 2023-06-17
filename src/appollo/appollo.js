
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://discrete-rodent-43.hasura.app/v1/graphql',
  headers: {
    "x-hasura-admin-secret": "1duEhMExx6E5xl4AgKiUhC1UUg9bZ9gBIHVJO3gRotfa8BW68K4Sdl5dlz6XlPuP"
  }
  
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient
