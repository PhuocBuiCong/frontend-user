<!-- components/LogInForm.vue -->
<template>
  <div id="app" class="bg-[url('~/image/bg2.jpg')] h-screen flex">
    <div class="w-[420px] m-auto">
      <div
        class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg bg-white"
      >
        <h3 class="text-xl text-center mt-8 mb-8">Login</h3>
        <div class="px-4 mb-4">
          <input
            v-model="state.email"
            type="text"
            placeholder="Email Address"
            class="border border-gray rounded w-full p-3"
          />
        </div>
        <div class="px-4 mb-4">
          <input
            v-model="state.password"
            type="text"
            placeholder="Password"
            class="border border-gray rounded w-full p-3"
          />
        </div>
        <div class="px-4 mb-4 flex">
          <div class="w-1/2">
            <input
              v-model="state.isRememberMe"
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
        <div class="px-4 mb-6">
          <button
            class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold"
            @click="handleLogin"
          >
            Sign in
          </button>
        </div>

        <div class="px-4 mb-6">
          <button
            class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold"
            @click="onGetUser"
          >
            Get User
          </button>
        </div>
        <div class="bg-gray-100 text-center text-gray-700 py-5">
          Don't have a account?
          <a href="#" class="font-semibold no-underline text-black">Signup</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { state, onLogin, getUser } = useLoginStore();

onMounted(() => {
  // console.log(state);
});
const handleLogin = () => {
  onLogin();
};
const onGetUser = async () => {
  await getUser();
};
</script>
