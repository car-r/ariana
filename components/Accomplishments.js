import { accomplishmentArr } from "../lib/content";
import AccomplishmentCard from "./AccomplishmentCard";

export default function Accomplishments() {
    return (
        <section className="w-full mx-auto py-16 bg-cream dark:bg-black">
            <h2 className="font-serif text-3xl text-left w-11/12 max-w-6xl mx-auto mb-8 text-charcoal dark:text-stone-200">Accomplishments</h2>
            <div className="grid grid-cols-1 gap-6 w-11/12 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
                {accomplishmentArr.map((accomplishment) => (
                    <AccomplishmentCard key={accomplishment.title} accomplishment={accomplishment}/>
                ))}
            </div>
        </section>
    )
}
