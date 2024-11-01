import gql from 'graphql-tag';

export const GET_ALL_CUSTOMERS = gql`
  query GetAllCustomers {
    getAllCustomers {
      id
      name
      email
      createdAt
    }
  }
`;

