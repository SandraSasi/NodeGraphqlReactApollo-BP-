import React, { useState } from "react";
import gql from "graphql-tag";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { useMutation } from "@apollo/react-hooks";
interface Employees {
  first_name: string;
  last_name: string;
  work_profile: string;
}
const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstname: String!
    $lastname: String!
    $workprofile: String!
  ) {
    addEmployee(
      first_name: $firstname
      last_name: $lastname
      work_profile: $workprofile
    ) {
      first_name
    }
  }
`;
export interface Address {
  address: string;
  lane: string;
  postOffice: string;
  landmark?: string;
  pincode: string;
  type: string;
  town: string;
  city: string;
  district: string;
  state: string;
}
interface Person {
  firstName: string;
  lastName: string;
  workProfile: string;
  phoneNumber: number;
  emailAddress: string;
}
interface StepProps {
  person: Person;
  currentStep: number;
  handleChange(event: any): void;
}
interface StepProps2 {
  address: Address;
  currentStep: number;
  handleChange(event: any): void;
}

// const Employee: React.FC = () => {
//   const [addEmployee, metRes] = useMutation(ADD_EMPLOYEE);
//   const [current, setCurrent] = useState(1);
//   const [person, setPerson] = useState({} as Person);
//   const [address, setAddress] = useState({} as Address);
//   const handleSubmit = (evt: any) => {
//     evt.preventDefault();
//     addEmployee({
//       variables: {
//         person: person
//       }
//     });
//   };
//   // Use the submitted data to set the state
//   const handleChange = (event: any) => {
//     const { name, value } = event.target;
//   };

//   const addCurrentValue = () => {
//     setCurrent(current + 1);
//   };
//   const minusCurrentValue = () => {
//     setCurrent(current - 1);
//   };

//   return (
//     <div className="form-wrapper">
//       <form onSubmit={handleSubmit}>
//         <Card interactive={true} elevation={Elevation.TWO}>
//           <Step1
//             person={person}
//             currentStep={current}
//             handleChange={handleChange}
//           />
//         </Card>

//         <Card interactive={true} elevation={Elevation.TWO}>
//           <AddressForm
//             address={address}
//             currentStep={current}
//             handleChange={handleChange}
//           />
//         </Card>

//         {current !== 1 ? (
//           <Button
//             className="docs-wiggle"
//             icon="arrow-left"
//             intent="primary"
//             onClick={minusCurrentValue}
//           >
//             Previous
//           </Button>
//         ) : (
//           ""
//         )}
//         {current !== 3 ? (
//           <Button
//             className="docs-wiggle"
//             icon="arrow-right"
//             onClick={addCurrentValue}
//             intent="success"
//           >
//             Next
//           </Button>
//         ) : (
//           ""
//         )}
//         {current === 3 ? (
//           <Button className="docs-wiggle" type="submit" icon="saved">
//             Submit
//           </Button>
//         ) : (
//           ""
//         )}
//       </form>
//     </div>
//   );
// };
const Employee: React.FC = () => {
  const [addEmployee, metRes] = useMutation(ADD_EMPLOYEE);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [workProfile, setWorkProfile] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    addEmployee({
      variables: {
        firstname: fname,
        lastname: lname,
        workprofile: workProfile
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Frirst Name:
          <input
            type="text"
            value={fname}
            onChange={e => setFName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lname}
            onChange={e => setLName(e.target.value)}
          />
        </label>
        <label>
          Work Profile:
          <input
            type="text"
            value={workProfile}
            onChange={e => setWorkProfile(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Button className={"docs-wiggle"} icon="refresh">
        {"Click to wiggle"}
      </Button>
    </div>
  );
};
export default Employee;

export const AddressForm = (props: StepProps2) => {
  if (props.currentStep === 1 || props.currentStep > 2) {
    // Prop: The current step
    return null;
  }
  return (
    <div className="form-class">
      <h3>Enter Address</h3>
      <label htmlFor="email">Address</label>
      <input
        className="form-control"
        type="text"
        value={props.address.address ? props.address.address : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Street</label>
      <input
        className="form-control"
        type="text"
        value={props.address.lane ? props.address.lane : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Landmark</label>
      <input
        className="form-control"
        type="text"
        value={props.address.landmark ? props.address.landmark : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Post Office</label>
      <input
        className="form-control"
        type="text"
        value={props.address.postOffice ? props.address.postOffice : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Town</label>
      <input
        className="form-control"
        type="text"
        value={props.address.town ? props.address.town : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">City</label>
      <input
        className="form-control"
        type="text"
        value={props.address.city ? props.address.city : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">District</label>
      <input
        className="form-control"
        type="text"
        value={props.address.district ? props.address.address : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">State</label>
      <input
        className="form-control"
        type="text"
        value={props.address.state ? props.address.state : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Type</label>
      <input
        className="form-control"
        type="text"
        value={"Temp Address"} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
};
const Step1 = (props: StepProps) => {
  if (props.currentStep !== 1) {
    // Prop: The current step
    return null;
  }
  console.log("Props1", props);

  return (
    <div className="form-class">
      <label htmlFor="email">First Name</label>
      <input
        className="form-control"
        type="text"
        name="firstName"
        value={props.person.firstName ? props.person.firstName : ""} // Prop: The email input data
        onChange={e => {
          props.person.firstName = e.target.value;
        }} // Prop: Puts data into state
      />
      <label htmlFor="email">Last Name</label>
      <input
        className="form-control"
        type="text"
        value={props.person.lastName ? props.person.firstName : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Phone number</label>
      <input
        className="form-control"
        type="text"
        value={props.person.phoneNumber ? props.person.phoneNumber : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Email Address</label>
      <input
        className="form-control"
        type="text"
        value={props.person.emailAddress ? props.person.emailAddress : ""} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
      <label htmlFor="email">Work Profile</label>
      <input
        className="form-control"
        type="text"
        value={props.person.workProfile} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
};
