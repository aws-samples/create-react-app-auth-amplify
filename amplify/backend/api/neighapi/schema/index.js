const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Notification {
  _id: ID!
  content: String!
  contact: String!
}
type Log {
  _id: ID!
  content: String!
}
type Mare {
  _id: ID!
  name: String
  camera: String!
  date: String!
  time: String!
  stat: String!
}
input LogInput {
  content: String!
}
input NotificationInput {
  content: String!
  contact: String!
}
input MareInput {
  name: String
  camera: String!
  date: String!
  time: String!
  stat: String!
}
type RootQuery {
    mares: [Mare!]!
}
type RootMutation {
    createLog(logInput: LogInput): Log
    createNotification(notificationInput: NotificationInput): Notification
    createMare(mareInput: MareInput): Mare
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);