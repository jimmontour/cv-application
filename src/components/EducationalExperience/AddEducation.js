import React from 'react'

export default function AddEducation(props) {
      return (
         <div>
               <input name="school" type="text" placeholder="School Name" onChange={props.handleChange} />
            <input name="field" type="text" placeholder="Field of Study" onChange={props.handleChange} />
            <input name="date" type="text" placeholder="Date of Study" onChange={props.handleChange} />
               <button onClick={props.handleClick}>Add</button>
         </div>
      )
}
