// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, NextGames, Blog, Post, Comment } = initSchema(schema);

export {
  Team,
  NextGames,
  Blog,
  Post,
  Comment
};