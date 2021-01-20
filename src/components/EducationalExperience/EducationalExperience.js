import React, { Component } from 'react'
import testUtils from 'react-dom/test-utils'
import AddEducation from './AddEducation'

export default class EducationalExperience extends Component {
   constructor(props) {
      super(props)


      this.state = {
         inputHidden: true,
         schoolList: [],
         education: {
            school: '',
            field: '',
            date: '',
         }
      }

      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }

   handleClick(e) {
      if (!this.state.inputHidden) {
         this.updateSchools();
      }
      e.preventDefault()
      this.setState(prevState => ({
         inputHidden: !prevState.inputHidden,
      }))
   }

   handleChange(e) {
      this.setState(prevState => ({
         education: {
            ...prevState.education,
            [e.target.name]: e.target.value,
         }
      }))
   }

   updateSchools() {
      this.setState(prevState => ({
         schoolList: [...prevState.schoolList, {
            school: this.state.education.school,
            field: this.state.education.field,
            date: this.state.education.date,
         }]
      }))
   }
   
   render() {

      return (
         <div>
            <h2>Educational Experience:</h2>
            <div>
               {this.state.schoolList.map((school) => {
                  return(
                  <div className="school-printed">
                     <p>School: {school.school}</p>
                     <p>Field of Study: {school.field} </p>
                     <p>Graduated: {school.date}</p>
                  </div>
                  )
               })}
            </div>
            {!this.state.inputHidden &&
            <AddEducation handleChange={this.handleChange} handleClick={this.handleClick} />
            }
            {this.state.inputHidden &&
            <div className="add-education" onClick={this.handleClick}>
               <i className="fas fa-plus"></i>
               <p>Add Educational Experience</p>
            </div>
            }
         </div>
      )
   }
}
