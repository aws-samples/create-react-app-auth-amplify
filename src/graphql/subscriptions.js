/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCcGames = /* GraphQL */ `
  subscription OnCreateCcGames(
    $Id: Int
    $author: String
    $code: String
    $password: String
    $title: String
  ) {
    onCreateCCGames(
      Id: $Id
      author: $author
      code: $code
      password: $password
      title: $title
    ) {
      Id
      author
      code
      password
      title
      players
      reports
    }
  }
`;
export const onUpdateCcGames = /* GraphQL */ `
  subscription OnUpdateCcGames(
    $Id: Int
    $author: String
    $code: String
    $password: String
    $title: String
  ) {
    onUpdateCCGames(
      Id: $Id
      author: $author
      code: $code
      password: $password
      title: $title
    ) {
      Id
      author
      code
      password
      title
      players
      reports
    }
  }
`;
export const onDeleteCcGames = /* GraphQL */ `
  subscription OnDeleteCcGames(
    $Id: Int
    $author: String
    $code: String
    $password: String
    $title: String
  ) {
    onDeleteCCGames(
      Id: $Id
      author: $author
      code: $code
      password: $password
      title: $title
    ) {
      Id
      author
      code
      password
      title
      players
      reports
    }
  }
`;
