import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import theme from '../theme';
import {REGISTER_USER} from '../graphql/mutations'
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router';

const useRegister = () => {
  const [registerUser, result] = useMutation(REGISTER_USER)

  const register =  ({username, setUsername, password, setPassword, setMessage}) => {
         registerUser({
          variables:{
            username,password
          }
        })
        setUsername('')
        setPassword('')
  }

  return [register, result]

}


const Register = ({setMessage}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, {data, error}] = useRegister()
useEffect(() => {
  if(error){
    console.log('register.jsx ', {message: error.message} )
  }
  if(data){
    setMessage(data.register.message)
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }
}, [data, error])

 if(data){
   
  return <Redirect to='/' />
 }

  return(
    <View>
      <Text>username</Text>
      <TextInput 
        onChangeText={(value) => setUsername(value)}
        value={username}
        style={{borderWidth:1}}
      />
      <Text>password</Text>
      <TextInput 
        onChangeText={(value) => setPassword(value)}
        value={password}
        style={{borderWidth:1}}
        secureTextEntry={true}
      />
      <Button 
        title='REGISTER'
        onPress={() => register({username, password, setUsername, setPassword, setMessage})}
      />
    </View>
  )
}

export default Register