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
                            <div className={classNames("flex items-center items-center rounded-full py-3", { "font-bold": isActive })}>

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


        </>

    )
}