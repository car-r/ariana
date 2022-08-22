export default function SkillsCard({skill}) {
    return (
        <div className="flex flex-col border-2 border-white bg-white text-left p-6 rounded-xl shadow-sm dark:bg-black dark:border-stone-700">
            <div className="h-8 w-8 mb-1">{skill.icon}</div> 
            <h3 className="text-2xl mb-2 font-semibold">{skill.title}</h3>
            <p className="text-base font-light">{skill.body}</p>
        </div>
    )
}