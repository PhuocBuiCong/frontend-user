import { reactive } from "vue";
import { required, helpers, minLength } from "@vuelidate/validators";
import { emailValidate, passwordValidate } from "../utils/constant/validate";
import { SignUpState } from "utils/types/state/signup";
import _ from "lodash";
const defaultState = {
  email: "",
  password: "",
  confirmPassword: "",
  hasErrors: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  errorMessage: "",
};

export const useSignupStore = defineStore("signup", () => {
  const { $axios } = useNuxtApp();
  const state = reactive<SignUpState>({
    ..._.cloneDeep(defaultState),
  });
  const confirmPasswordRegex = (value: string) => {
    return state.password === value;
  };
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
      minLength: helpers.withMessage(
        "Password must be at least 6 characters",
        minLength(6)
      ),
      passwordRegex: helpers.withMessage(
        "Please enter 6 characters including letters and numbers",
        passwordValidate
      ),
    },
    confirmPassword: {
      required: helpers.withMessage(
        "Confirm pasword is required, please enter",
        required
      ),
      minLength: helpers.withMessage(
        "Password must be at least 6 characters",
        minLength(6)
      ),
      passwordRegex: helpers.withMessage(
        "Please enter 6 characters including letters and numbers",
        passwordValidate
      ),
      confirmPasswordRegex: helpers.withMessage(
        "Password confirm dose not match",
        confirmPasswordRegex
      ),
    },
  };

  const { checkField, $v, checkAllField, isValidForm } = useValidate(
    rules,
    state
  );

  const onSignUp = async () => {
    try {
      const payload = {
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };
      const { data } = await $axios.post("/signup", payload);
      console.log(data);
      if (data) {
        alert("Successful account registration");
        navigateTo("/login");
      }
    } catch (error: any) {
      console.log(error);
      state.errorMessage = error.response.data;
    }
  };

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState));
  };
  return {
    state,
    onSignUp,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    resetStateToDefault,
  };
});

export default useSignupStore;

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSignupStore, import.meta.hot));
}
