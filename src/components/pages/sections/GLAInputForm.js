import React, { Component } from 'react'
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBInput, MDBButton } from "mdbreact"
import { computeValue, Multiple, Divide } from 'react-real-math'

class Subject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      qualityRating: '',
      constructionType: '',
      costNewEntireStructure: '',
      conditionRating: '',
      effectiveAge: '',
      totalLifeExpectancy: '',
      straightLineDepreciation: ''
    }
    this.handleChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCalculations = this.handleCalculations.bind(this)
    
  }
  
  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleCalculations(event) {
    let calcEffectiveAge = parseInt(this.state.effectiveAge)
    let calcLifeExpectancy = parseInt(this.state.totalLifeExpectancy)
    let calcStraightLineDepreciation = parseInt(this.state.straightLineDepreciation)
    {calcLifeExpectancy !== 0 ? calcStraightLineDepreciation = (calcEffectiveAge / calcLifeExpectancy) * 100 : alert('You cannot divide by 0!')}
    this.setState({
      straightLineDepreciation: calcStraightLineDepreciation.toFixed(2)
    })
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.qualityRating + ' // ' + this.state.constructionType)
    event.preventDefault()
  }
  render () {
    return (
      <div className="subject">
        <form onSubmit={this.handleSubmit}>
          <MDBInput 
          type="text" 
          label="Quality Rating"
          name="qualityRating"
          onChange={this.handleChange}
          />
          <MDBInput 
          type="text"
          label="Construction Type"
          name="constructionType"
          onChange={this.handleChange}
          />
          <MDBInput 
          type="number"
          label="Cost New (Entire Structure)"
          name="costNewEntireStructure"
          onChange={this.handleChange}
          />
          <MDBInput 
          type="text"
          label="Condition Rating"
          name="conditionRating"
          onChange={this.handleChange}
          />
          <MDBInput 
          type="number" 
          label="Subject GLA"
          name="subj"
          onChange={this.handleChange}
          inputType = "number"
          />
          <MDBInput 
          type="number" 
          label="Effective Age"
          name="effectiveAge"
          onChange={this.handleChange}
          inputType = "number"
          />
          <MDBInput 
          type="number"
          label="Total Life Expectancy"
          name="totalLifeExpectancy"
          onChange={this.handleChange}
          onBlur={this.handleCalculations}
          inputType="number"
          />
          <MDBInput 
          type="number"
          label="Straight Line Depreciation"
          name="straightLineDepreciation"
          value={this.state.straightLineDepreciation}
          />
          <button>Do It</button>
        </form>
      </div>
    )
  }
  
}

export default Subject
