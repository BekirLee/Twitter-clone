import { Popover } from "@headlessui/react"

export default function More() {
    return (
        <Popover>

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

            <Popover.Panel>
                smthg
            </Popover.Panel>
        </Popover >
    )
}