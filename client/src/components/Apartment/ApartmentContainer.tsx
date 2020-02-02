import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
  Intent,
  Spinner,
  Dialog,
  Classes,
  Tooltip,
  Button
} from "@blueprintjs/core";
import Address, { AddressType } from "../common/Address";
const DO = gql`
  query {
    getFlat {
      FlatName
      FlatId
      FlatPhone
      FlatShortName
      FlatDescription
      Manager
    }
  }
`;
const CREATE_FLAT_MUTATION = gql`
  mutation($flat: ApartmentInputType) {
    createFlat(flat: $flat) {
      FlatName
      Address {
        AddressId
      }
    }
  }
`;
interface ApartmentModel {
  FlatName: string;
  FlatId?: string;
  FlatPhone: string;
  FlatShortName: string;
  FlatDescription: string;
  Manager: string;
  AddressId?: string;
  Address: AddressType;
}
const defaultValue: ApartmentModel = {
  FlatName: "",
  FlatPhone: "",
  FlatShortName: "",
  FlatDescription: "",
  Manager: "",
  Address: {
    AddressName: " ",
    Street: " ",
    PostOffice: " ",
    City: " ",
    District: " ",
    State: " ",
    Country: " ",
    Pincode: 0
  }
};
const ApartmentContainer = () => {
  const { data, loading, error } = useQuery(DO);
  const [formData, setFormData] = useState(defaultValue);
  const [createFlat, mutationResult] = useMutation(CREATE_FLAT_MUTATION, {
    //   onCompleted  ()   {
    //   }
  });
  const [dialog, setDialog] = useState(false);
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  if (loading) {
    return (
      <Spinner intent={Intent.NONE} size={Spinner.SIZE_STANDARD} value={0.7} />
    );
  }
  if (error) {
    console.log("error", error);
    return <p>Some error has occired</p>;
  }
  const handleChange = (evt: any) => {
    var name = evt.target.name;
    var newValue = evt.target.value;
    console.log("new", newValue);

    setFormData({ ...formData, [name]: newValue });
  };
  const setAddress = (value: AddressType) => {
    setFormData({ ...formData, Address: { ...value } });
  };
  const saveBranch = () => {
    console.log("formData", formData);

    createFlat({
      variables: {
        flat: { ...formData }
      }
    });
  };
  const setTable = () => {
    if (data && data.getFlat && data.getFlat.length > 0) {
      let r = data.getFlat.map((flat: ApartmentModel, ind: number) => {
        return (
          <tr>
            <th scope="row">{ind + 1}</th>
            <td>{flat.FlatName ? flat.FlatName : ""}</td>
            <td>{flat.FlatShortName ? flat.FlatShortName : ""}</td>
            <td>{flat.FlatPhone ? flat.FlatPhone : ""}</td>
            <td>{flat.Manager ? flat.Manager : ""}</td>
            <td>{flat.FlatDescription ? flat.FlatDescription : ""}</td>
            <td>{flat.FlatId ? flat.FlatId : ""}</td>

            <td>
              <a href="#">Delete</a>
            </td>
            <td>
              <a href="#">Edit</a>
            </td>
          </tr>
        );
      });
      return r;
    }
  };
  return (
    <div className="placecode-table container">
      <div className="row">
        <h3>Flat Details</h3>
        <Button onClick={() => setDialog(true)}>Add new flat</Button>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SI No</th>
              <th scope="col">Flat Name</th>
              <th scope="col">Short Name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Manager</th>
              <th scope="col">Flat Description</th>
              <th scope="col">Flat Id</th>
            </tr>
          </thead>
          <tbody>{setTable()}</tbody>
        </table>
      </div>
      <Dialog
        className={"adding-service-area"}
        icon="info-sign"
        onClose={() => setDialog(false)}
        isOpen={dialog}
        title="Add Emploeur Branch"
      >
        <div className={Classes.DIALOG_BODY}>
          <div className="form-class container">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="email">Flat Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="FlatName"
                  value={formData.FlatName ? formData.FlatName : ""} // Prop: The email input data
                  onChange={event => handleChange(event)} // Prop: Puts data into state
                />
                <label htmlFor="email">Flat Short Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="FlatShortName"
                  value={formData.FlatShortName ? formData.FlatShortName : ""} // Prop: The email input data
                  onChange={event => handleChange(event)} // Prop: Puts data into state
                />
                <label htmlFor="email">Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  name="FlatPhone"
                  value={formData.FlatPhone ? formData.FlatPhone : ""} // Prop: The email input data
                  onChange={event => handleChange(event)} // Prop: Puts data into state
                />
                <label htmlFor="email">Manager</label>
                <input
                  className="form-control"
                  type="text"
                  name="Manager"
                  value={formData.Manager ? formData.Manager : ""} // Prop: The email input data
                  onChange={event => handleChange(event)} // Prop: Puts data into state
                />

                <label htmlFor="email">Flat Description</label>
                <input
                  className="form-control"
                  type="text"
                  name="FlatDescription"
                  value={
                    formData.FlatDescription ? formData.FlatDescription : ""
                  } // Prop: The email input data
                  onChange={event => handleChange(event)} // Prop: Puts data into state
                />
              </div>
              <div className="col-md-6">
                <Address setAddress={setAddress} />
              </div>
            </div>
          </div>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button onClick={() => setDialog(false)}>Close</Button>
            <Button onClick={() => saveBranch()}>Save</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ApartmentContainer;
