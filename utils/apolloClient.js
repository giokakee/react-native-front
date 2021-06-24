import { ApolloClient, InMemoryCache, createHttpLink  } from '@apollo/client'
import Constant from 'expo-constants'
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const httpLink = createHttpLink({
    uri: Constant.manifest.extra.uri
})

const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })
}

export default createApolloClient