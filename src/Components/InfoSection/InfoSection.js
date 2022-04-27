import React from 'react'
import About from '../About/About'
import Accomplishments from '../Accomplishments/Accomplishments'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Technologies from '../Technologies/Technologies'
import { InfoSectionContainer } from './InfoSection.style'

function InfoSection() {
  return (
    <InfoSectionContainer>
        <Header/>
        <Technologies/>
        <About/>
        <Accomplishments/>
        <Projects/>
    </InfoSectionContainer>
  )
}

export default InfoSection
