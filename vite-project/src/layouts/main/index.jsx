// import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from './rightbar';

function Mainlayout() {
    return (
        <div className='w-[1265px] mx-auto flex'>
            <Sidebar />

            <main className="flex-1 border-x border-[#2f3336]">
                <Outlet />
            </main>

            <RightBar />
        </div>
    );
}

export default Mainlayout;
