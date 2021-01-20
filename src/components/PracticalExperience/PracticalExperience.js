import React, { Component } from 'react'
import AddPractical from './AddPractical'

export default class PracticalExperience extends Component {
   constructor(props) {
      super(props)

      this.state = {
         inputHidden: true,
         jobList: [],
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
      if (!this.state.inputHidden) {
         this.updateJobs()
      }
      this.setState(prevState => ({
         inputHidden: !prevState.inputHidden,
      }))
   }

   handleChange(e) {
      this.setState(prevState => ({
         practical: {
            ...prevState.practical,
            [e.target.name]: e.target.value,
         }
      }))
   }

   updateJobs() {
      this.setState(prevState => ({
         jobList: [...prevState.jobList, {
            company: this.state.practical.company,
            position: this.state.practical.position,
            start: this.state.practical.start,
            end: this.state.practical.end,
            duties: this.state.practical.duties,
         }]
      }))
   }


   render() {
      return (
         <div>
            <h2>Practical Experience:</h2>
            <div>
               {this.state.jobList.map((job) => {
                  return (
                     <div className="school-printed">
                        <p>Company: {job.company}</p>
                        <p>Position: {job.position} </p>
                        <p>From {job.start} To {job.end}</p>
                        <p>Duties:{job.duties}</p>
                     </div>
                  )
               })}
            </div>


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
