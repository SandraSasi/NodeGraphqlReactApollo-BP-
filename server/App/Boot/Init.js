module.exports = function() {
  var graphqlHTTP = require("express-graphql");
  const schema = require("../../Graphql/Schema.js");
  var express = require("express");
  var port = process.env.PORT || 5000;

  var root = { hello: () => "Hello world, have a nice day!" };
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
  console.log(`You are listening to ${port} port`);
};
