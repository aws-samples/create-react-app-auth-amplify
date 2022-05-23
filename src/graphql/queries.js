/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTournament = /* GraphQL */ `
  query GetTournament($name: String!) {
    getTournament(name: $name) {
      id
      name
      active
      champion
      dates
      location
      major
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
        id
        name
        active
        champion
        dates
        location
        major
        order
        url
      }
      nextToken
    }
  }
`;
export const queryTournamentsByOrderIndex = /* GraphQL */ `
  query QueryTournamentsByOrderIndex(
    $order: Int!
    $first: Int
    $after: String
  ) {
    queryTournamentsByOrderIndex(order: $order, first: $first, after: $after) {
      items {
        id
        name
        active
        champion
        dates
        location
        major
        order
        url
      }
      nextToken
    }
  }
`;
