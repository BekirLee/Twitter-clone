import { Popover } from "@headlessui/react";
// import { useAccount } from 'store/auth/hooks'



export default function Account() {
    // const account = useAccount();
    // console.log(useAccount)
    // console.log(account)
    return (
        <div className="mt-auto">
            <Popover>
                <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full ">

                </Popover.Button>

                <Popover.Panel>

                </Popover.Panel>
            </Popover>

        </div>
    )
}