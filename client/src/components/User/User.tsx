import React, { useState, useReducer } from "react";
import gql from "graphql-tag";
import { Button, Card, Elevation, FileInput } from "@blueprintjs/core";
import { useMutation } from "@apollo/react-hooks";

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  emailAddress: string;
}
export interface Address {
  address: string;
  street: string;
  postOffice: string;
  landmark?: string;
  pincode: string;
  type: string;
  town: string;
  city: string;
  district: string;
  state: string;
}
// interface Person {
//   firstName: string;
//   lastName: string;
//   workProfile: string;
//   phoneNumber: number;
//   emailAddress: string;
// }
interface StepProps {
  user: User;
  currentStep: number;
  handleChange(event: any, type: string): void;
}
interface IdentificationProps {
  currentStep: number;
}
interface StepProps2 {
  user: any;
  currentStep: number;
  handleChange(event: any, type: string): void;
}
const defaultState: any = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: {
    address: "C-105",
    street: "Seegehalli",
    landmark: "Opp Mc d",
    postOffice: "Kadugodi",
    town: "Whitefield",
    city: "Bangalore",
    district: "Bengaluru",
    state: "Karnataka",
    type: "Temp"
  }
};
interface UserHome {}

const User = () => {
  // const [addEmployee, metRes] = useMutation(ADD_EMPLOYEE);
  const [current, setCurrent] = useState(1);
  const [state, setState] = useState(defaultState);
  const handleChange = (evt: any, type: string) => {
    var name = evt.target.name;
    var newValue = evt.target.value;
    console.log("nmae", name);
    console.log("newValue", newValue);

    if (type === "address") {
      let r = { ...state.address, [name]: newValue };
      console.log("hhhj", r);

      setState({
        ...state,
        address: { ...state.address, [name]: newValue }
      });
    } else {
      setState({ ...state, [name]: newValue });
    }
  };

  const addCurrentValue = () => {
    setCurrent(current + 1);
  };
  const minusCurrentValue = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="form-wrapper">
      <Card interactive={true} elevation={Elevation.TWO}>
        <Step1 user={state} currentStep={current} handleChange={handleChange} />
      </Card>

      <Card interactive={true} elevation={Elevation.TWO}>
        <AddressForm
          user={state}
          currentStep={current}
          handleChange={handleChange}
        />
      </Card>
      <Card interactive={true} elevation={Elevation.TWO}>
        <Identification currentStep={current} />
      </Card>

      {current !== 1 ? (
        <Button
          className="docs-wiggle"
          icon="arrow-left"
          intent="primary"
          onClick={minusCurrentValue}
        >
          Previous
        </Button>
      ) : (
        ""
      )}
      {current !== 4 ? (
        <Button
          className="docs-wiggle"
          icon="arrow-right"
          onClick={addCurrentValue}
          intent="success"
        >
          Next
        </Button>
      ) : (
        ""
      )}
      {current === 4 ? (
        <Button className="docs-wiggle" type="submit" icon="saved">
          Submit
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

const Step1 = (props: StepProps) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="form-class">
      <label htmlFor="email">First Name</label>
      <input
        className="form-control"
        type="text"
        name="firstName"
        value={props.user.firstName ? props.user.firstName : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "basic")} // Prop: Puts data into state
      />
      <label htmlFor="email">Last Name</label>
      <input
        className="form-control"
        name="lastName"
        type="text"
        value={props.user.lastName ? props.user.lastName : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "basic")} // Prop: Puts data into state
      />
      <label htmlFor="email">Phone number</label>
      <input
        className="form-control"
        type="text"
        name="phoneNumber"
        value={props.user.phoneNumber ? props.user.phoneNumber : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "basic")} // Prop: Puts data into state
      />
      <label htmlFor="email">Email Address</label>
      <input
        className="form-control"
        type="text"
        name="emailAddress"
        value={props.user.emailAddress ? props.user.emailAddress : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "basic")} //prop: Puts data into state
      />
    </div>
  );
};
export const AddressForm = (props: StepProps2) => {
  if (props.currentStep === 1 || props.currentStep > 2) {
    // Prop: The current step
    return null;
  }
  console.log("props", props);

  return (
    <div className="form-class">
      <h3>Enter Address</h3>
      <label htmlFor="email">Address</label>
      <input
        className="form-control"
        type="text"
        name="address"
        value={props.user.address.address ? props.user.address.address : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")} // Prop: Puts data into state
      />
      <label htmlFor="email">Street</label>
      <input
        className="form-control"
        type="text"
        name="street"
        value={props.user.address.street ? props.user.address.street : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
      <label htmlFor="email">Landmark</label>
      <input
        className="form-control"
        type="text"
        name="landmark"
        value={props.user.address.landmark ? props.user.address.landmark : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
      <label htmlFor="email">Post Office</label>
      <input
        className="form-control"
        type="text"
        name="postOffice"
        value={
          props.user.address.postOffice ? props.user.address.postOffice : ""
        } // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
      <label htmlFor="email">Town</label>
      <input
        className="form-control"
        type="text"
        name="town"
        value={props.user.address.town ? props.user.address.town : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
      <label htmlFor="email">City</label>
      <input
        className="form-control"
        type="text"
        name="city"
        value={props.user.address.city ? props.user.address.city : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
      <label htmlFor="email">District</label>
      <input
        className="form-control"
        type="text"
        name="district"
        value={props.user.address.district ? props.user.address.district : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
      <label htmlFor="email">State</label>
      <input
        className="form-control"
        type="text"
        name="state"
        value={props.user.address.state ? props.user.address.state : ""} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
      <label htmlFor="email">Type</label>
      <input
        className="form-control"
        type="text"
        name="type"
        value={"Temp Address"} // Prop: The email input data
        onChange={event => props.handleChange(event, "address")}
      />
    </div>
  );
};
const Identification = (props: IdentificationProps) => {
  if (props.currentStep === 2 || props.currentStep < 3) {
    // Prop: The current step
    return null;
  }

  return (
    <div className="form-class">
      <label htmlFor="email">First Name</label>
      <FileInput text={"this is a text"} buttonText={"Choose File"} />
    </div>
  );
};
export default User;
