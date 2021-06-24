import {gql} from '@apollo/client'



export const REGISTER_USER = gql`
    mutation registerUser($username: String, $password: String){
            register(
                username: $username
                password: $password
            ){
                message
            }
        }
`

export const LOGIN_USER= gql`
        mutation loginUser($username: String, $password: String){
            login(username: $username, password: $password){
                value
            }
        }
`