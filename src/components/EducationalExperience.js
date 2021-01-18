import React, { Component } from 'react'
import AddEducation from './AddEducation'

export default class EducationalExperience extends Component {
   render() {


      return (
         <div>
            <h2>Educational Experience:</h2>
            <AddEducation />
            <div className="add-education">
               <i className="fas fa-plus"></i>
               <p>Add Another Educational Experience</p>
            </div>

         </div>
      )
   }
}
