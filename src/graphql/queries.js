/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      _deleted
      _lastChangedAt
      _version
      created
      createdAt
      creator
      id
      invite
      password
      players
      reports
      title
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _lastChangedAt
        _version
        created
        createdAt
        creator
        id
        invite
        password
        players
        reports
        title
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGames = /* GraphQL */ `
  query SyncGames(
    $filter: ModelGameFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncGames(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        created
        createdAt
        creator
        id
        invite
        password
        players
        reports
        title
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
