export default function AccomplishmentCard({ accomplishment }) {
    return (
        <div className="flex flex-col text-left py-3 border-t border-gold/40">
            <h3 className="font-serif text-xl font-medium mb-0.5 text-charcoal dark:text-stone-200">{accomplishment.title}</h3>
            <p className="text-sm font-normal mb-2 text-gold-dark dark:text-gold-light">{accomplishment.date}</p>
            <p className="font-normal text-charcoal-muted dark:text-stone-400">{accomplishment.association}</p>
        </div>
    )
}
