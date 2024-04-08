import { Disclosure, Popover } from "@headlessui/react"
import classNames from "classnames"

export default function More() {
    return (
        <Popover className="box-shadow-[ rgba(0, 0, 0, 0.15) 0px 2px 8px] relative p-3">

            <Popover.Button className='py-1'>

                <div className="flex items-center items-center rounded-full py-3 relative">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[26.25px] h-[26.25px]">
                        <path fill="#fff" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z">
                        </path>
                    </svg>
                    <div className="pr-4 text-xl">
                        More
                    </div>
                </div>
            </Popover.Button>

            <Popover.Panel className="shadow-box w-[318px] rounded-xl transition-colors bg-black overflow-hidden absolute bottom-0 left-0">
                <button className='py-1 w-[100%] hover:bg-[#eff3f41a]'>

                    <div className="flex justify-start items-center rounded-full py-3 relative">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[26.25px] h-[26.25px] mx-4">
                            <path fill="#fff" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                        </svg>
                        <div className="pr-4 text-xl font-bold">
                            Save
                        </div>
                    </div>
                </button>

                <button className='py-1 w-[100%] hover:bg-[#eff3f41a]'>

                    <div className="flex justify-start items-center rounded-full py-3 relative">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[26.25px] h-[26.25px] mx-4">
                            <path fill="#fff" d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
                        </svg>
                        <div className="pr-4 text-xl font-bold">
                            Connections
                        </div>
                    </div>
                </button>

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="h-[52px] py-2 flex justify-between w-full px-4 items-center">
                                Is team pricing available?
                                <svg className={classNames({ "rotate-180 text-[#1d9bf0]": open })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'18.75'} height={"18.75"}>
                                    <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                            </Disclosure.Button >
                            <Disclosure.Panel className="text-gray-500 px-4">
                                Wait a little bit
                            </Disclosure.Panel >
                        </>
                    )}
                </Disclosure>

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="h-[52px] py-2 flex justify-between w-full px-4 items-center">
                                Find All frineds and tweet
                                <svg className={classNames({ "rotate-180  text-[#1d9bf0]": open })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'18.75'} height={"18.75"}>
                                    <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                            </Disclosure.Button >
                            <Disclosure.Panel className="text-gray-500 px-4">
                                Hmm Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo voluptas id velit praesentium nesciunt nam magnam similique rerum minus?
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="h-[52px] py-2 flex justify-between w-full px-4 items-center">
                                Connect with friends
                                <svg className={classNames({ "rotate-180  text-[#1d9bf0]": open })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'18.75'} height={"18.75"}>
                                    <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500 px-4 pb-3">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo blanditiis magnam, voluptates nesciunt sunt commodi?
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </Popover.Panel>
        </Popover >
    )
}