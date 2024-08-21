import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";

export default function Home() {
    return (

        <>  
            <StickyHeader title="Home Page" />
            <Tab>
                <Tab.Items>
                    <Tab.Item id="for-you">
                        Tab1
                    </Tab.Item>
                    <Tab.Item id="folowings">
                        Tab2
                    </Tab.Item>
                </Tab.Items>

                <Tab.Content id="for-you">
                    content1
                </Tab.Content>

                <Tab.Content id="followings">
                    content2
                </Tab.Content>
            </Tab>
            Home Component
        </>
    )
}