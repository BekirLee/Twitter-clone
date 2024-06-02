import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
// import Button from "~/components/buttons";
import { maninMenu } from "~/utilits/consts";
import More from "./more";
// import New from "./new";
import { useAccount } from "~/store/auth/hooks";
import Button from "~/components/Button/index,";


export default function Menu() {
    const account = useAccount();
    return (
        <div className="mt-0.5" key={account}>
            {
                maninMenu.map((menu, index) => (
                    <NavLink to={typeof menu.path === "function" ? menu.path() : menu.path} className='py-1 group' key={index}>
                        {({ isActive }) => (
                            <div className={classNames("inline-flex items-center  justify-start gap-5 px-2 group-hover:bg-[color:var(--background-third)] rounded-full py-3 relative ", { "font-bold": isActive })}>


                                {menu?.notifications && (
                                    <span className="absolute top-[6px] left-[20px] border border-[color:var(--background-primary)] bg-[color:var(--color-primary)] text-[color:var(--background-primary)] rounded-full w-[18px] h-[18px] flex justify-center items-center">4</span>
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
            <Button variant="primary" size="large">Send</Button>
        </div>

    )
}