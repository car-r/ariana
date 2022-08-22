export default function AccomplishmentCard({ accomplishment }) {
    return (
        <div className="flex flex-col border-2 border-gray-100 bg-gray-100 p-4 text-left shadow-sm rounded-lg dark:bg-black dark:border-stone-700">
            <h3 className="text-xl font-medium mb-0.5">{accomplishment.title}</h3>
            <p className="text-sm font-thin mb-2">{accomplishment.date}</p>
            <p className="font-light">{accomplishment.association}</p>
        </div>
    )
}