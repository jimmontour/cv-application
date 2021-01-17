import React, { Component } from 'react'

export default class AddPractical extends Component {
   render() {
      return (
         <div>
            <form>
               <input type="text" placeholder="Company Name" />
               <input type="text" placeholder="Position Title" />
               <input type="text" placeholder="Main Tasks of Your Job" />
               <input type="text" placeholder="Started Position" />
               <input type="text" placeholder="Left Position" />
               <button>Add</button>
            </form>
         </div>
      )
   }
}
