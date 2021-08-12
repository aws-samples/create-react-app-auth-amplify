// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Game } = initSchema(schema);

export {
  Game
};