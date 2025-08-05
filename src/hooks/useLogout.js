// hooks/useLogout.js
import { useDispatch } from 'react-redux';
import { clearUser } from '../store/authSlice';
import { userManager } from '../auth/AuthProvider'; // adjust path as needed

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearUser()); // remove from Redux
    userManager.signoutRedirect(); // redirect to OIDC logout
  };

  return logout;
};
