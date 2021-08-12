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
