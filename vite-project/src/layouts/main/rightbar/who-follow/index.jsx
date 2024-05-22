// import Button from "~/components/Button/index,";
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
                WhoFollowsUsers.map((user, index) => (
                    <button key={index} className="flex items-center justify-between gap-[10px] px-4 py-3">
                        <img src={user.avatar} className="w-10 h-10 rounded-full object-contain" alt="" />
                        <div className="flex flex-wrap">
                            <div className="">
                                {user.userName}
                            </div>
                            <div className="">
                                {'@' + user.userName}
                            </div>
                        </div>

                        <Button size='normal' variant="white" >
                            <div className="text-black">
                                Follow
                            </div>
                        </Button>

                    </button>
                ))
            }

        </SidebarSection>
    )
}