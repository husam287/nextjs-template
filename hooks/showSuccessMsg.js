import { setToast } from "../redux/actions/AppActions"
import { store } from "../redux/store"

export default function showSuccessMsg(msg) {
    store.dispatch(
        setToast({
            toastMsg: msg,
            toastType: 'success',
        })
    )
    return null
}