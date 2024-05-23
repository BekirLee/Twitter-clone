// import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from './rightbar';
import { useModal } from "~/store/modal/hooks";
import Modal from "~/modals";

function Mainlayout() {
    const modal = useModal();
    console.log('modal', modal);

    return (
        <div className='w-[1265px] mx-auto flex'>
            <Sidebar />

            <main className="flex-1 border-x border-[#2f3336]">
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
