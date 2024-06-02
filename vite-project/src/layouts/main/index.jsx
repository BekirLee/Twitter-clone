// import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from './rightbar';
import { useModal } from "~/store/modal/hooks";
import Modal from "~/modals";
import { useAppearance } from "~/store/appearance/hooks";
import { useEffect } from "react";

function Mainlayout() {
    const modal = useModal();
    const appearance = useAppearance();

    console.log(appearance)
    useEffect(() => {
        document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary);
        document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary);
        document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third);

        document.documentElement.style.setProperty('--color-primary', appearance.color.primary);
        document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary);
        document.documentElement.style.setProperty('--color-base', appearance.color.base);
        document.documentElement.style.setProperty('--base-secondary', appearance.color.baseSecondary);

        document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow);

        document.documentElement.style.setProperty('--fontSize', appearance.fontSize + "px");
    })

    return (
        <div className='w-[1265px] mx-auto flex'>
            <Sidebar />

            <main className="flex-1 border-x border-[color:var(--background-third)] shadow-box">
                <Outlet />
            </main>

            <RightBar />

            {
                modal && (< Modal />)
            }
        </div>
    );
}

export default Mainlayout;
