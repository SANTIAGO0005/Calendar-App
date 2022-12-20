import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModalOpen } from "../store/ui/uiSlice"

export const useUiStore = () => {
    const dispatch = useDispatch()

    const { isDateModalOpen} = useSelector( state => state.ui)

    const openDateModal = () => {
        dispatch( onOpenDateModalOpen())
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal())
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal()
    }


    return {
        //* Prop
        isDateModalOpen,

        //* Func
        openDateModal,
        closeDateModal,
        toggleDateModal
    }
}