import { gql } from "apollo-server-express";

export default gql`
  type AddressType {
    TableId: Int
    AddressName: String
    Street: String
    PostOffice: String
    City: String
    District: String
    Pincode: String
    State: String
    Country: String
    AddressId: String
    PlaceCode: String
  }
  input AddressInputType {
    AddressName: String
    Street: String
    PostOffice: String
    City: String
    District: String
    Pincode: String
    State: String
    Country: String
  }
  extend type Query {
    getAddressByPincode(id: String!): AddressType
    getAddress: [AddressType!]!
  }
  extend type Mutation {
    createAddress(Town: String, City: String): AddressType!
  }
`;
