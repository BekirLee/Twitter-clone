import classNames from "classnames";
import { useEffect, useState } from "react";
// import { c } from "vite/dist/node/types.d-aGj9QkWt";
import { setBackground, setColor, setFontsize } from "~/store/appearance/actions";
import { useAppearance } from "~/store/appearance/hooks";
import { colors, fontSizes } from "~/utilits/consts";

export default function ApperanceModal({ close }) {
    const { backgroundColor, color, fontSize } = useAppearance();
    const [fontSizePercent, setFontsizePercent] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setFontsizePercent(document.querySelector('.active-font-size').offsetLeft)
        }, 1)
    }, [fontSize])
    return (
        <div className="w-[600px]">

            <h3 className="w-[600px] mt-5 mb-2 text-[1.438rem] leading-7 font-extrabold text-center">
                change
            </h3>

            <div className="px-8 pb-1 pt-0">
                <p className="text-center text-[color:var(--base-secondary)] text-[0.938rem] leading-5 mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, placeat.
                </p>
                <div className="mx-8 mb-4">
                    <div className=" px-2 border border-[color:var(--background-third)] flex py-3 gap-3 rounded-2xl">
                        <svg viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true" width={40} height={40} className="rounded-full object-cover">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                            </path>
                        </svg>
                        <div className="flex-1 flex flex-col">
                            <header className="mb-.5 flex items-center">
                                <div className="leading-5 font-bold text-[15px] flex items-center ">
                                    X
                                    <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" data-testid="icon-verified" width={20} height={18.75} fill="#1d9bf0" className="ml-0.5">
                                        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="ml-1 flex items-center text-[color:var(--base-secondary)]">
                                    @X
                                </div>
                            </header>
                            <div className="leading-5 text-[color:va(--color-base)] text-[15px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis sapiente accusamus cumque mollitia natus <span className="text-[#1d9bf0] hover:text-[color:var(--base-secondary)] cursor-pointer">@X</span> sed incidunt earum rerum enim, at, doloribus iure dignissimos maiores eius magnam debitis cum.
                            </div>
                        </div>
                    </div>

                    <h6 className="text-[color:var(--base-secondary)] font-bold text-[13px] mb-1 mt-2 leading-5">
                        Font
                    </h6>

                    <div className="gap-[10px] py-2 px-4 mb-3 bg-[color:var(--background-secondary)] rounded-2xl flex items-center gap-5">
                        <div className="text-[0.813rem]">AA</div>
                        <div className="h-1 flex-1  flex items-center justify-between bg-[color:var(--color-secondary)] rounded-full relative">
                            <div style={{ width: fontSizePercent + 5 }} className="h-full absolute rounded-full top-0 left-0 bg-[color:var(--color-primary)]" />
                            <div className="flex justify-between items-center w-[calc(100%+16px)] absolute -top-3.5 -left-[8px]">
                                {
                                    fontSizes.map(fs => (
                                        <button
                                            onClick={() => setFontsize(fs)}
                                            className={classNames("relative before:absolute before:w-8 before:h-8 before:inset-0 before:opacity-10 before:rounded-full before:hover:bg-[color:var(--color-primary)] w-8 h-8 rounded-full flex items-center justify-center ", {
                                                "active-font-size": fs == fontSize
                                            })}>
                                            <div className={classNames("w-3 h-3 rounded-full bg-[color:var(--color-secondary)]",
                                                {
                                                    "w-4 h-4": fs == fontSize,
                                                    "!bg-[color:var(--color-primary)]": fs <= fontSize
                                                }
                                            )} ></div>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="text-[1.25rem]">AA</div>
                    </div>

                    <h6 className="text-[color:var(--base-secondary)] font-bold text-[13px] mb-1 mt-2 leading-5">
                        Colors
                    </h6>

                    <div className="gap-[10px] py-2 px-4 mb-3 bg-[color:var(--background-secondary)] rounded-2xl flex items-center justify-around">
                        {colors.map((c, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setColor({
                                        ...color,
                                        ...c
                                    })
                                }}
                                style={{ '--bg': c.primary }}
                                className="w-[44px] h-[44px] rounded-full bg-[color:var(--bg)]"
                            >
                                {color.primary == c.primary && (

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[100%] h-[25px]" viewBox="0 0 50 50">
                                        <path fill="currentColor" d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
                                    </svg>
                                )
                                }
                            </button>
                        ))}
                    </div>

                    <h6 className="text-[color:var(--base-secondary)] font-bold text-[13px] mb-1 leading-5">
                        BackGround
                    </h6>

                    <div className="grid grid-cols-3 gap-[10px] py-2 px-4 bg-[color:var(--background-secondary)] rounded-2xl">
                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: "#0f1419",
                                    baseSecondary: '#536471'
                                })
                                setBackground({
                                    name: 'light',
                                    primary: '#ffffff',
                                    secondary: '#f7f9f9',
                                    third: '#eff3f4',
                                    modal: '#5b708366'
                                })
                            }}
                            className={classNames("h-[62px] pr-3 pl-2 bg-white text-[#0f1419] font-bold rounded group border border-white/10 flex items-center gap-[10px]", {
                                "!border-[color:var(--color-primary)]": backgroundColor.name === 'light'
                            })}>

                            <div className=" group-hover:bg-black/10 rounded-full flex items-center justify-center border border-black/10">
                                <div className={classNames("w-[20px] h-[20px] flex items-center justify-center ml-auto", {
                                    "!border-[color:var(--color-primary)]": backgroundColor.name == 'light'
                                })}>
                                    {backgroundColor.name == 'light' &&
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="#1a8cd8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                                            </path>
                                        </svg>
                                    }
                                </div>
                            </div>

                            <div className="truncate">
                                Default
                            </div>
                        </button>

                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: "#f7f9f9",
                                    baseSecondary: '#8b98a5',
                                })
                                setBackground({
                                    name: 'losh',
                                    primary: '#15202b',
                                    secondary: '#1e2732',
                                    third: '#273340',
                                    modal: '#5b708366'
                                })
                            }}
                            className={classNames("h-[62px] pr-3 pl-2 bg-[#15202b] text-[#f7f9f9] font-bold rounded group border border-white/10 flex items-center justify-center gap-[10px]", {
                                "!border-[color:var(--color-primary)]": backgroundColor.name === 'losh'
                            })}>


                            <div className="group-hover:bg-white/5 rounded-full flex items-center  justify-center border border-white/10">
                                <div className={classNames("w-[20px] h-[20px] flex items-center justify-center ml-auto", {
                                    "!border-[color:var(--color-primary)]": backgroundColor.name == 'losh'
                                })}>
                                    {backgroundColor.name == 'losh' &&
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="#1a8cd8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                                            </path>
                                        </svg>
                                    }
                                </div>
                            </div>
                            <div className="truncate">
                                Losh
                            </div>
                        </button>

                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: "#e7e9ea",
                                    baseSecondary: '#71767b'
                                })
                                setBackground({
                                    name: 'darker',
                                    primary: '#000000',
                                    secondary: '#16181c',
                                    third: '#273340',
                                    modal: '#5b708366'
                                })
                            }}
                            className={classNames("h-[62px] pr-3 pl-2 whitespace-nowrap bg-black text-[#f7f9f9] font-bold group rounded border border-white/10 flex items-center justify-center gap-[10px]", {
                                "!border-[color:var(--color-primary)]": backgroundColor.name === 'darker'
                            })}>

                            <div className="group-hover:bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                <div className={classNames("w-[20px] h-[20px] flex items-center justify-center ml-auto", {
                                    "!border-[color:var(--color-primary)]": backgroundColor.name == 'darker'
                                })}>
                                    {backgroundColor.name == 'darker' &&
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="#1a8cd8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                                            </path>
                                        </svg>
                                    }
                                </div>
                            </div>
                            <div className="truncate">
                                Lights Off
                            </div>
                        </button>

                    </div>

                    <div className="flex items-center justify-center pt-4">
                        <button
                            onClick={close}
                            className="bg-[color:var(--color-primary)] rounded-full p-1">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}