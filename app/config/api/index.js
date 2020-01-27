import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"
import { getBaseUrl } from "../helpers/global";



export const client = new ApolloClient({
  uri:getBaseUrl,
  cache: new InMemoryCache()
})

