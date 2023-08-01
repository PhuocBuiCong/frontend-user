import useVuelidate from "@vuelidate/core";
import lodash from "lodash";
const { isEmpty } = lodash;

export const useValidate = (rules: any, state: any) => {
  const $v = useVuelidate(rules, state);
  const isValidForm = ref(false);

  const checkField = async (name: string) => {
    const formKeys = Object.keys(rules);
    if (formKeys.includes(name)) {
      await $v.value[name].$validate();

      if (!isEmpty($v.value[name].$errors)) {
        state.hasErrors[name] = $v.value[name].$errors[0].$message;
      } else {
        state.hasErrors[name] = "";
      }
    }
    isValidForm.value = await $v.value.$validate();
  };

  const checkAllField = async () => {
    const isValid = await $v.value.$validate();
    if (!isValid) {
      const formKeys = Object.keys(rules);
      formKeys.forEach((nameKey) => {
        checkField(nameKey);
      });
    }
    isValidForm.value = true;
    return isValid;
  };

  watch(
    () => $v.value.$invalid,
    () => {
      isValidForm.value = !$v.value.$invalid;
    }
  );
  return { checkField, checkAllField, $v, isValidForm };
};
