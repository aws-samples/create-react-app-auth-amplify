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
      created
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
      created
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
      created
    }
  }
`;
export const onCreateCarriedCommandGames = /* GraphQL */ `
  subscription OnCreateCarriedCommandGames($id: String) {
    onCreateCarriedCommandGames(id: $id) {
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
export const onUpdateCarriedCommandGames = /* GraphQL */ `
  subscription OnUpdateCarriedCommandGames($id: String) {
    onUpdateCarriedCommandGames(id: $id) {
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
export const onDeleteCarriedCommandGames = /* GraphQL */ `
  subscription OnDeleteCarriedCommandGames($id: String) {
    onDeleteCarriedCommandGames(id: $id) {
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
