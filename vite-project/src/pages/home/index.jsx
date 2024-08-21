import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";
import ForYou from "./for-you";

export default function Home() {
    return (

        <>
            <Tab activeTab='for-you'>
                <StickyHeader title="Home Page" >
                    <Tab.Items>
                        <Tab.Item id="for-you">
                            Tab1
                        </Tab.Item>
                        <Tab.Item id="followings">
                            Tab2
                        </Tab.Item>
                    </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    <ForYou />
                </Tab.Content>

                <Tab.Content id="followings">
                    content2
                </Tab.Content>
            </Tab>
            <div className="">
                Home Component
            </div>
        </>
    )
}