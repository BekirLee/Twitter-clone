import { useReducer, useRef, useState } from "react"
import { useClickAway } from "react-use";

export default function Search() {

    const [query, setQuery] = useState('');
    const [focus, setFocus] = useState(false);

    const ref = useRef();
    useClickAway(ref, () => {
        setFocus(false)
    })

    return (

        <div
            ref={ref}
            className="min-h-[32px] h-[54px] mb-3 flex items-center">

            <label className="h-[43px] rounded-full bg-[color:var(--background-third)] w-full block border border-transparent relative group flex items-center focus-within:bg-black focus-within:border-[#1d9bf0]">
                <div className="w-[64px] h-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-[32px] h-[18.75px] pl-[4px]" >
                        <path fill="var(--base-secondary)" d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
                        </path>
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-full bg-transparent rounded-full outline-none pl-[1px] placeholder-[color:var(--base-secondary)]  text-[15px]"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    // onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                />

                {(query && focus) && (
                    <button
                        className="bg-[#1d9bf0] h-[22px] w-[22px] rounded-full flex items-center justify-center text-black min-w-[22px] absolute left-[90%]"
                        onClick={() => setQuery('')}
                    >
                        <svg viewBox="0 0 15 15" aria-hidden="true" width={10} height={10}>
                            <path fill="" d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z">
                            </path>
                        </svg>
                    </button>
                )}

                {focus && (
                    <div className="absolute top-full w-full bg-[color:var(--background-primary)] shadow-box px-4 px-4 max-h-[calc(-53px + 80vh)] min-[100px] rounded-lg">
                        <p className="p-3 pt-5">
                            Try searching for people, lists, or keywords
                        </p>
                    </div>
                )}
            </label>
        </div>
    )
}