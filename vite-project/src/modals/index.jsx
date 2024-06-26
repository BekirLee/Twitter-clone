import modals from "~/routers/modals";
import { removeModal } from "~/store/modal/actions";
import { useModal } from "~/store/modal/hooks"

export default function Modal() {

    const modal = useModal();
    const currentModal = modals.find(m => m.name == modal.name)

    return (
        <div className="fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center text-red z-10">

            <div className="bg-[color:var(--background-primary)] max-w-[600px] max-h-[96vh] overflow-hidden rounded-2xl">
                {currentModal && <currentModal.element close={removeModal} />}
            </div>
        </div>
    )
}