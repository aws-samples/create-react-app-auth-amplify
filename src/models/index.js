// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Roast, Selection } = initSchema(schema);

export {
  Roast,
  Selection
};