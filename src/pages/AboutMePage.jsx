import AboutMe from '../components/AboutMe'
import ContactInfo from '../components/ContactInfo'
import { SkillSection } from '../components/SkillSection'

export const AboutMePage = () => {
  return (
    <>
      <div className='bg-black/50'>
        <AboutMe />
        <div className='mx-0 sm:mx-28'>
          <SkillSection />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </>

  )
}
