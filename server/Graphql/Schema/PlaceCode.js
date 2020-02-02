import { gql } from "apollo-server-express";

export default gql`
  type Code {
    TableId: Int
    Town: String
    City: String
    District: String
    Pincode: String
    State: String
    Country: String
    AddressId: String
    PlaceCode: String
  }
  input Codef {
    Town: String
    City: String
    District: String
    Pincode: String
    State: String
    Country: String
    PlaceCode: String
  }
  extend type Query {
    getPlaceCodeByPincode(id: String!): Code
    getplacecode: [Code!]!
  }
  extend type Mutation {
    createPlaceCode(placeArray: Codef): Code
  }
`;
