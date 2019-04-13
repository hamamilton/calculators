import React from 'react';
import { MDBBtn, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from 'mdbreact';
import QualitySelect from "./pro/Select.js";
//import QualitySelect from '../../QualitySelect';

class GLAInputForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <QualitySelect />
          <MDBInput 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          label="Construction Type"
          name="constructionType"
          />
          <MDBInput 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          label="Cost New (Entire Structure)"
          name="costNewEntireStructure"
          />
          <MDBInput 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          label="Condition Rating"
          name="conditionRating"
          />
          <MDBInput 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          label="Effective Age"
          name="effectiveAge"
          />
          <MDBInput 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          label="Total Life Expectancy"
          name="totalLifeExpectancy"
          />
          <MDBInput 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          label="Straight Line Depreciation"
          name="straightLineDepreciation"
          />
        <MDBBtn type="submit" value="Submit" />
      </form>
    );
  }
}

export default GLAInputForm;