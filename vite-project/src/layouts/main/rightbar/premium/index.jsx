// import Button from "./Button";

import Button from "~/components/Button/index,";

export default function Premium() {
    return (
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-xl border border-[#2f3336] py-3 px-4 flex flex-col gap-2.5 text-[color:var(--color-base)]">
            <div className=" font-extrabold text-[19px]">
                Subscribe to Premium
            </div>
            <p className=" leading-6 text-[15px] font-bold">
                Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </p>
            <div className="self-start">
                <Button variant="primary" size="normal" className='text-white'>
                    Subscribe
                </Button>
            </div>
        </section>
    )
}