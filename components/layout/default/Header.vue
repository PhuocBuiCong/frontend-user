<!-- components/LogInForm.vue -->
<template>
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="flex flex-wrap items-center justify-between mx-10 p-4">
      <div class="flex items-center">
        <img
          src="/image/logo.png"
          class="mr-3 w-[50px] h-[50px] logo"
          alt="ZoeCloset Logo"
        />
        <span class="text-[#ab732a] text-[26px] font-medium">Zoe Closet</span>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-12"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#5f5f5f] font-bold hover:text-[#ab732a]"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#5f5f5f] font-bold rounded hover:text-[#ab732a]"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#5f5f5f] font-bold rounded hover:text-[#ab732a]"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#5f5f5f] font-bold rounded hover:text-[#ab732a]"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2">
        <CUser />
        <button
          v-if="!userStore.isLogin"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="navigateTo('/login')"
        >
          Login
        </button>
        <!-- <button
          v-if="userStore.isLogin"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="logOut"
        >
          Log out
        </button> -->

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const userStore = useUserStore();

// const logOut = () => {
//   userStore.logout();
//   navigateTo("/login");
// };
</script>
<style scoped>
.logo {
  background-size: cover;
  background-position: center;
}
</style>
