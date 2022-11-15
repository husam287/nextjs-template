import store from '../reducers';
import { login } from '../reducers/authReducer';

const loginHandler = async (token) => {
  if (!token) return;

  localStorage.setItem('token', token);
  store.dispatch(login(token));
};

export default loginHandler;
