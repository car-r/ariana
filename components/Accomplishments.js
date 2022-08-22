import { accomplishmentArr } from "../lib/content";
import AccomplishmentCard from "./AccomplishmentCard";

export default function Accomplishments() {
    return (
        <section className="w-full mx-auto py-44 dark:bg-black">
            <h2 className="text-3xl md:text-3xl text-left w-11/12 max-w-6xl mx-auto mb-4 font-semibold">Accomplishments</h2>
            <div className="grid grid-cols-1 gap-6 w-11/12 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
                {accomplishmentArr.map((accomplishment) => (
                    <AccomplishmentCard key={accomplishment.title} accomplishment={accomplishment}/>
                ))}
            </div>
        </section>
    )
}