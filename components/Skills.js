import { ClipboardListIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { VideoCameraIcon } from '@heroicons/react/outline'

export default function Skills() {
    return (
        <section className="w-full mx-auto bg-gray-100 py-44 dark:bg-black" >
            <h2 className="text-3xl md:text-3xl text-left w-11/12 max-w-6xl mx-auto mb-4 font-semibold">
                Skills
            </h2>
          <div className="grid grid-cols-1 gap-6 w-11/12 max-w-6xl  mx-auto md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col border-2 border-white bg-white text-left p-6 rounded-xl shadow-sm dark:bg-black dark:border-stone-700">
              <ClipboardListIcon 
                className="h-8 w-8 mb-1 "
              />
              <h3 className="text-2xl mb-2 font-semibold">Sales</h3>
              <p className="text-base font-light">Drive new business growth by leveraging digital marketing and video content to gain trust with my clients. Uncover client pain points with deep dive discussion and annual planning.</p>
            </div>
            <div className="flex flex-col border-2 border-white bg-white text-left p-6 rounded-xl shadow-sm dark:bg-black dark:border-stone-700">
              <BriefcaseIcon 
                className="h-8 w-8 mb-1"
              />
              <h3 className="text-2xl mb-2 font-semibold">Business Development</h3>
              <p className="text-base font-light">Cultivate relationships and obtain an in-depth understanding of their needs while embedding them across the entire product suite.</p>
            </div>
            <div className="flex flex-col border-2 border-white bg-white text-left p-6 rounded-xl shadow-sm dark:bg-black dark:border-stone-700">
              <VideoCameraIcon 
                className="h-8 w-8 mb-1"
              />
              <h3 className="text-2xl mb-2 font-semibold">Marketing</h3>
              <p className="text-base font-light">Dove head first into the remote working environment by starting a YouTube Channel and creating video content to reach my clients across multiple social media platforms.</p>
            </div>
          </div>
        </section>
    )
}