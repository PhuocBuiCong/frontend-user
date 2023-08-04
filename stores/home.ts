import { reactive } from "vue";
import _ from "lodash";

const defaultState = {
  test: "",
  isOpen: false,
};

export const useHomeStore = defineStore("home", () => {
  const state = reactive({
    ..._.cloneDeep(defaultState),
  });

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState));
  };
  const { $axios } = useNuxtApp();

  const initHome = async () => {
    try {
      const { data } = await $axios.get("/home");
      console.log(data);
      if (data) {
        state.test = data;
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    state,
    initHome,
    resetStateToDefault,
  };
});
export default useHomeStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
}
