import gql from 'graphql-tag';

export const GET_ALL_CONTRACTS = gql`
  query GetAllContracts {
    getAllContracts {
      id
      name
      amount
      currency
      identifier
      description
      status
      endDate
      startDate
      reniewDate
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CONTRACT = gql`
  mutation CreateContract(
    $name: String!
    $amount: Int!
    $currency: String!
    $description: String!
    $status: String!
    $endDate: DateTime!
    $startDate: DateTime!
    $reniewDate: DateTime!
    $contractorId: Int!
    $contractedId: Int!
  ) {
    createContract(
      createContractInput: {
        name: $name
        amount: $amount
        currency: $currency
        description: $description
        status: $status
        endDate: $endDate
        startDate: $startDate
        reniewDate: $reniewDate
        contractorId: $contractorId
        contractedId: $contractedId
      }
    ) {
      id
    }
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation UpdateContract(
    $id: ID!
    $name: String!
    $amount: Int!
    $currency: String!
    $description: String!
    $status: String!
    $endDate: DateTime!
    $startDate: DateTime!
    $reniewDate: DateTime!
  ) {
    updateContract(
      updateContractInput: {
        id: $id
        name: $name
        amount: $amount
        currency: $currency
        description: $description
        status: $status
        endDate: $endDate
        startDate: $startDate
        reniewDate: $reniewDate
      }
    ) {
      id
    }
  }
`;

export const DELETE_CONTRACT = gql`
  mutation DeleteContract($id: ID!) {
    deleteContract(id: $id) {
      id
      deletedAt
    }
  }
`;
