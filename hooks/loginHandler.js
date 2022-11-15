import { store } from "../redux";
import { login } from "../redux/authReducer";

export const loginHandler = async (token) => {
    if (!token) return
    
    localStorage.setItem("token", token);
    store.dispatch(login(token))
}