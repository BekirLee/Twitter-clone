import modals from "~/routers/modals";
import { useModal } from "~/store/modal/hooks"

export default function Modal() {

    const modal = useModal();
    console.log(modal)
    const currentModal = modals.find(m => m.name == modal.name)
    console.log(currentModal)

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center text-red ">
            {currentModal && <currentModal.element />}
        </div>
    )
}