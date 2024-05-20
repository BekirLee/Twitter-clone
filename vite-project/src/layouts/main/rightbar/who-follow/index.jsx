import Button from "~/components/Button/index,";
import SidebarSection from "~/components/sidebar-section";
import { WhoFollowsUsers } from "~/mock";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollows() {
    const account = useAccount();

    return (
        <SidebarSection
            title="Who to follow"
            more={`/connect_people?user_id=${account.id}`}>
            {
                WhoFollowsUsers.map((user, index) => {
                    // <button>
                    <>
                        <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                    </>
                    {/* </button> */ }
                })
            }

        </SidebarSection>
    )
}