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
   }

   handleClick(e) {
      e.preventDefault()
      this.setState(prevState => ({
         inputHidden: !prevState.inputHidden,
      }))
   }

   render() {


      return (
         <div>
            <h2>Educational Experience:</h2>
            {!this.state.inputHidden &&
            <AddEducation handleClick={this.handleClick} />
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
