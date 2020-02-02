import { gql } from "apollo-server-express";

import addressSchema from "./Address";
import placecodeSchema from "./PlaceCode";
import apartmentSchema from "./Apartment";

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, addressSchema, placecodeSchema, apartmentSchema];
// const {
//   GraphQLString,
//   GraphQLList,
//   GraphQLInt,
//   GraphQLSchema
// } = require("graphql");

// const { GraphQLObjectType } = require("graphql");
// const db = require("./Database/DatabaseConnection.js");
// const EmployeeType = new GraphQLObjectType({
//   name: "Employee",
//   fields: () => ({
//     table_id: { type: GraphQLInt },
//     first_name: { type: GraphQLString },
//     last_name: { type: GraphQLString },
//     work_profile: { type: GraphQLString },
//     employee_id: { type: GraphQLString },
//     team_id: { type: GraphQLString },
//     emp_key: { type: GraphQLString }
//   })
// });

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     getemployees: {
//       type: EmployeeType,
//       args: { table_id: { type: GraphQLInt } },
//       resolve: (parent, args) => {
//         let post = { table_id: args.table_id };
//         let sql = "SELECT * FROM  emp_rewrite_t_employee WHERE ?";
//         return new Promise((resolve, reject) => {
//           db.query(sql, post, (error, results, fields) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(JSON.parse(JSON.stringify(results[0])));
//             }
//           });
//         });
//       }
//     }
//   }
// });
// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addEmployee: {
//       type: EmployeeType,
//       args: {
//         first_name: { type: GraphQLString },
//         last_name: { type: GraphQLString },
//         work_profile: { type: GraphQLString }
//       },
//       resolve: (parent, args) => {
//         console.log(args);

//         let sql = "INSERT INTO emp_rewrite_t_employee SET ?";
//         var query = db.query(sql, args, function(err, result) {
//           // Neat!
//         });
//       }
//     },
//     addEmployeeObject: {
//       type: EmployeeType,
//       args: {
//         employee: [EmployeeType]
//       },
//       resolve: (parent, args) => {
//         console.log(args);

//         // let sql = "INSERT INTO emp_rewrite_t_employee SET ?";
//         // var query = db.query(sql, args, function(err, result) {
//         //   // Neat!
//         // });
//       }
//     }
//   }
// });
// module.exports = new GraphQLSchema({
//   query: RootQuery,
//   mutation: Mutation
// });
