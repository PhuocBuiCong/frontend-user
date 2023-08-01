<!-- components/LogInForm.vue -->
<template>
  <div id="app" class="bg-[url('~/image/bg2.jpg')] h-screen flex">
    <div class="w-[420px] m-auto">
      <div
        class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg bg-white"
      >
        <h3 class="text-xl text-center mt-8 mb-8">Login</h3>
        <div class="px-4 mb-4">
          <label class="font-bold text-base text-black">Email</label>
          <input
            v-model="loginStore.state.email"
            type="text"
            placeholder="Email Address"
            class="border border-gray rounded w-full p-3"
            ref="refInput"
            @focusout="loginStore.checkField('email')"
          />
          <p v-if="loginStore.state.hasErrors.email" class="text-red-500">
            {{ loginStore.state.hasErrors.email }}
          </p>
        </div>
        <div class="px-4 mb-4">
          <label class="font-bold text-base text-black">Password</label>
          <input
            v-model="loginStore.state.password"
            type="text"
            placeholder="Password"
            class="border border-gray rounded w-full p-3"
            @focusout="loginStore.checkField('password')"
          />
          <p v-if="loginStore.state.hasErrors.password" class="text-red-500">
            {{ loginStore.state.hasErrors.password }}
          </p>
        </div>
        <div class="px-4 mb-4 flex">
          <div class="w-1/2">
            <input
              v-model="loginStore.state.isRememberMe"
              type="checkbox"
              class="align-middle cursor-pointer -mt-1"
              id="remember-me"
            />
            <label
              for="remember-me"
              class="align-middle text-gray-700 text-md cursor-pointer"
              >Remember me</label
            >
          </div>
          <div class="w-1/2 text-right">
            <a href="#" class="font-semibold no-underline text-black"
              >Forgot your password?</a
            >
          </div>
        </div>
        <div v-if="loginStore.state.errorMessage" class="text-red-500 px-4">
          {{ loginStore.state.errorMessage }}
        </div>
        <div class="px-4 mb-6">
          <button
            class="border w-full px-4 py-3 text-white font-semibold rounded"
            :class="
              loginStore.isValidForm
                ? 'border-blue-500 bg-blue-600'
                : 'bg-gray-400'
            "
            @click="handleLogin"
          >
            Sign in
          </button>
        </div>

        <div class="bg-gray-100 text-center text-gray-700 py-5">
          Don't have a account?
          <NuxtLink to="/signup" class="font-semibold no-underline text-black"
            >Signup
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const loginStore = useLoginStore();
const refInput = ref<null | { focus: () => null }>(null);
onMounted(() => {
  loginStore.resetStateToDefault();
  refInput?.value?.focus();
});
const handleLogin = () => {
  loginStore.onLogin();
  navigateTo("/");
};
</script>
