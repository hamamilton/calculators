import React, { Component } from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";

class QualitySelect extends Component {
  render() {
    return (
      <div>
        <MDBSelect>
          <MDBSelectInput selected="Choose your option" />
          <MDBSelectOptions>
            <MDBSelectOption disabled>Choose your option</MDBSelectOption>
            <MDBSelectOption value="1">Option nr 1</MDBSelectOption>
            <MDBSelectOption value="2">Option nr 2</MDBSelectOption>
            <MDBSelectOption value="3">Option nr 3</MDBSelectOption>
          </MDBSelectOptions>
        </MDBSelect>
        <label>Material Select</label>
      
    );
  }
}

export default QualitySelect;