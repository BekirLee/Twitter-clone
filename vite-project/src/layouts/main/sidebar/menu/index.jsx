import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { maninMenu } from "~/utilits/consts";

export default function Menu() {
    return (
        <>

            {/* from mainMenu */}

            {
                maninMenu.map((menu, index) => (
                    <NavLink to={menu.path} className='py-1' id={index}>
                        {({ isActive }) => (
                            <div className={classNames("flex items-center items-center rounded-full py-3 relative", { "font-bold": isActive })}>


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
            
            <button>

            </button>


        </>

    )
}