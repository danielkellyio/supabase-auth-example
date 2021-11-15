import { createClient } from "@supabase/supabase-js";
import useAuthUser from "@/composables/UseAuthUser";

// config
const supabaseUrl = "https://csybesgskolzayjluqcf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDM1Mzc1NiwiZXhwIjoxOTQ5OTI5NzU2fQ.W0cD9D_RRAzlGQdIYMsOmpIRDC_1jxqe7c506KiPsCU";

// setup client
const supabase = createClient(supabaseUrl, supabaseKey);

// setup auth state listener
supabase.auth.onAuthStateChange((event, session) => {
  console.log("on auth state change");
  const { user } = useAuthUser();
  user.value = session?.user || null;
});

// expose supabase client
export default function useSupabase() {
  return { supabase };
}
