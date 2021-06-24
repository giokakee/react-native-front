import React, { useEffect, useState } from 'react';
import { View, Text, Platform, ScrollView, StyleSheet, Pressable, Button} from 'react-native';
import Repositories from './repositories'
import { Route, Switch, Redirect, Link, } from 'react-router-native';
import Sign from './signIn'
import { useQuery, useMutation } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import {REGISTER_USER} from '../graphql/mutations'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Register from './register'
const styles = StyleSheet.create({
  text: {
    color: Platform.select({
      android: 'green',
      ios: 'blue',
      default: 'black',
    }),
  },
});
const WhatIsMyPlatform = () => {
  return <Text style={styles.text}>Your platform is: {Platform.OS}</Text>;
};

const Main = () => {

  const [token, setToken] = useState('')
  const [message, setMessage] = useState('')
  const {data, error, loading} = useQuery(GET_REPOSITORIES)

  AsyncStorage.getItem('token')
    .then(tok => setToken(tok))
 


const logOut =  () => {
     AsyncStorage.removeItem('token')
    setToken('')
}


  return (
    <View style={{marginTop: Constants.statusBarHeight}} >
      <Text>{message? message : null}</Text>
      <Link to='/'>
        <Text>home page</Text>
      </Link>
      
     
      {token
        ?<View>
          <Link to="/repositories">
             <Text>Repositories</Text>
          </Link>
           <Button title='LOG OUT' onPress={logOut} />
        </View>
          :<Link to='/register'>
             <Text>register</Text>
           </Link>}

      

      <Switch>
        {token
        ?<Route path='/repositories'>
            <Repositories 
              reps={data ? data.repositories : []}
            />
          </Route>  
      :null}
        <Route path='/' exact>
          
          {token
           ?<View>
             <Text>this is  home pageee</Text>
           </View>
           : <Sign 
           token={token} 
           setToken={setToken} 
           setMessage={setMessage}/>}

          
        </Route>
        <Route path='/register'>
          <Register setMessage={setMessage} />
        </Route>
      </Switch>
    </View>
  );
};
export default Main;