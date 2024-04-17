import classNames from "classnames"
import { setCurrentAccount } from "~/store/auth/actions";
import { useAccount, useAccounts } from "~/store/auth/hooks"

export default function More() {
    const accounts = useAccounts()
    const currentAccount = useAccount();
    // let stringAccounts = JSON.stringify(accounts);
    console.log(currentAccount.id)
    return (
        <div >
            {
                accounts.map(account => (
                    <button
                        type="button"
                        onClick={() => {
                            setCurrentAccount(account)
                        }}
                        className={classNames("py-3 px-4 flex items-center text-left w-full transitions-colors",
                            { "hover:bg-[#eff3f41a]": currentAccount.id !== account.id })}>

                        <img className="w-[40px] h-[40px] object-contain" src={account.avatar} alt="" />
                        <div className="userInfo flex flex-wrap items-center pl-3">
                            <div className="userName">
                                {account.userName}
                            </div>
                            <div className="userMail opacity-40 text-sm">
                                {account.email}
                            </div>
                        </div>
                        {
                            currentAccount.id === account.id && (
                                <svg className="w-[20px] h-[20px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#63E6BE" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                </svg>
                            )
                        }
                    </button>
                ))
            }
            <div className="h-px bg-[#2f3336] my-3"></div>
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#18161C] w-full font-bold">
                add new account
            </button>

            <button className="py-3 px-4 text-left transition-colors hover:bg-[#18161C] w-full font-bold">
                Log out from @{currentAccount ? currentAccount.userName : 'NO account'}
            </button>
        </div >
    )
}

