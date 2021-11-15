import { ref } from "vue";

// user is set outside of the useAuthUser function
// so that it will act as global state and always refer to a single user
const user = ref(null);

export default function useAuthUser() {
  /**
   * Login with email and password
   */
  const login = async ({ email, password }) => {};

  /**
   * Login with google, github, etc
   */
  const loginWithSocialProvider = (provider) => {};

  /**
   * Logout
   */
  const logout = async () => {};

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = () => {};

  /**
   * Register
   */
  const register = async ({ email, password, ...meta }) => {};

  /**
   * Update user email, password, or meta data
   */
  const update = async (data) => {};

  /**
   * Send user an email to reset their password
   * (ie. support "Forgot Password?")
   */
  const sendPasswordRestEmail = async (email) => {};
  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  };
}
