import { topics } from "~/utilits/consts";
import Topic from "./topic";

export default function Topics() {
    return (
        <section className="bg-[#16181c] bg-[#16181c] mb-4 rounded-xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 ">
            <h1 className="text-[#e7e9ea] font-extrabold">Trends for you</h1>
            {
                topics.map((topic, index) => {
                    <Topic item={topic} key={index} />
                })
            }
        </section>
    )
}