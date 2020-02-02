import React from "react";
import ApolloClient from "apollo-boost";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import NavbarComponent from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import Employee from "./components/Employee/Employee";
import User from "./components/User/User";
import PlaceCode from "./components/Place/PlaceCode";
import ApartmentContainer from "./components/Apartment/ApartmentContainer";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <NavbarComponent />
        <Sidebar />
        <ApartmentContainer />
      </div>
    </ApolloProvider>
  );
};

export default App;
