import { ref } from "vue";
const user = ref(null);
import useSupabase from "@/composables/UseSupabase";
export default function useAuthUser() {
  const { supabase } = useSupabase();

  const maybeHandleEmailConfirmation = async (route) => {
    if (route.hash.startsWith("#access_token")) {
      const { login } = useAuthUser();
      const refreshToken = new URLSearchParams(route.hash.replace("#", "")).get(
        "refresh_token"
      );
      await login({ refreshToken });
      return { name: "Me" };
    }
  };

  const login = async ({ email, password, refreshToken, provider }) => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
      refreshToken,
      provider,
    });
    if (error) throw error;
    return user;
  };
  const loginWithSocialProvider = async (provider) => {
    console.log({ provider });
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
  };
  const logout = async () => {
    const { error } = supabase.auth.signOut();
    if (error) throw error;
  };
  const isLoggedIn = () => {
    return !!user.value;
  };
  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      { data: meta }
    );
    if (error) throw error;
    return user;
  };
  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };
  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(
      email
    );
    if (error) throw error;
    return user;
  };
  return {
    user,
    login,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail,
    maybeHandleEmailConfirmation,
    loginWithSocialProvider,
  };
}
