import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7u45312q601xid4wgb1a0/master ',
    cache: new InMemoryCache()
})