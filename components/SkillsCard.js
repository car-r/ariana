export default function SkillsCard({skill}) {
    return (
        <div className="flex flex-col text-left pb-6 border-b border-gold">
            <div className="h-8 w-8 mb-3 text-gold">{skill.icon}</div>
            <h3 className="font-serif text-2xl mb-3 text-charcoal dark:text-stone-200">{skill.title}</h3>
            <p className="text-base font-normal text-charcoal-muted dark:text-stone-400">{skill.body}</p>
        </div>
    )
}
