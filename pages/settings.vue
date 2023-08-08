<!-- components/LogInForm.vue -->
<template>
  <div class="flex">
    <CSideBar />
    <div class="content w-full px-36 py-10">
      <div class="flex justify-between">
        <div class="text-black font-bold text-[36px]">Edit Profile</div>
        <div
          class="container-profilepic rounded-full overflow-hidden relative"
          @click="triggerFileInput"
        >
          <img class="photo-preview w-full h-full" :src="state.imageUrl" />
          <div
            class="middle-profilepic absolute inset-0 flex flex-col justify-center items-center hidden"
          >
            <div class="text-profilepic text-success">
              <i class="fas fa-camera"></i>
              <label class="text-profilepic" for="file">Change it</label>
            </div>
          </div>
        </div>
        <input ref="fileInput" type="file" @change="uploadImage" id="file" />
      </div>
      <div class="flex justify-between mt-3">
        <CInput
          v-model="state.firstName"
          placeholder="Entered first name"
          label="First Name"
          class="w-[300px]"
        />
        <CInput
          v-model="state.lastName"
          placeholder="Entered last name"
          label="Last Name"
          class="w-[300px]"
        />
      </div>
      <div class="flex justify-between mt-3">
        <CInput
          v-model="state.email"
          placeholder="phuocbc@gmail.com"
          label="Email"
          :required="true"
          class="w-full"
        />
      </div>
      <div
        class="w-[180px] h-[55px] bg-[#FF7008] text-white font-semibold text-xl rounded-md flex items-center justify-center cursor-pointer mt-4 m-auto"
        @click="handelSaveProfile"
      >
        Save
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { state, getUser, updateUser } = useUserStore();
const { readFileData } = useCommon();
const fileInput = ref();
onMounted(() => {
  getUser();
});

const uploadImage = async () => {
  try {
    const file = fileInput.value.files[0];
    console.log(file);
    state.imageUrl = await readFileData(file);
  } catch (error) {}
};

const triggerFileInput = () => {
  fileInput?.value?.click();
};

const handelSaveProfile = () => {
  updateUser();
};
</script>
<style scoped>
.container-profilepic {
  width: 100px;
  height: 100px;
}
.photo-preview {
  display: block;
}
.middle-profilepic {
  background-color: rgba(255, 255, 255, 0.69);
}
.container-profilepic:hover .middle-profilepic {
  display: flex !important;
  cursor: pointer;
}
#file {
  display: none;
}
</style>
