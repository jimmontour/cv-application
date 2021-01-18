import React from 'react'
import GeneralInfo from './GeneralInfo/GeneralInfo'
import EducationalExperience from './EducationalExperience/EducationalExperience'
import PracticalExperience from './PracticalExperience/PracticalExperience'

export default function MainContent() {
   return (
      <main>
         <GeneralInfo />
         <EducationalExperience />
         <PracticalExperience />
      </main>
   )
}
