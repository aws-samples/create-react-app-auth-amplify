// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserModel } = initSchema(schema);

export {
  UserModel
};