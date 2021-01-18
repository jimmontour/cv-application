import React, { Component } from 'react'

export default class AddEducation extends Component {
   render() {
      return (
         <div>
            <form>
               <input type="text" placeholder="School Name"/>
               <input type="text" placeholder="Field of Study" />
               <input type="text" placeholder="Date of Study" />
               <button>Add</button>
            </form>
         </div>
      )
   }
}
