import { SHOW_LOADER } from "redux/constants/Loading"
import { STOP_LOADING } from "redux/constants/Loading"

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}