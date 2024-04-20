import Button from "../buttons";

export default function Premium() {
    return (
        <section className="bg-[#16181c] mb-4 rounded-xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5">
            <div className="text-[#e7e9ea] font-extrabold">
                Subscribe to Premium
            </div>
            <p className="text-[#e7e9ea] leading-6 text-[15px] font-bold">
                Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </p>
            <div className="self-start">
                <Button size="normal">
                    Subscribe
                </Button>
            </div>
        </section>
    )
}