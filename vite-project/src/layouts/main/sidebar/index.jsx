import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
    return (
        <>
            <aside className="w-[270px] max-h-screen min-h-screen flex flex-col px-2 overflow-auto">
                <div className="" >
                    <Logo />
                    <Menu />
                </div>

                <Account />
            </aside>
        </>
    )
}
