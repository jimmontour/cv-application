import React, { Component } from 'react'
import AddPractical from './AddPractical'

export default class PracticalExperience extends Component {
   constructor(props) {
      super(props)

      this.state = {
         inputHidden: true,
         practicalList: [],
         practical: {
            company: '',
            position: '',
            start: '',
            end: '',
            duties: '',
         }
      }

      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }

   handleClick(e) {
      e.preventDefault()
      this.setState(prevState => ({
         inputHidden: !prevState.inputHidden,
      }))
   }

   handleChange(e) {
      this.setState(prevState => ({
         practical: {
            ...prevState,
            [e.target.name]: e.target.value,
         }
      }))
   }

   render() {
      return (
         <div>
            <h2>Practical Experience:</h2>
            {!this.state.inputHidden &&
            <AddPractical handleChange={this.handleChange} handleClick={this.handleClick}/>
            }

            {this.state.inputHidden &&
            <div onClick={this.handleClick} className="add-practical">
               <i className="fas fa-plus"></i>
               <p>Add Practical Experience</p>
            </div>
            }
         </div>
      )
   }
}
