import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { maninMenu } from "~/utilits/consts";

export default function Menu() {
    return (
        <>

            {/* from mainMenu */}

            {
                maninMenu.map((menu, index) => (
                    <NavLink to={menu.path} className='py-1 group' key={index}>
                        {({ isActive }) => (
                            <div className={classNames("inline-flex items-center justify-start gap-5 px-2 group-hover:bg-[#eff3f41a] rounded-full py-3 relative ", { "font-bold": isActive })}>


                                {menu?.notifications && (
                                    <span className="absolute top-[6px] left-[12px] bg-sky-500 rounded-full w-[18px] h-[18px] flex justify-center items-center">4</span>
                                )}
                                {!isActive && menu.icon.passive}    

                                {isActive && menu.icon.active}

                                <div className="pr-4 text-xl">
                                    {menu.title}
                                </div>

                            </div>
                        )}
                    </NavLink >

                ))
            }

            <button className='py-1'>

                <div className="flex items-center items-center rounded-full py-3 relative">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[26.25px] h-[26.25px]">
                        <path fill="#fff" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z">
                        </path>
                    </svg>
                    <div className="pr-4 text-xl">
                        More
                    </div>
                </div>
            </button>


        </>

    )
}