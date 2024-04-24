import { topics } from "~/utilits/consts";
import Topic from "./topic";

export default function Topics() {
    console.log(topics)
    return (
        <section className=" bg-transparent border border-[#2f3336] mb-4 rounded-xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 ">
            <div className="">
                <h1 className="text-[#e7e9ea] text-[19px] font-extrabold">Trends for you</h1>
                <div className="grid">
                    {
                        topics.map((topic, index) => <Topic item={topic} key={index} />)
                    }
                </div>
            </div>
         
        </section>
    )
}