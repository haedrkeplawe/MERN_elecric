import { useAuthContext } from "./useAuthContext"
import { useQuestContext } from "./useQuestContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: questDispatch } = useQuestContext()

    const logout = () => {
        //remove user from storage
        localStorage.removeItem("user")

        // dispatch logout action 
        dispatch({ type: "LOGOUT" })
        questDispatch({ type: "SET_WORKOUTS", payload: null })
    }
    return { logout }

}