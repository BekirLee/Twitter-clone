import Button from "~/components/Button/index,";
import SidebarSection from "~/components/sidebar-section";
import UserCard from "~/components/user-card";
import { WhoFollowsUsers } from "~/mock";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollows() {
    const account = useAccount();

    return (
        <SidebarSection
            title="Who to follow"
            more={`/connect_people?user_id=${account.id}`}>
            {
                WhoFollowsUsers.map(user => (
                    <UserCard user={user} key={user.id} />
                ))
            }

        </SidebarSection>
    )
}