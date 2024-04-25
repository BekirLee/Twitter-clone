import { Link } from "react-router-dom"

export default function Topic({ item }) {
    console.log(item)
    return (
        <Link
            to='/'
            className="py-3 transition-colors flex justify-between"
        >
            <div className="">

                <div className="text-[#71767C] text-[13px] leading-4 ">
                    <span>
                        {item.title}
                    </span>
                </div>
                <div className="text-[#e7e9ea] font-bold">
                    <span className="font-sans">
                        {
                            item.topic.type == 'tag' ? '#' + item.topic.value : item.topic.value
                        }
                    </span>
                </div>
                <div className="text-[#71767C] text-[13px] leading-4 font-sans">
                    {item.postCount ? item.postCount.toLocaleString() + 'K posts' : item.postCount}
                </div>
            </div>
            <button className="rounded-full p-2 group hover:bg-[#1d9bf01a] w-[34.75px] h-[34.75px] text-center hover:text-[#1d9bf0]">
                <svg viewBox="0 0 24 24" aria-hidden="true" width={18.75} height={18.75} >
                    <path fill="currentColor" className="hover:fill-[#3b82f680]" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                    </path>
                </svg>
            </button>
        </Link >
    )
}