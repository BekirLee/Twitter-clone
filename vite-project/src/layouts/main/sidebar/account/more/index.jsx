import classNames from "classnames"
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
                    <button className={classNames("py-3 px-4 flex text-left w-full transitions-colors",
                        { "hover:bg-[#eff3f41a]": currentAccount.id === !account.id })}>

                        <img className="w-[40px] h-[40px] object-contain" src={account.avatar} alt="" />
                        <div className="userInfo flex flex-wrap items-center pl-3">
                            <div className="userName">
                                {account.userName}
                            </div>
                            <div className="userMail opacity-40 text-sm">
                                {account.email}
                            </div>
                        </div>
                    </button>
                ))
            }
        </div >
    )
}


