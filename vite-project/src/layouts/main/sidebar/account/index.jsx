import { Popover } from "@headlessui/react";
import { useAccount } from '~/store/auth/hooks'
import More from "./more";



export default function Account() {
    const account = useAccount();
    console.log(account)
    return (
        <div className="mt-auto">
            <Popover className='relative'>
                <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center justify-start">
                    <img className="w-[40px] h-[40px] object-contain" src={account.avatar} alt="" />
                    <div className="userInfo flex flex-wrap items-center pl-3">
                        <div className="userName">
                            {account.userName}
                        </div>
                        <div className="userMail opacity-40 text-sm">
                            {account.email}
                        </div>
                    </div>
                </Popover.Button>

                <Popover.Panel className='absolute bottom-[100%] text-center bg-black w-[300px] shadow-box -translate-1/2'>

                    <More />

                </Popover.Panel>
            </Popover>

        </div >
    )
}