/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addTodo = /* GraphQL */ `
  mutation AddTodo(
    $id: ID!
    $name: String
    $description: String
    $priority: Int
    $status: TodoStatus
  ) {
    addTodo(
      id: $id
      name: $name
      description: $description
      priority: $priority
      status: $status
    ) {
      id
      name
      description
      priority
      status
    }
  }
`;
