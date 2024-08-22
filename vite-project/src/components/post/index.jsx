export default function Post({ post }) {
    return (
        <div className="border-b border-[color:var(--background-third)] flex gap-3 py-3 px-4 relative before:absolute before:inset-0  before:z-[-1] before:transiton-colors before:opacity-50 before:hover:bg-[color:var(--background-secondary)]">
            <img src={post.account.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />

            <div className="flex-1 mb-0.5">
                <header className="leading-5 flex item-center gap-2">
                    <a href="" className="hover:underline flex items-center font-bold">
                        {post.account.fullName}
                        {post.account?.verified &&
                            (<svg viewBox="0 0 22 22" aria-label="Verified account" role="img" fill="#1d9bf0" className="ml-0.5 h-[1.172rem]">
                                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>)}
                    </a>
                    <div className="text-[color:var(--color-base-secondary)] flex items-center gap-2">
                        <div className="">
                            @{post.account.username}
                        </div>
                        <div className="">.</div>
                        <div>17s</div>
                    </div>
                </header>
                <div dangerouslySetInnerHTML={{
                    __html: post.content.replace(/\n/g, '<br>'
                    )
                }} />
                <div className="flex -ml-1.5 mt-1.5">
                    <div className="flex-1 flex group items-center">
                        <div className="flex rounded-full w-[2.172rem] h-[2.172rem] gap-3 transition-colors items-center justify-center group-hover:bg-[#1d9bf01a] group-hover:text-[#1d9bf0]">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.172rem] text-[color:var(--color-base-secondary)]">
                                <path fill="currentColor"
                                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                                </path>
                            </svg>
                        </div>
                        <span className="transition-colors text-[color:var(--color-base-primary)] group-hover:text-[#1d9bf0]">
                            {
                                new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 6 }).format(
                                    post.stats.like
                                )
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}