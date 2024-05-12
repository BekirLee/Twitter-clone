import SidebarSection from "~/components/sidebar-section";
import { WhoFollowsUsers } from "~/mock";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollows() {
    const account = useAccount();

    return (
        <>
            <SidebarSection
                title="Who to follow"
                more={`/connect_people?user_id=${account.id}`}>

                {
                    WhoFollowsUsers.map((user, index) => {
                        <>
                            {/* <button> */}
                            {user}
                            {/* </button> */}
                        </>
                    })
                }

            </SidebarSection>
        </>
    )
}