import { setToast } from '../redux/actions/AppActions'
import { logout } from '../redux/actions/AuthActions'
import { store } from '../redux/store'

export default function HandleErrors(err) {
    //Showing Toast Function
    const showErrorToast = (msg) => {
        store.dispatch(
            setToast({
                toastMsg: msg,
                toastType: 'error',
            })
        )
    }

    if (err?.code?.includes('token_not_valid')) {
        store.dispatch(
            logout()
        )
    }

    console.log("errdata", err)

    if (err.details?.reason) {
        showErrorToast(err.details?.reason)
    }
    else if (err?.err) {
        showErrorToast(err?.err)
    }
    else if (err.message) {
        showErrorToast(err.message)
    } else if (err.details?.length) {
        showErrorToast(err.details.join(', '))
    } else if (err.detail) {
        showErrorToast(err.detail)
    } else if (typeof err === "string") {
        showErrorToast(err)
    } else if (err && Object.keys(err)) {
        showErrorToast(err[Object.keys(err)[0]][0])
    } else if (Object.keys !== 0) {
        showErrorToast(Object.values(err)[0])
    }
    else {
        showErrorToast("خطأ غير متوقع!")
    }
}