import { gql } from "apollo-server-express";

export default gql`
  type ApartmentModelType {
    FlatId: String
    FlatName: String
    AddressId: String
    Address: AddressType
    Manager: String
    FlatShortName: String
    FlatPhone: String
    FlatDescription: String
  }
  input ApartmentInputType {
    FlatName: String
    Address: AddressInputType
    Manager: String
    FlatShortName: String
    FlatPhone: String
    FlatDescription: String
  }
  extend type Query {
    getFlat: [ApartmentModelType!]!
    getFlatbyId(id: String!): ApartmentModelType
  }
  extend type Mutation {
    createFlat(flat: ApartmentInputType): ApartmentModelType
  }
`;
