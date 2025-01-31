import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
    query {
         getAllUsers {
            Id
            Name
            Surname
            Age
        }
    }
`

export const GET_USER = gql`
    query getUserById($Id: Int!) {
        getUserById(Id: $Id) {
            Id
            Name
            Surname
            Age
        }           
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($Id: Int!) {
        deleteUser(Id: $Id) 
    }
`

export const CREATE_USER = gql`
    mutation createUser($input: UserInput) {
        createUser(input: $input) {
            Name,Surname,Age
        }
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($input: UserInput) {
        updateUser(input: $input) {
            Name,Surname,Age
        }
    }
`