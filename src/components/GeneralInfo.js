import React, { Component } from 'react'

export default class GeneralInfo extends Component {
   constructor(props) {
      super(props)

      this.state = {}
   }

   render() {
      return (
         <div>
            <h2>General Information:</h2>
            <form action="">
               <input type="text" placeholder="Name"/>
               <input type="text" placeholder="Email" />
               <input type="text" placeholder="Phone Number" />
               <button>Add</button>
            </form>
         </div>
      )
   }
}
