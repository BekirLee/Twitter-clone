import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2 items-center">
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline"> Terms of Service</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline"> Cookie Policy</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline"> Privacy Policy</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline"> Accessibility</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline"> Ads info</Link>

            <Popover className='leading-4'>
                <Popover.Button className=''>
                    <span className='leading-4 text-[13px] text-[#71767b]'>
                        More...
                    </span>
                </Popover.Button>
                <Popover.Panel className='bg-transparent'>

                </Popover.Panel>
            </Popover>
        </footer>
    )
}