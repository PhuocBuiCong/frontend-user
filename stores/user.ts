import { reactive } from "vue";
import _ from "lodash";
import { UserState } from "utils/types/state/user";

const defaultState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  imageUrl: "/image/avt1.png",
  imagePath: "",
};

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");
  const isLogin = computed(() => !!token.value);
  const { $axios } = useNuxtApp();
  const state = reactive<UserState>({
    ..._.cloneDeep(defaultState),
  });

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState));
  };

  const logout = () => {
    token.value = "";
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    resetStateToDefault();
  };

  // action call to save token after login successfully
  const saveToken = (tokenIn: string) => {
    token.value = tokenIn;
  };

  const updateToken = () => {
    if (process.client) {
      const tokenFromStorage: string = localStorage.getItem("token") || "";
      if (tokenFromStorage) {
        token.value = tokenFromStorage;
        return;
      }
      token.value = "";
    } else {
      token.value = "";
    }
  };

  const getUser = async () => {
    const userId = localStorage.getItem("id") || "";
    try {
      const payload = {
        id: userId,
      };
      const { data } = await $axios.post("/user", payload);
      if (data) {
        state.id = data.id;
        state.email = data.email;
        state.firstName = data.firstName;
        state.lastName = data.lastName;
        state.imageUrl = data.imageUrl ?? state.imageUrl;
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    try {
      const payload = {
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        imageUrl: state.imageUrl
      };
      const { data } = await $axios.post("/updateUser", payload);
      if (data) {
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    state,
    isLogin,
    saveToken,
    updateToken,
    logout,
    getUser,
    updateUser,
  };
});
export default useUserStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
