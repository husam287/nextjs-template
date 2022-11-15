import store from '../reducers';
import { logout } from '../reducers/authReducer';

const logoutHandler = async () => {
  localStorage.removeItem('token');
  store.dispatch(logout());
};

export default logoutHandler;
