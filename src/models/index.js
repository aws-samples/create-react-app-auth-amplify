// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tournament, TournamentConnection } = initSchema(schema);

export {
  Tournament,
  TournamentConnection
};