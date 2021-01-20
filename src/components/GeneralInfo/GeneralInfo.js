import React, { useState, useEffect } from 'react'

export default function GeneralInfo(props) {
   const [inputHidden, setInputHidden] = useState(false);
   const [outputHidden, setOutputHidden] = useState(true);
   const [addBtn, setAddBtn] = useState(true);
   const [general, setGeneral] = useState({});

   const handleChange = (e) => {
      console.log(e)
         setGeneral({
            ...general, [e.target.name]: e.target.value,
         })
   }

   const handleClick = (e) => {
         e.preventDefault();
         setInputHidden(!inputHidden)
         setOutputHidden(!outputHidden)
   }

   return (
      <div>
         <h2>General Information:</h2>

         {inputHidden &&
            <div className="general-info-printed">
               <p>Name: {general.name}</p>
               <p>Email: {general.email}</p>
               <p>Phone: {general.phone}</p>
            </div>
         }

         {outputHidden &&
            <div>
               <input
                  name="name"
                  value={general.name}
                  type="text" placeholder="Name"
                  onChange={handleChange}
               />
               <input
                  name="email"
                  value={general.email}
                  type="text" placeholder="Email"
               onChange={handleChange}
               />
               <input
                  name="phone"
                  value={general.phone}
                  type="text" placeholder="Phone Number"
               onChange={handleChange}
               />
            </div>
         }

         <div>
            <button onClick={handleClick}>{outputHidden ? "Add" : "Edit"}</button>
         </div>
      </div>
   )
}
