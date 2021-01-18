import React, { Component } from 'react'

export default class AddEducation extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
               <input name="school" type="text" placeholder="School Name" onChange={this.props.handleChange} />
            <input name="field" type="text" placeholder="Field of Study" onChange={this.props.handleChange} />
            <input name="date" type="text" placeholder="Date of Study" onChange={this.props.handleChange} />
               <button onClick={this.props.handleClick}>Add</button>
         </div>
      )
   }
}
