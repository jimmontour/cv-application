import React from 'react'

export default function AddPractical(props) {

      return (
         <div>
            <form>
               <input name="company" type="text" placeholder="Company Name" onChange={props.handleChange} />
               <input name="position" type="text" placeholder="Position Title" onChange={props.handleChange} />
               <input name="start" type="text" placeholder="Start Date" onChange={props.handleChange} />
               <input name="end" type="text" placeholder="End Date" onChange={props.handleChange} />
               <input name="duties" type="text" placeholder="Duties" onChange={props.handleChange} />

               <button onClick={props.handleClick}>Add</button>
            </form>
         </div>
      )
}
