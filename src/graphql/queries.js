/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTournament = /* GraphQL */ `
  query GetTournament($name: String!) {
    getTournament(name: $name) {
      active
      champion
      dates
      id
      location
      major
      name
      order
      url
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: TableTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        champion
        dates
        id
        location
        major
        name
        order
        url
      }
      nextToken
    }
  }
`;
export const queryTournamentsByOrderIndex = /* GraphQL */ `
  query QueryTournamentsByOrderIndex(
    $after: String
    $first: Int
    $order: Int!
  ) {
    queryTournamentsByOrderIndex(after: $after, first: $first, order: $order) {
      items {
        active
        champion
        dates
        id
        location
        major
        name
        order
        url
      }
      nextToken
    }
  }
`;
export const getTournamentTable = /* GraphQL */ `
  query GetTournamentTable($name: String!) {
    getTournamentTable(name: $name) {
      name
      order
    }
  }
`;
export const listTournamentTables = /* GraphQL */ `
  query ListTournamentTables(
    $filter: TableTournamentTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        order
      }
      nextToken
    }
  }
`;
export const queryTournamentTablesByOrderIndex = /* GraphQL */ `
  query QueryTournamentTablesByOrderIndex(
    $order: Int!
    $first: Int
    $after: String
  ) {
    queryTournamentTablesByOrderIndex(
      order: $order
      first: $first
      after: $after
    ) {
      items {
        name
        order
      }
      nextToken
    }
  }
`;
