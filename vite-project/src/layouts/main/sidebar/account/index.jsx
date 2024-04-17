import { Popover, Transition } from "@headlessui/react";
import { useAccount } from '~/store/auth/hooks'
import More from "./more";



export default function Account() {
    const account = useAccount();
    console.log(account)
    return (
        <div className="mt-auto">
            <Popover className='relative'>
                <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center justify-start transition-colors">
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

                <Transition
                    enter="transition duration-200 ease-in-out"
                    enterFrom="transform  opacity-0"
                    enterTo="transform  opacity-100"
                    leave="transition duration-200 ease-in-out "
                    leaveFrom="transform  opacity-100"
                    leaveTo="transform  opacity-0"
                >
                    <Popover.Panel className='absolute bottom-[100%] text-center rounded-lg bg-black w-[300px] shadow-box -translate-1/2'>

                        <More close={close} />

                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[24px] h-[16.25px] rotate-180 relative bottom-[-10px] left-[150px]">
                            <path d="M22 17H2L12 6l10 11z"></path>
                        </svg>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div >
    )
}