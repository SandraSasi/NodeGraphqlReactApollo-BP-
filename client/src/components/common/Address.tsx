import React, { useEffect, useState, Fragment } from "react";
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

export interface AddressType {
  AddressName: string;
  Street: string;
  PostOffice: string;
  City: string;
  District: string;
  Pincode: number;
  State: string;
  Country: string;
  PlaceCode?: string;
}
const defaultValue: AddressType = {
  AddressName: " ",
  Street: " ",
  PostOffice: " ",
  City: " ",
  District: " ",
  State: " ",
  Country: " ",
  Pincode: 0
};
interface AddressProps {
  setAddress(value: AddressType): void;
}
const Address = (props: AddressProps) => {
  const [formData, setFormData] = useState(defaultValue);
  useEffect(() => {
    props.setAddress(formData);
  }, [formData]);
  const handleChange = (evt: any) => {
    var name = evt.target.name;
    var newValue = evt.target.value;
    console.log("new", newValue);
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <Fragment>
      <label htmlFor="email">Address</label>
      <input
        className="form-control"
        type="text"
        name="AddressName"
        value={formData.AddressName ? formData.AddressName : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />
      <label htmlFor="email">Street</label>
      <input
        className="form-control"
        type="text"
        name="Street"
        value={formData.Street ? formData.Street : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />
      <label htmlFor="email">Post Office</label>
      <input
        className="form-control"
        type="text"
        name="PostOffice"
        value={formData.PostOffice ? formData.PostOffice : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />
      <label htmlFor="email">City</label>
      <input
        className="form-control"
        type="text"
        name="City"
        value={formData.City ? formData.City : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />
      <label htmlFor="email">District</label>
      <input
        className="form-control"
        type="text"
        name="District"
        value={formData.District ? formData.District : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />
      <label htmlFor="email">State</label>
      <input
        className="form-control"
        type="text"
        name="State"
        value={formData.State ? formData.State : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />

      <label htmlFor="email">Country</label>
      <input
        className="form-control"
        type="text"
        name="Country"
        value={formData.Country ? formData.Country : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />
      <label htmlFor="email">Pincode</label>
      <input
        className="form-control"
        type="text"
        name="Pincode"
        value={formData.Pincode ? formData.Pincode : ""} // Prop: The email input data
        onChange={event => handleChange(event)} // Prop: Puts data into state
      />
      <label htmlFor="email">State</label>
    </Fragment>
  );
};
export default Address;
