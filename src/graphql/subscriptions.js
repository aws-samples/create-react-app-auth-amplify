/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament(
    $id: ID
    $name: String
    $active: Int
    $champion: String
    $dates: String
  ) {
    onCreateTournament(
      id: $id
      name: $name
      active: $active
      champion: $champion
      dates: $dates
    ) {
      id
      name
      active
      champion
      dates
      location
      major
      order
      url
    }
  }
`;
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament(
    $id: ID
    $name: String
    $active: Int
    $champion: String
    $dates: String
  ) {
    onUpdateTournament(
      id: $id
      name: $name
      active: $active
      champion: $champion
      dates: $dates
    ) {
      id
      name
      active
      champion
      dates
      location
      major
      order
      url
    }
  }
`;
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament(
    $id: ID
    $name: String
    $active: Int
    $champion: String
    $dates: String
  ) {
    onDeleteTournament(
      id: $id
      name: $name
      active: $active
      champion: $champion
      dates: $dates
    ) {
      id
      name
      active
      champion
      dates
      location
      major
      order
      url
    }
  }
`;
