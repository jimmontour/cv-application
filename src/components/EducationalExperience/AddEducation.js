import React, { Component } from 'react'

export default class AddEducation extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <div>
               <input type="text" placeholder="School Name"/>
               <input type="text" placeholder="Field of Study" />
               <input type="text" placeholder="Date of Study" />
               <button onClick={this.props.handleClick}>Add</button>
         </div>
      )
   }
}
