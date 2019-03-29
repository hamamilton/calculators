import React, { Component } from "react";;
import { MDBSelect } from "mdbreact";

class QualitySelect extends Component {
quality = {
    options: [
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Q1",
        value: "Q1"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Q2",
        value: "Q2"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Q3",
        value: "Q3"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Q4",
        value: "Q4"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Q5",
        value: "Q5"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Q6",
        value: "Q6"
      }
    ]
  };

render() {
    return (
        <div>
            <MDBSelect
                options={this.quality.options}
                selected="Choose the quality rating"
            />
            <label>Quality Rating</label>
        </div>
    );
}
}

export default QualitySelect;