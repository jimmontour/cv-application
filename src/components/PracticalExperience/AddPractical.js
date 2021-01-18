import React, { Component } from 'react'

export default class AddPractical extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <form>
               <input name="company" type="text" placeholder="Company Name" onChange={this.props.handleChange} />
               <input name="position" type="text" placeholder="Position Title" onChange={this.props.handleChange} />
               <input name="start" type="text" placeholder="Start Date" onChange={this.props.handleChange} />
               <input name="end" type="text" placeholder="End Date" onChange={this.props.handleChange} />
               <input name="duties" type="text" placeholder="Duties" onChange={this.props.handleChange} />

               <button onClick={this.props.handleClick}>Add</button>
            </form>
         </div>
      )
   }
}
