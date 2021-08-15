/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $condition: ModelGameConditionInput
    $input: CreateGameInput!
  ) {
    createGame(condition: $condition, input: $input) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $condition: ModelGameConditionInput
    $input: DeleteGameInput!
  ) {
    deleteGame(condition: $condition, input: $input) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $condition: ModelGameConditionInput
    $input: UpdateGameInput!
  ) {
    updateGame(condition: $condition, input: $input) {
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
export const createCarrierCommand = /* GraphQL */ `
  mutation CreateCarrierCommand($input: CreateCarrierCommandInput!) {
    createCarrierCommand(input: $input) {
      GameId
    }
  }
`;
export const updateCarrierCommand = /* GraphQL */ `
  mutation UpdateCarrierCommand($input: UpdateCarrierCommandInput!) {
    updateCarrierCommand(input: $input) {
      GameId
    }
  }
`;
export const deleteCarrierCommand = /* GraphQL */ `
  mutation DeleteCarrierCommand($input: DeleteCarrierCommandInput!) {
    deleteCarrierCommand(input: $input) {
      GameId
    }
  }
`;
export const createCcGames = /* GraphQL */ `
  mutation CreateCcGames($input: CreateCCGamesInput!) {
    createCCGames(input: $input) {
      Id
    }
  }
`;
export const updateCcGames = /* GraphQL */ `
  mutation UpdateCcGames($input: UpdateCCGamesInput!) {
    updateCCGames(input: $input) {
      Id
    }
  }
`;
export const deleteCcGames = /* GraphQL */ `
  mutation DeleteCcGames($input: DeleteCCGamesInput!) {
    deleteCCGames(input: $input) {
      Id
    }
  }
`;
