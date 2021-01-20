import React, { useState, useEffect } from 'react'
import testUtils from 'react-dom/test-utils'
import AddEducation from './AddEducation'

export default function EducationalExperience(props) {
   const [inputHidden, setInputHidden] = useState(true)
   const [schoolList, setSchoolList] = useState([])
   const [education, setEducation] = useState({
      school: '',
       field: '',
        date: ''
      })

   const handleClick = (e) => {
      if (!inputHidden) {
         updateSchools();
      }
      e.preventDefault()
      setInputHidden(!inputHidden)
   }

   const handleChange = (e) => {
      setEducation({...education,
         [e.target.name]: e.target.value,
      })
   }

   const updateSchools = () => {
      setSchoolList([
         ...schoolList,
         {
         school: education.school,
         field: education.field,
         date: education.date
      }
   ])
   }

      return (
         <div>
            <h2>Educational Experience:</h2>
            <div>
               {schoolList.map((school) => {
                  return(
                  <div className="school-printed">
                     <p>School: {school.school}</p>
                     <p>Field of Study: {school.field} </p>
                     <p>Graduated: {school.date}</p>
                  </div>
                  )
               })}
            </div>
            {!inputHidden &&
            <AddEducation handleChange={handleChange} handleClick={handleClick} />
            }
            {inputHidden &&
            <div className="add-education" onClick={handleClick}>
               <i className="fas fa-plus"></i>
               <p>Add Educational Experience</p>
            </div>
            }
         </div>
      )
}
