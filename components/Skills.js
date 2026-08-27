import { skillsArr } from '../lib/content'
import SkillsCard from './SkillsCard'

export default function Skills() {
    return (
      <section className="w-full mx-auto bg-cream py-20 dark:bg-black" >
        <div className="grid grid-cols-1 gap-10 w-11/12 max-w-6xl mx-auto md:grid-cols-3">
          {skillsArr.map((skill) => (
            <SkillsCard key={skill.title} skill={skill}/>
          ))}
        </div>
      </section>
    )
}
