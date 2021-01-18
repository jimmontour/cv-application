import React, { Component } from 'react'
import AddPractical from './AddPractical'

export default class PracticalExperience extends Component {
   render() {
      return (
         <div>
            <h2>Practical Experience:</h2>
            <AddPractical />
            <div className="add-practical">
               <i className="fas fa-plus"></i>
               <p>Add Another Practical Experience</p>
            </div>
         </div>
      )
   }
}
