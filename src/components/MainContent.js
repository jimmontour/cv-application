import React from 'react'
import GeneralInfo from './GeneralInfo'
import EducationalExperience from './EducationalExperience'
import PracticalExperience from './PracticalExperience'

export default function MainContent() {
   return (
      <main>
         <GeneralInfo />
         <EducationalExperience />
         <PracticalExperience />
      </main>
   )
}
