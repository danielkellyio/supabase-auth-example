import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "@/composables/UseAuthUser";

const routes = [
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: () => import("@/pages/EmailConfirmation.vue"),
  },
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/Home.vue"),
  },
  {
    name: "Me",
    path: "/me",
    component: () => import("@/pages/Me.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/pages/Login.vue"),
  },
  {
    name: "ForgotPassword",
    path: "/forgotPassword",
    component: () => import("@/pages/ForgotPassword.vue"),
  },
  {
    name: "Logout",
    path: "/logout",
    beforeEnter: () => {
      const { logout } = useAuthUser();
      logout();
      return { name: "Home" };
    },
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/pages/Register.vue"),
  },
  {
    name: "Message",
    path: "/message",
    props: (route) => {
      const params = new URLSearchParams(route.hash.replace("#", ""));
      return { message: params.get("message") };
    },
    component: () => import("@/pages/Message.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (to.hash.startsWith("#message") && to.name !== "Message") {
    return { name: "Message", hash: to.hash };
  }
  const { maybeHandleEmailConfirmation } = useAuthUser();
  return await maybeHandleEmailConfirmation(to);
});

export default router;
