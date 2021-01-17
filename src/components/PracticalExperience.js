import React, { Component } from 'react'
import AddPractical from './AddPractical'

export default class PracticalExperience extends Component {
   render() {
      return (
         <div>
            <h2>Practical Experience:</h2>
            <AddPractical />
            <div className="add-practical">
               <i class="fas fa-plus"></i>
               <p>Add Practical Experience</p>
            </div>
         </div>
      )
   }
}
