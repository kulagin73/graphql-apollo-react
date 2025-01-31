import { userSchema } from "./models/userShema.js";
import { productSchema } from "./models/productSchema.js";
import { querySchema } from "./querySchema.js";

export let mainSchemaString = 
userSchema +
productSchema +
querySchema 
;


