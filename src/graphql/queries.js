/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCcGames = /* GraphQL */ `
  query GetCcGames($Id: Int!) {
    getCCGames(Id: $Id) {
      Id
    }
  }
`;
export const listCcGames = /* GraphQL */ `
  query ListCcGames(
    $filter: TableCCGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCCGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Id
      }
      nextToken
    }
  }
`;
