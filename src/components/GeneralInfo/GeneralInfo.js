import React, { Component } from 'react'
import MainContent from '../MainContent'

export default class GeneralInfo extends Component {
   constructor(props) {
      super(props)

      this.state = {
         inputHidden: false,
         outputHidden: true,
         addBtn: true,
         general: {},
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
   }

   handleChange(e) {
      this.setState(prevState => ({
         general: {
            ...prevState.general,
             [e.target.name]: e.target.value,
         }
      }))
   }

   handleClick(e) {
      e.preventDefault();
      console.log('clicked')
      this.toggleHidden()
   }

   toggleHidden() {
      this.setState(prevState => ({
         inputHidden: !prevState.inputHidden,
         outputHidden: !prevState.outputHidden,
      }))
   }

   render() {


      return (
         <div>
            <h2>General Information:</h2>
            {this.state.inputHidden &&
            <div className="general-info-printed">
               <p>Name: {this.state.general.name}</p>
               <p>Email: {this.state.general.email}</p>
               <p>Phone: {this.state.general.phone}</p>
            </div>
            }
            {this.state.outputHidden &&
            <div>
               <input
                  name="name"
                  value={this.state.general.name}
                  type="text" placeholder="Name"
                  onChange={this.handleChange}
               />
               <input
                  name="email"
                  value={this.state.general.email}
                  type="text" placeholder="Email"
                  onChange={this.handleChange}
               />
               <input
                  name="phone"
                  value={this.state.general.phone}
                  type="text" placeholder="Phone Number"
                  onChange={this.handleChange}
               />
            </div>
            }
            <div>
               <button onClick={this.handleClick}>{this.state.outputHidden ? "Add" : "Edit"}</button>
            </div>


         </div>
      )
   }
}
