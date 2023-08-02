import { reactive } from "vue";
import _ from "lodash";
import { UserState } from "utils/types/state/user";

const defaultState = {
  id: "",
  name: "",
};

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");
  const isLogin = computed(() => !!token.value);


  const state = reactive<UserState>({
    ..._.cloneDeep(defaultState),
  });

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState));
  };

  const logout = () => {
    token.value = "";
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    resetStateToDefault();
  };

  // action call to save token after login successfully
  const saveToken = (tokenIn: string) => {
      token.value = tokenIn;
    }

  const updateToken = () => {
    if (process.client) {
      const tokenFromStorage: string = localStorage.getItem('token') || "";
      if (tokenFromStorage) {
        token.value = tokenFromStorage;
        return;
      }
      token.value = "";
    } else {
      token.value = "";
    }
  };


  
  return {
    state,
    isLogin,
    saveToken,
    updateToken,
    logout,
  };
});
export default useUserStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
