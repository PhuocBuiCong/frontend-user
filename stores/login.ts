import { reactive } from "vue";
import { required, helpers } from "@vuelidate/validators";
import { emailValidate } from "../utils/constant/validate";
import { LoginState } from "../utils/types/state/login";
import _ from "lodash";

const defaultState = {
  email: "",
  password: "",
  isRememberMe: false,
  hasErrors: {
    email: "",
    password: "",
  },
  errorMessage: "",
};
export const useLoginStore = defineStore("login", () => {
  const { $axios } = useNuxtApp();
  const state = reactive<LoginState>({
    ..._.cloneDeep(defaultState),
  });

  const rules = {
    email: {
      required: helpers.withMessage(
        "Email is required, please enter",
        required
      ),
      emailRegex: helpers.withMessage("Wrong Email format", emailValidate),
    },
    password: {
      required: helpers.withMessage(
        "Pasword is required, please enter",
        required
      ),
    },
  };

  const { checkField, $v, checkAllField, isValidForm } = useValidate(
    rules,
    state
  );

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

  const getUser = async () => {
    try {
      const data = await $axios.get("/user");
      console.log("data get user store", data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState));
  };
  return {
    state,
    onLogin,
    getUser,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    resetStateToDefault,
  };
});

export default useLoginStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}
