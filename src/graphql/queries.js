/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCcGames = /* GraphQL */ `
  query GetCcGames($Id: Int!) {
    getCCGames(Id: $Id) {
      Id
      author
      code
      password
      title
      players
      reports
      created
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
        author
        code
        password
        title
        players
        reports
        created
      }
      nextToken
    }
  }
`;
export const getCarriedCommandGames = /* GraphQL */ `
  query GetCarriedCommandGames($id: String!) {
    getCarriedCommandGames(id: $id) {
      id
      author
      code
      password
      title
      players
      reports
      created
    }
  }
`;
export const listCarriedCommandGames = /* GraphQL */ `
  query ListCarriedCommandGames(
    $filter: TableCarriedCommandGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarriedCommandGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        code
        password
        title
        players
        reports
        created
      }
      nextToken
    }
  }
`;
