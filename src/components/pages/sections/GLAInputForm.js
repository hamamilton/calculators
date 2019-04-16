import React, { Component } from 'react'
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBInput } from "mdbreact"

class Subject extends Component {
  state = {
    properties: [{
      qualityRating: "",
      constructionType: "",
      costNewEntireStructure: "",
      conditionRating: "",
      effectiveAge: "",
      totalLifeExpectancy: "",
      straightLineDepreciation: ""
    }]
  }
    handleChange = (e) => {
      if (["qualityRating", "constructionType", "costNewEntireStructure", "conditionRating", "effectiveAge", "totalLifeExpectancy"].includes(e.target.className) ) {
        let properties = [...this.state.properties]   
        properties[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({ properties }, () => console.log(this.state.properties))
        } else {
        this.setState({ [e.target.name]: e.target.value })
      }
    }
    handleSubmit = (e) => { e.preventDefault() }
  render () {
    let {properties} = this.state
    return (
      <div className="subject">
        <form onChange={this.handleChange}>
          <MDBInput 
          type="text" 
          label="Quality Rating"
          name="qualityRating"
          />
          <MDBInput 
          type="text"
          label="Construction Type"
          name="constructionType"
          />
          <MDBInput 
          type="number"
          label="Cost New (Entire Structure)"
          name="costNewEntireStructure"
          />
          <MDBInput 
          type="text"
          label="Condition Rating"
          name="conditionRating"
          />
          <MDBInput 
          type="number" 
          label="Effective Age"
          name="effectiveAge"
          />
          <MDBInput 
          type="number"
          label="Total Life Expectancy"
          name="totalLifeExpectancy"
          />
          <MDBInput 
          type="number" 
          label="Straight Line Depreciation"
          name="straightLineDepreciation"
          />
          <button>Do It</button>
        </form>
      </div>
    )
  }
}

<<<<<<< HEAD
export default Subject
=======
export default Subject
>>>>>>> c6980f6a2341457145f75d78d815bb3a8e091fa5
