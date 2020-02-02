module.exports = function() {
  //   var app = express();
  //   const empRouter = require(__basedir + "/server/Layer/Api/Employee.ts");

  //   //Routes to employee
  //   app.use(express.json());
  //   app.use("/api/employee", empRouter);
  //   app.get("/api/customers", (req, res) => {
  //     const customers = [
  //       { id: 1, firstName: "John", lastName: "Doe" },
  //       { id: 2, firstName: "Brad", lastName: "Traversy" },
  //       { id: 3, firstName: "Mary", lastName: "Swanson" }
  //     ];

  //     res.json(customers);
  //   });
  //   app.get("/", function(req, res) {
  //     res.send("Hello world");
  //   });

  //   app.listen(port);
  //   console.log("You are listening to port");
  // };

  var graphqlHTTP = require("express-graphql");
  const schema = require("../../Graphql/Schema.js");
  var express = require("express");
  var port = process.env.PORT || 5000;

  var root = { hello: () => "Hello world!" };
  var cors = require("cors");
  var app = express();
  app.use(cors());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  );
  app.listen(port);
  console.log(`You are listening to port ${port}`);
};
