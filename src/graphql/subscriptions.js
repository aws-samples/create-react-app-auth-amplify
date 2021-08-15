/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onCreateCarrierCommand = /* GraphQL */ `
  subscription OnCreateCarrierCommand($GameId: String) {
    onCreateCarrierCommand(GameId: $GameId) {
      GameId
    }
  }
`;
export const onUpdateCarrierCommand = /* GraphQL */ `
  subscription OnUpdateCarrierCommand($GameId: String) {
    onUpdateCarrierCommand(GameId: $GameId) {
      GameId
    }
  }
`;
export const onDeleteCarrierCommand = /* GraphQL */ `
  subscription OnDeleteCarrierCommand($GameId: String) {
    onDeleteCarrierCommand(GameId: $GameId) {
      GameId
    }
  }
`;
export const onCreateCcGames = /* GraphQL */ `
  subscription OnCreateCcGames($Id: Int) {
    onCreateCCGames(Id: $Id) {
      Id
    }
  }
`;
export const onUpdateCcGames = /* GraphQL */ `
  subscription OnUpdateCcGames($Id: Int) {
    onUpdateCCGames(Id: $Id) {
      Id
    }
  }
`;
export const onDeleteCcGames = /* GraphQL */ `
  subscription OnDeleteCcGames($Id: Int) {
    onDeleteCCGames(Id: $Id) {
      Id
    }
  }
`;
