import React from 'react';
import { MDBBtn, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from 'mdbreact';
//import QualitySelect from '../../QualitySelect';

class GLAInputForm extends React.Component {
  
  state = {
    QualityRating: ""
    ,ConstructionType: ""
    ,CostNES: ""
    ,ConditionRating: ""
    ,EffectiveAge: ""
    ,LifeExpectancy:""
  };

  getSubjectInfo = () => {
    var GLASubject = [];
    
  changeHandler(event) {
    let FieldName = event.target.name;
    let FieldValue = event.target.value;
    this.setState({[FieldName]:FieldValue});
}
    var Depreciation = this.EffectiveAge.value/this.LifeExpectancy.value;
    alert(Depreciation)
  };

  render () {
  
  return (
        <div>
            <div className="grey-text">
            <MDBSelect 
              name="QualityRating" 
              onChange={this.changeHandler.bind(this)}>
              <MDBSelectInput selected="Choose the quality rating" />
              <MDBSelectOptions search>
                <MDBSelectOption value="" disabled selected>Choose the quality rating</MDBSelectOption>
                <MDBSelectOption value="Q1">Q1</MDBSelectOption>
                <MDBSelectOption value="Q2">Q2</MDBSelectOption>
                <MDBSelectOption value="Q3">Q3</MDBSelectOption>
                <MDBSelectOption value="Q4">Q4</MDBSelectOption>
                <MDBSelectOption value="Q5">Q5</MDBSelectOption>
                <MDBSelectOption value="Q6">Q6</MDBSelectOption>
              </MDBSelectOptions>
            </ MDBSelect>
              <MDBInput
                label="Construction Type"
                name="ConstructionType"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={this.changeHandler.bind("ConstructionType")}
              />
              <MDBInput
                label="Cost New-Entire Structure"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                id="inputCostNewEntireStructure"
                name="CostNES"
                getValue={this.changeHandler.bind("CostNES")}
              />
              <MDBSelect name="ConditionRating" getValue={changeHandler("ConditionRating")}>
              <MDBSelectInput selected="Choose the condition rating" />
              <MDBSelectOptions search>
                <MDBSelectOption value="" disabled selected>Choose the condition rating</MDBSelectOption>
                <MDBSelectOption value="C1">C1</MDBSelectOption>
                <MDBSelectOption value="C2">C2</MDBSelectOption>
                <MDBSelectOption value="C3">C3</MDBSelectOption>
                <MDBSelectOption value="C4">C4</MDBSelectOption>
                <MDBSelectOption value="C5">C5</MDBSelectOption>
                <MDBSelectOption value="C6">C6</MDBSelectOption>
              </MDBSelectOptions>
            </ MDBSelect>
              <MDBInput
                label="Effective Age"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="EffectiveAge"
                getValue={this.changeHandler.bind("EffectiveAge")}
              />
              <MDBInput
                label="Total Life Expectancy"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="LifeExpectancy"
                getValue={this.changeHandler.bind("LifeExpectancy")}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary" 
              id="calcButton" onClick={() => {
                this.getSubjectInfo();
              }}
              >Calculate</MDBBtn>
            </div>
        </div>
  );
}
}


export default GLAInputForm;