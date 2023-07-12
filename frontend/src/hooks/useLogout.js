import { useAuthsContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext'
export const useLogout = () => {
    const { dispatch } = useAuthsContext();
    const { dispatch: workoutsDispatch } = useWorkoutsContext();
    const logout = () => {
        //remove user from the local storage
        localStorage.removeItem('user');
        //dispatch logout action
        dispatch({ type: 'LOGOUT' })
        workoutsDispatch({ type: 'SET_WORKOUTS', payload: null })
    }
    return { logout }
}