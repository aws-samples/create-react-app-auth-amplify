import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/resolvers";

const typeDefs = `
 type Note {
  _id: ID!
  title: String!,
  date: Date,
  content: String!
 }
 type Mare {
  _id: ID!
  name: String!,
  camera: String!,
  date: String!,
  time: String!,
  stat: String!
 }
 scalar Date
 type Query {
  getNote(_id: ID!): Note
  allNotes: [Note]
  getMare(_id: ID!): Mare
  allMares: [Mare]
 }
 input NoteInput {
 	title: String!
 	content: String!
 }
 input NoteUpdateInput {
  title: String
  content: String
 }
 input MareInput {
  name: String!
  camera: String!
  date: String!
  time: String!
  stat: String!
}
input MareUpdateInput {
  name: String!
  camera: String!
  date: String!
  time: String!
  stat: String!
}
 type Mutation {
  createNote(input: NoteInput) : Note
  updateNote(_id: ID!, input: NoteUpdateInput): Note
  deleteNote(_id: ID!) : Note
  createMare(input: MareInput) : Mare
  updateMare(_id: ID!, input: MareUpdateInput): Mare
  deleteMare(_id: ID!) : Mare
 }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;