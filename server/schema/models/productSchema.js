export const productSchema = `
    type Product {
        Id:Int
        ProductName: String
        ProductDescription: String
        ProductPrice:String
        ProductCount:Int
    }
    input ProductInput {
        Id:Int
        ProductName: String!
        ProductDescription: String!
        ProductPrice:String!
        ProductCount:Int!
    }
`;