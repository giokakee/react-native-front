import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import {LOGIN_USER} from '../graphql/mutations'
import { Redirect } from 'react-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1
    }
})

const useSignIn = () => {
  const [login, result] = useMutation(LOGIN_USER)

  const signIn = async ({ username, password, setUsername, setPassword, setMessage}) => {
      try{
        await login({
          variables: {username, password}
        })
      }catch(err){
       console.log(err.message)
      }
  }
  return [signIn, result]
}

const SignIn = ({token, setToken, setMessage}) => {
    const [username, setUsername]= useState('')
    const [password, setPassword] = useState('')
    const [signIn, {data}] = useSignIn()
console.log('signin.jsx')


       if(data){
         AsyncStorage.setItem('token', data.login.value)
         if(!token){
          setToken(data.login.value)
         }
       }
       

  
    return (
        <View>
              <Text>username</Text>
            <TextInput 
                onChangeText={(value) => setUsername(value)}
                value={username}
                style={styles.input}
              />
              <Text>password</Text>
              <TextInput 
                onChangeText={(value) => setPassword(value)}
                value={password}
                secureTextEntry={true}
                style={styles.input}
              />
              <Button 
                onPress={() => signIn({username, password, setUsername, setPassword, setMessage})}
                title='login'
              />
        </View>
    )
  };
  
  export default SignIn;