import Premium from "./premium";
import Search from "./search";
import Topics from "~/components/topics";
import WhoFollows from "./who-follow";

export default function RightBar() {
    return (
        <>
            <aside className="w-[350px] mr-2.5 ml-[30px]">
                <Search />
                <Premium />
                <Topics />
                <WhoFollows />
            </aside>
        </>
    )
}