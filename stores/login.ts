import { reactive } from "vue";
import { required, helpers } from "@vuelidate/validators";
import { emailValidate } from "../utils/constant/validate";
export const useLoginStore = defineStore("login", () => {
  const { $axios } = useNuxtApp();
  const state = reactive({
    email: "",
    password: "",
    isRememberMe: false,
    hasErrors: {
      email: "",
      password: "",
    },
    errorMessage: "",
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

  return {
    state,
    onLogin,
    getUser,
    checkField,
    $v,
    checkAllField,
    isValidForm,
  };
});

export default useLoginStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}
