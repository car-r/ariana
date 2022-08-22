import { skillsArr } from '../lib/content'
import SkillsCard from './SkillsCard'

export default function Skills() {
    return (
      <section className="w-full mx-auto bg-gray-100 py-44 dark:bg-black" >
          <h2 className="text-3xl md:text-3xl text-left w-11/12 max-w-6xl mx-auto mb-4 font-semibold">
            Skills
          </h2>
        <div className="grid grid-cols-1 gap-6 w-11/12 max-w-6xl  mx-auto md:grid-cols-2 lg:grid-cols-3">
          {skillsArr.map((skill) => (
            <SkillsCard key={skill.title} skill={skill}/>
          ))}
        </div>
      </section>
    )
}