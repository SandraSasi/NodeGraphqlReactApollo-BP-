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
const DO = gql`
  query {
    getplacecode {
      TableId
      Town
      City
      District
      State
      Country
      Pincode
      PlaceCode
    }
  }
`;
const CREATE_BRANCH_MUTATION = gql`
  mutation($placeArray: Codef) {
    createPlaceCode(placeArray: $placeArray) {
      Town
      City
      District
      Pincode
      State
      Country
      PlaceCode
    }
  }
`;
interface Code {
  Town: string;
  City: string;
  District: string;
  Pincode: number;
  State: string;
  Country: string;
  PlaceCode?: string;
}
const defaultValue: Code = {
  Town: " ",
  City: " ",
  District: " ",
  State: " ",
  Country: " ",
  Pincode: 0
};
const PlaceCode = () => {
  const { data, loading, error } = useQuery(DO);
  const [formData, setFormData] = useState(defaultValue);
  const [createBranch, mutationResult] = useMutation(CREATE_BRANCH_MUTATION,{
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
  const saveBranch = () => {
    console.log("formData", formData);

    createBranch({
      variables: {
        placeArray: { ...formData }
      }
    });
  };
  const setTable = () => {
    if (data && data.getplacecode && data.getplacecode.length > 0) {
      let r = data.getplacecode.map((place: Code, ind: number) => {
        return (
          <tr>
            <th scope="row">{ind + 1}</th>
            <td>{place.Town ? place.Town : ""}</td>
            <td>{place.City ? place.City : ""}</td>
            <td>{place.District ? place.District : ""}</td>
            <td>{place.State ? place.State : ""}</td>
            <td>{place.Country ? place.Country : ""}</td>
            <td>{place.Pincode ? place.Pincode : ""}</td>
            <td>{place.PlaceCode ? place.PlaceCode : ""}</td>
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
        <h3>Location covered</h3>
        <Button onClick={() => setDialog(true)}>Add new service area</Button>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SI No</th>
              <th scope="col">Town</th>
              <th scope="col">City</th>
              <th scope="col">District</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Pincode</th>
              <th scope="col">PlaceCode</th>
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
          <div className="form-class">
            <label htmlFor="email">Town</label>
            <input
              className="form-control"
              type="text"
              name="Town"
              value={formData.Town ? formData.Town : ""} // Prop: The email input data
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
export default PlaceCode;
