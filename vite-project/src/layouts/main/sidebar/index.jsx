import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
    return (
        <>
            <aside className="w-[270px] min-h-screen">
                <div className="" >
                    <Logo />
                    <Menu />
                </div>
            </aside>
        </>
    )
}
