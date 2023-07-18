import { reactive } from "vue";
export const useLoginStore = defineStore("login", () => {
  const state = reactive({
    email: "",
    password: "",
    isRememberMe: false,
  });
  return { state };
});

export default useLoginStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}
