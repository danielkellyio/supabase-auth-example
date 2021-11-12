import { ref } from "vue";
const user = ref(null);
export default function useAuthUser() {
  return {
    user,
  };
}
