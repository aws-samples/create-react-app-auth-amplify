/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTournament = /* GraphQL */ `
  mutation CreateTournament($input: CreateTournamentInput!) {
    createTournament(input: $input) {
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
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament($input: DeleteTournamentInput!) {
    deleteTournament(input: $input) {
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
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament($input: UpdateTournamentInput!) {
    updateTournament(input: $input) {
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
export const createTournamentTable = /* GraphQL */ `
  mutation CreateTournamentTable($input: CreateTournamentTableInput!) {
    createTournamentTable(input: $input) {
      name
      order
    }
  }
`;
export const updateTournamentTable = /* GraphQL */ `
  mutation UpdateTournamentTable($input: UpdateTournamentTableInput!) {
    updateTournamentTable(input: $input) {
      name
      order
    }
  }
`;
export const deleteTournamentTable = /* GraphQL */ `
  mutation DeleteTournamentTable($input: DeleteTournamentTableInput!) {
    deleteTournamentTable(input: $input) {
      name
      order
    }
  }
`;
