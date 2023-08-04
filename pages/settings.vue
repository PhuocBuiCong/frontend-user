<!-- components/LogInForm.vue -->
<template>
  <div class="flex">
    <CSideBar />
    <div>
      <div>Account</div>
      <div class="container-profilepic rounded-full overflow-hidden relative">
        <div
          class="photo-preview w-full h-full bg-[url('~/image/avt1.png')]"
        ></div>
        <div
          class="middle-profilepic absolute inset-0 flex flex-col justify-center items-center hidden"
        >
          <div class="text-profilepic text-success">
            <i class="fas fa-camera"></i>
            <div class="text-profilepic">Change it</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
.container-profilepic {
  width: 150px;
  height: 150px;
}
.photo-preview {
  /* background-image: url(https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80); */
  background-size: cover;
  background-position: center;
}
.middle-profilepic {
  background-color: rgba(255, 255, 255, 0.69);
}
.container-profilepic:hover .middle-profilepic {
  display: flex !important;
  cursor: pointer;
}
</style>
