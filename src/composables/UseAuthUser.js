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
   * Login with refresh token
   * Useful for logging in after email confirmations
   */
  const loginWithRefreshToken = async (token) => {};

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

  /**
   * Will be useful for informing the application what to do
   * when Supabase redirects a user back to app
   * after confirming email address
   */
  const maybeHandleEmailConfirmation = async (route) => {};
  return {
    user,
    login,
    loginWithSocialProvider,
    loginWithRefreshToken,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
    maybeHandleEmailConfirmation,
  };
}
