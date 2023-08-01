<!-- components/LogInForm.vue -->
<template>
  <div id="app" class="bg-[url('~/image/bg2.jpg')] h-screen flex">
    <div class="w-[420px] m-auto">
      <div
        class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg bg-white"
      >
        <h3 class="text-xl text-center mt-8 mb-8">SignUp</h3>
        <div class="px-4 mb-4">
          <label class="font-bold text-base text-black">Email</label>
          <input
            v-model="signUpStore.state.email"
            type="text"
            placeholder="Email Address"
            class="border border-gray rounded w-full p-3"
            ref="refInput"
            @focusout="signUpStore.checkField('email')"
          />
          <p v-if="signUpStore.state.hasErrors.email" class="text-red-500">
            {{ signUpStore.state.hasErrors.email }}
          </p>
        </div>
        <div class="px-4 mb-4">
          <label class="font-bold text-base text-black">Password</label>
          <input
            v-model="signUpStore.state.password"
            type="text"
            placeholder="Password"
            class="border border-gray rounded w-full p-3"
            @focusout="signUpStore.checkField('password')"
          />
          <p v-if="signUpStore.state.hasErrors.password" class="text-red-500">
            {{ signUpStore.state.hasErrors.password }}
          </p>
        </div>

        <div class="px-4 mb-4">
          <label class="font-bold text-base text-black">
            Confirm Password</label
          >
          <input
            v-model="signUpStore.state.confirmPassword"
            type="text"
            placeholder="Confirm Password"
            class="border border-gray rounded w-full p-3"
            @focusout="signUpStore.checkField('confirmPassword')"
          />
          <p
            v-if="signUpStore.state.hasErrors.confirmPassword"
            class="text-red-500"
          >
            {{ signUpStore.state.hasErrors.confirmPassword }}
          </p>
        </div>

        <div class="px-4 mb-6">
          <button
            class="border w-full px-4 py-3 text-white font-semibold rounded"
            :class="
              signUpStore.isValidForm
                ? 'border-blue-500 bg-blue-600'
                : 'bg-gray-400'
            "
            @click="handleSignUp"
          >
            SignUp
          </button>
        </div>
        <div v-if="signUpStore.state.errorMessage" class="text-red-500 px-4">
          {{ signUpStore.state.errorMessage }}
        </div>
        <div class="bg-gray-100 text-center text-gray-700 py-5">
          Do you have a account? Please
          <NuxtLink to="/login" class="font-semibold no-underline text-black"
            >Login</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const signUpStore = useSignupStore();
const refInput = ref<null | { focus: () => null }>(null);

onMounted(() => {
  signUpStore.resetStateToDefault();
  refInput?.value?.focus();
});
const handleSignUp = () => {
  signUpStore.onSignUp();
};
</script>
