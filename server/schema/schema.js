import {buildSchema} from 'graphql';
import {mainSchemaString} from './mainSchemaString.js';

const schema = buildSchema(String(mainSchemaString));

export {schema};