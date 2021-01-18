import React, { Component } from 'react'

export default class AddPractical extends Component {
   render() {
      return (
         <div>
            <form>
               <input type="text" placeholder="Company Name" />
               <input type="text" placeholder="Position Title" />
               <input type="text" placeholder="Start Date" />
               <input type="text" placeholder="End Date" />
               <input type="text" placeholder="Duties" />

               <button>Add</button>
            </form>
         </div>
      )
   }
}
