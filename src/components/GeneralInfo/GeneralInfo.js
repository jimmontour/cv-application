import React, { Component } from 'react'

export default class GeneralInfo extends Component {
   constructor(props) {
      super(props)

      this.state = {
         inputDisplay: true,
         printDisplay: false,
         addBtn: true,
         general: {
            name: '',
            email: '',
            phone: '',
         }
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
   }

   toggleDisplay() {
      console.log('go away!')
   }


   render() {

      return (
         <div>
            <h2>General Information:</h2>
            <div className="general-info-printed hide">
               <p>Name: {this.state.general.name}</p>
               <p>Email: {this.state.general.email}</p>
               <p>Phone: {this.state.general.phone}</p>
            </div>
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
               <button onClick={this.handleClick}>Add</button>
            </div>
         </div>
      )
   }
}
