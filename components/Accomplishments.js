export default function Accomplishments() {
    return (
        <section className="w-full mx-auto py-32 dark:bg-black">
            <h2 className="text-2xl md:text-3xl text-left w-11/12 max-w-6xl mx-auto mb-4 font-semibold">Accomplishments</h2>
            <div className="grid grid-cols-1 gap-6 w-11/12 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col border-2 border-gray-100 bg-gray-100 p-4 text-left shadow-sm rounded-lg dark:bg-black dark:border-stone-700">
                    <h3 className="text-xl font-medium mb-0.5">Certified Insurance Counselor</h3>
                    <p className="text-sm font-thin mb-2">July 2021</p>
                    <p className="font-light">National Alliance for Insurance Education & Research</p>
                </div>
                <div className="flex flex-col border-2 border-gray-100 bg-gray-100 p-4 text-left shadow-sm rounded-lg dark:bg-black dark:border-stone-700">
                    <h3 className="text-xl font-medium mb-0.5">2021 Class of Emerging Leaders</h3>
                    <p className="text-sm font-thin mb-2">February 2021</p>
                    <p className="font-light">American Property Casualty Insurance Association</p>
                </div>
                <div className="flex flex-col border-2 border-gray-100 bg-gray-100 p-4 text-left shadow-sm rounded-lg dark:bg-black dark:border-stone-700">
                    <h3 className="text-xl font-medium mb-0.5">{`American Modern's West Region MVP Award`}</h3>
                    <p className="text-sm font-thin mb-2">January 2021</p>
                    <p className="font-light">American Modern Insurance Group</p>
                </div>
                <div className="flex flex-col border-2 border-gray-100 bg-gray-100 p-4 text-left shadow-sm rounded-lg dark:bg-black dark:border-stone-700">
                    <h3 className="text-xl font-medium mb-0.5">Ammy Award | Humble Hero</h3>
                    <p className="text-sm font-thin mb-2">July 2020</p>
                    <p className="font-light">American Modern Insurance Group</p>
                </div>
                <div className="flex flex-col border-2 border-gray-100 bg-gray-100 p-4 text-left shadow-sm rounded-lg dark:bg-black dark:border-stone-700">
                    <h3 className="text-xl font-medium mb-0.5">Ingenuity Award</h3>
                    <p className="text-sm font-thin mb-2">May 2020</p>
                    <p className="font-light">Munich Re</p>
                </div>
                <div className="flex flex-col border-2 border-gray-100 bg-gray-100 p-4 text-left shadow-sm rounded-lg dark:bg-black dark:border-stone-700">
                    <h3 className="text-xl font-medium mb-0.5">Hydrogen Program</h3>
                    <p className="text-sm font-thin mb-2">October 2019</p>
                    <p className="font-light">Munich Re</p>
                </div>
            </div>
        </section>
    )
}