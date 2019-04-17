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
      effectiveAge: 0,
      totalLifeExpectancy: 5,
      straightLineDepreciation: ''
    }
    this.handleChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    let _EffectiveAge = this.state.effectiveAge.value
  }
  
  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    this.setState({
      [name]: value
    })
    console.log('Change detected. State updated' + name + ' = ' + value)
  }

  handleCalculations(event) {
    {LifeExpectancy !== 0 ? _StraightLineDepreciation = (_LifeExpectancy / _EffectiveAge) : alert('You cannot divide by 0!')}
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
          label="Effective Age"
          name="effectiveAge"
          onChange={this.handleChange}
          />
          <MDBInput 
          type="number"
          label="Total Life Expectancy"
          name="totalLifeExpectancy"
          onChange={this.handleChange}
          onBlur={this.handleCalculations}
          />
          <MDBInput 
          type="number" 
          label="Straight Line Depreciation"
          name="straightLineDepreciation"
          onChange={this.handleChange}
          />
          <button>Do It</button>
        </form>
      </div>
    )
  }
}

export default Subject
