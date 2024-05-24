import modals from "~/routers/modals";
import { useModal } from "~/store/modal/hooks"

export default function Modal() {

    const modal = useModal();
    const currentModal = modals.find(m => m.name == modal.name)

    return (
        <div className="fixed inset-0 bg-[#5b7083]/40 flex items-center justify-center text-red z-10">

            <div className="bg-black">
                {currentModal && <currentModal.element />}
            </div>
        </div>
    )
}