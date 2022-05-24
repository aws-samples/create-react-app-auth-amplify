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
