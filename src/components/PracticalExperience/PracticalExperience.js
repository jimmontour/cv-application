import React, { useState, useEffect } from 'react'
import AddPractical from './AddPractical'

export default function PracticalExperience(props) {

   const [inputHidden, setInputHidden] = useState(true)
   const [jobList, setJobList] = useState([])
   const [practical, setPractical] = useState({
      company: '',
      position: '',
      start: '',
      start: '',
      end: '',
      duties: '',
   })

   const handleClick = (e) => {
      e.preventDefault()
      if (!inputHidden) {
         updateJobs()
      }
         setInputHidden(!inputHidden)
   }

   const handleChange = (e) => {
      setPractical({
         ...practical,
         [e.target.name]: e.target.value,
      })
   }

   const updateJobs = () => {
      setJobList([
         ...jobList,
         {
         company: practical.company,
         position: practical.position,
         start: practical.start,
         end: practical.end,
         duties: practical.duties,
      }
   ])
   }

      return (
         <div>
            <h2>Practical Experience:</h2>
            <div>
               {jobList.map((job) => {
                  return (
                     <div className="school-printed">
                        <p>Company: {job.company}</p>
                        <p>Position: {job.position} </p>
                        <p>From {job.start} To {job.end}</p>
                        <p>Duties:{job.duties}</p>
                     </div>
                  )
               })}
            </div>


            {!inputHidden &&
            <AddPractical handleChange={handleChange} handleClick={handleClick}/>
            }

            {inputHidden &&
            <div onClick={handleClick} className="add-practical">
               <i className="fas fa-plus"></i>
               <p>Add Practical Experience</p>
            </div>
            }
         </div>
      )
}
