import { topics } from "~/utilits/consts";
import Topic from "./topic";
// import { Link } from "react-router-dom";
import SidebarSection from "../sidebar-section";

export default function Topics() {
    console.log(topics)
    return (
        <SidebarSection
            title="Trends for you"
            more='/trends'>
            {
                topics.map((topic, index) => <Topic item={topic} key={index} />)
            }

        </SidebarSection>
    )
}
{/* <section className="mb-4 rounded-xl border border-[#16181c] flex flex-col gap-2.5 ">
        <div className="">
            <h1 className="text-[#e7e9ea] text-[19px] font-extrabold px-4 pt-3"></h1>
            <div className="grid ">
                <Link
                    to='/trends'
                    className="flex items-center px-4 py-3 text-[#1d9bf0] text-[13px] hover:bg-[#16181c94]"
                >
                    Show More
                </Link>
            </div>
        </div>

    </section> */}