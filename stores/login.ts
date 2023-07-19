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
      const data = await $axios.get("/user");
      console.log(data);
    } catch (error) {}
  };
  return { state, onLogin };
});

export default useLoginStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}
