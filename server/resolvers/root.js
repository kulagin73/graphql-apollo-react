import userResolver from "./userResolver.js";
import productResolver from "./productResolver.js";

export const rootValue = {
    ...userResolver,
    ...productResolver
}