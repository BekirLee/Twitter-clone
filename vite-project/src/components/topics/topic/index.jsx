import { Popover, Transition } from "@headlessui/react"
import { Link } from "react-router-dom"

export default function Topic({ item }) {
    // console.log(item)
    return (
        <Link
            to='/'
            className="py-3 px-4 transition-colors flex justify-between hover:bg-[color:var(--background-third)]"
        >
            <div className="">

                <div className="text-[color:var(--base-secondary)] text-[13px] leading-4 ">
                    <span>
                        {item.title}
                    </span>
                </div>
                <div className=" font-bold">
                    <span className="font-sans">
                        {
                            item.topic.type == 'tag' ? '#' + item.topic.value : item.topic.value
                        }
                    </span>
                </div>
                <div className="text-[color:var(--base-secondary)] text-[13px] leading-4 font-sans">
                    {item.postCount ? item.postCount.toLocaleString() + 'K posts' : item.postCount}
                </div>
            </div>
            <Popover className='relative  '>
                <Popover.Button className="rounded-full p-2 group hover:bg-[#1d9bf01a] w-[34.75px] h-[34.75px] text-center hover:text-[#1d9bf0]">
                    <button>
                        <svg viewBox="0 0 24 24" aria-hidden="true" width={18.75} height={18.75} >
                            <path fill="var(--base-secondary)" className="hover:fill-[#3b82f680]" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                            </path>
                        </svg>
                    </button>
                </Popover.Button>
                <Transition
                    enter="transition duration-200 ease-in-out"
                    enterFrom="transform  opacity-0"
                    enterTo="transform  opacity-100"
                    leave="transition duration-200 ease-in-out "
                    leaveFrom="transform  opacity-100"
                    leaveTo="transform  opacity-0">
                    <Popover.Panel className='absolute top-2 right-0 bg-[color:var(--background-primary)] shadow-box w-[294px] rounded-[12px]'>
                        <div className="flex items-center gap-[16px] px-4 py-3 text-[15px] leading-[20px]">
                            <div className="">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18.75px] h-[18.75px]">
                                    <path fill="currentColor" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z">
                                    </path>
                                </svg>
                            </div>
                            Not interested in this
                        </div>
                        <div className="flex items-center gap-[16px] px-4 py-3 text-[15px] leading-[20px]">
                            <div className="">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18.75px] h-[18.75px]">
                                    <path fill="currentColor" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z">
                                    </path>
                                </svg>
                            </div>
                            This trend is harmful or spammy
                        </div>
                    </Popover.Panel>
                </Transition>



            </Popover>

        </Link >
    )
}