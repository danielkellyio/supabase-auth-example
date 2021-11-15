// UseSupabase.js
import { createClient } from "@supabase/supabase-js";

// these can come from an environment variable if desired
// not required however as they are 100% exposed on the client side anyway
// and that's ok, Supabase expects this
const supabaseUrl = "https://csybesgskolzayjluqcf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDM1Mzc1NiwiZXhwIjoxOTQ5OTI5NzU2fQ.W0cD9D_RRAzlGQdIYMsOmpIRDC_1jxqe7c506KiPsCU";

// setup client
const supabase = createClient(supabaseUrl, supabaseKey);

// expose supabase client
export default function useSupabase() {
  return { supabase };
}
