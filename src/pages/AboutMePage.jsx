import AboutMe from '../components/AboutMe'
import ContactInfo from '../components/ContactInfo'
import { SkillSection } from '../components/SkillSection'

export const AboutMePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <section className="mb-12">
        <AboutMe />
      </section>

      <section className="mb-12">
        <SkillSection />
      </section>

      <section className="mb-12">
        <ContactInfo />
      </section>
    </div>
  )
}
