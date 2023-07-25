import { reactive } from "vue";

export const useLoginStore = defineStore("login", () => {
  const { $axios } = useNuxtApp();
  const state = reactive({
    email: "",
    password: "",
    isRememberMe: false,
  });

  const onLogin = async () => {
    try {
      const payload = {
        email: state.email,
        password: state.password,
      };
      const { data } = await $axios.post("/login", payload);
      console.log(data);
      if (data) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refresh", data.refreshToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh") || "";
      const payload = {
        refreshToken,
      };
      const { data } = await $axios.post("/refresh", payload);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUser = async () => {
    try {
      const data = await $axios.get("/user");
      console.log("data get user store", data);
    } catch (error) {
      console.log(error);
    }
  };

  return { state, onLogin, getUser, refreshToken };
});

export default useLoginStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}
