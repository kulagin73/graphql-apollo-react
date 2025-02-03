import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
    query {
        getAllProducts {
            Id
            ProductName
            ProductPrice
        }
    }
`

export const GET_PRODUCT = gql`
     query getProductById($Id: Int!) {
        getProductById(Id:$Id) {
            Id
            ProductName
            ProductDescription
            ProductPrice
            ProductCount
        }
     }
`

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($Id: Int!) {
        deleteProduct(Id: $Id) 
    }
`


export const CREATE_PRODUCT = gql`
    mutation createProduct($input: ProductInput) {
        createProduct(input: $input) {
            Id
            ProductName
            ProductDescription
            ProductPrice
            ProductCount
        }
    }
`

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($input: ProductInput) {
        updateProduct(input: $input) {
            Id
            ProductName
            ProductDescription
            ProductPrice
            ProductCount
        }
    }   
`