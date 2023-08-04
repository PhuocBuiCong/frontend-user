<!-- components/LogInForm.vue -->
<template>
  <div class="cursor-pointer" v-custom-click-outside="clickOutsideMenu">
    <div class="w-[90px] h-[50px]" @click="isShowMenu">
      <img src="/image/avt.jpg" class="w-full h-full" />
    </div>
    <div v-if="isOpenMenu" class="flex flex-col items-center justify-center">
      <div class="triangle-down position: absolute top-[65px]"></div>
      <ul
        class="w-[200px] h-[155px] bg-slate-200 border-solid border-[1px] border-gray-300 p-3 position: absolute top-[73px] right-0"
      >
        <li>Hello, Bui Phuoc</li>
        <li class="mt-2 hover:bg-red-50 cursor-pointer">Activity</li>
        <li
          class="my-2 hover:bg-red-50 cursor-pointer"
          @click="navigateTo('/settings')"
        >
          Personal Setting
        </li>
        <li class="hover:bg-red-50 cursor-pointer">Log out</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const homeStore = useHomeStore();
const isOpenMenu = ref(false);
const isShowMenu = () => {
  // console.log("222");
  isOpenMenu.value = !isOpenMenu.value;
  // console.log(isOpenMenu.value);
  // homeStore.state.isOpen = !homeStore.state.isOpen;
};
const clickOutsideMenu = () => {
  // console.log("111");
  isOpenMenu.value = false;
  // homeStore.state.isOpen = false;
};
</script>
<style scoped>
.triangle-down {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid rgb(226 232 240 / var(--tw-bg-opacity));
}
</style>
