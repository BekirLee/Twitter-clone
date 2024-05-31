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

            <Popover className='relative leading-4'>
                <Popover.Button className=''>
                    <span className='leading-4 text-[13px] text-[#71767b]'>
                        More...
                    </span>
                </Popover.Button>
                <Popover.Panel className='w-[150px] bg-[color:var(--background-primary)] absolute bottom-[17px] shadow-box rounded-[12px] right-0 flex flex-col'>
                    <Link to='/' className="text-white text-[15px] font-700 px-4 py-3 hover:bg-[color:var(--background-secondary)] transiton-colors">
                        About
                    </Link>
                    <Link to='/' className="text-white text-[15px] font-700 px-4 py-3 hover:bg-[color:var(--background-secondary)] ">
                        Dowlond the X App
                    </Link>
                    <Link to='/' className="text-white text-[15px] font-700 px-4 py-3 hover:bg-[color:var(--background-secondary)] ">
                        X for business
                    </Link>
                    <Link to="/" className="text-white text-[15px] font-700 px-4 py-3 hover:bg-[color:var(--background-secondary)] ">
                        Developers
                    </Link>
                </Popover.Panel>
            </Popover>
            <p className="text-[#71767b] leading-4 text-[13px]">
                &copy; 2024 X Corp.
            </p>
        </footer>
    )
}