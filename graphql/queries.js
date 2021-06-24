import {gql} from '@apollo/client'


export const ALL_USERS = gql`
    query{
        usersCount
    }
`

export const GET_REPOSITORIES = gql`
    query{
        repositories{
            id
            fullName
            description
            language
            forksCount
            stargazersCount
            ratingAverage
            reviewCount
            ownerAvatarUrl
        }
    }
`
