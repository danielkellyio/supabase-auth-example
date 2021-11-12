import { ref } from "vue";
const user = ref(null);
export default function useAuthUser() {
  const login = ({ email, password }) => {};
  const logout = () => {};
  const register = ({ username, email, password, meta }) => {};
  const update = (data) => {};
  const sendPasswordRestEmail = () => {};
  return {
    user,
    login,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  };
}
