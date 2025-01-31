import { sqlConnect } from '../connectionDb.js';
import sql from 'mssql';
export default {
    getAllUsers: async () => {
        try {
            await sqlConnect;
            const result = await sql.query`select * from Users`;
            return result.recordset;
        } catch (err) {
            console.error(err);
        }
    },

    getUserById: async ({ Id }) => {
        try {
            await sqlConnect;
            const result = await sql.query`SELECT * FROM Users WHERE Id = ${Id}`;
            return result.recordset[0];
        } catch (err) {
            console.error(err);
        }
    },

    createUser: async ({ input }) => {
        try {
            await sqlConnect;
            await sql.query`INSERT INTO users (Name, Surname, Age) VALUES (${input.Name}, ${input.Surname}, ${input.Age})`;
            return input;
        } catch (err) {
            console.error(err);
        }
    },

    deleteUser: async ({ Id }) => {
        try {
            await sqlConnect;
            await sql.query`DELETE FROM users WHERE Id=${Id}`;
            return Id
        } catch (err) {
            console.error(err);
        }
    },

    updateUser: async ({ input }) => {
        try {
            await sqlConnect;
            await sql.query`UPDATE users SET Name=${input.Name}, Surname=${input.Surname}, Age=${input.Age} WHERE Id=${input.Id}`;
            return input;
        } catch (err) {
            console.error(err);
        }
    }

}