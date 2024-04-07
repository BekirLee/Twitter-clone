import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import Button from "~/components/buttons";
import { maninMenu } from "~/utilits/consts";
import More from "./more";
import New from "./new";

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
                                    <span className="absolute top-[6px] left-[20px] bg-sky-500 rounded-full w-[18px] h-[18px] flex justify-center items-center">4</span>
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

            <More />
            {/* <New /> */}
            <Button size="normal">Send</Button>
        </>

    )
}