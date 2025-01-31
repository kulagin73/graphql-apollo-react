export const querySchema = `
    type Query {
        getAllUsers: [User]
        getUserById(Id:Int): User
        getAllProducts: [Product]
        getProductById(Id:Int): Product
    }    
    type Mutation {
        createUser(input: UserInput): User
        updateUser(input: UserInput): User
        deleteUser(Id: Int): Int
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
        deleteProduct(Id: Int): Int
    }
`;