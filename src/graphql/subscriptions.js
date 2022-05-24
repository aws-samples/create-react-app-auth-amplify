/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament(
    $active: Int
    $champion: String
    $dates: String
    $id: ID
    $name: String
  ) {
    onCreateTournament(
      active: $active
      champion: $champion
      dates: $dates
      id: $id
      name: $name
    ) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament(
    $active: Int
    $champion: String
    $dates: String
    $id: ID
    $name: String
  ) {
    onDeleteTournament(
      active: $active
      champion: $champion
      dates: $dates
      id: $id
      name: $name
    ) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament(
    $active: Int
    $champion: String
    $dates: String
    $id: ID
    $name: String
  ) {
    onUpdateTournament(
      active: $active
      champion: $champion
      dates: $dates
      id: $id
      name: $name
    ) {
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
export const onCreateTournamentTable = /* GraphQL */ `
  subscription OnCreateTournamentTable($name: String, $order: Int) {
    onCreateTournamentTable(name: $name, order: $order) {
      name
      order
    }
  }
`;
export const onUpdateTournamentTable = /* GraphQL */ `
  subscription OnUpdateTournamentTable($name: String, $order: Int) {
    onUpdateTournamentTable(name: $name, order: $order) {
      name
      order
    }
  }
`;
export const onDeleteTournamentTable = /* GraphQL */ `
  subscription OnDeleteTournamentTable($name: String, $order: Int) {
    onDeleteTournamentTable(name: $name, order: $order) {
      name
      order
    }
  }
`;
