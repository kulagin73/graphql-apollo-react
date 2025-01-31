import { sqlConnect } from '../connectionDb.js';
import sql from 'mssql';
export default {
    getAllProducts: async () => {
        try {
            await sqlConnect;
            const result = await sql.query`select * from Product`;
            return result.recordset;
        } catch (err) {
            console.error(err);
        }
    },
    getProductById: async ({ Id }) => {
        try {
            await sqlConnect;
            const result = await sql.query`SELECT * FROM Product WHERE Id = ${Id}`;
            return result.recordset[0];
        } catch (err) {
            console.error(err);
        }
    },
    createProduct: async ({ input }) => {
        try {
            await sqlConnect;
            await sql.query`INSERT INTO Product (ProductName, ProductDescription, ProductPrice,ProductCount) VALUES (${input.ProductName}, ${input.ProductDescription}, ${input.ProductPrice},${input.ProductCount})`;
            return input;
        } catch (err) {
            console.error(err);
        }
    },

    deleteProduct: async ({ Id }) => {
        try {
            await sqlConnect;
            await sql.query`DELETE FROM Product WHERE Id=${Id}`;
            return Id
        } catch (err) {
            console.error(err);
        }
    },

    updateProduct: async ({ input }) => {
        try {
            await sqlConnect;
            await sql.query`UPDATE Product SET ProductName=${input.ProductName}, ProductDescription=${input.ProductDescription}, ProductPrice=${input.ProductPrice},ProductCount=${input.ProductCount} WHERE Id=${input.Id}`;
            return input;
        } catch (err) {
            console.error(err);
        }
    }
}