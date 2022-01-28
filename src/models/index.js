// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Home } = initSchema(schema);

export {
  Note,
  Home
};