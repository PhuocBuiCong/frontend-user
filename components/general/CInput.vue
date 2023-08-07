<!-- components/LogInForm.vue -->
<template>
  <div class="flex flex-col">
    <div
      v-if="props.label"
      :class="props.required && 'field-label-require'"
      class="field-label"
    >
      {{ label }}
    </div>
    <div :class="[borderBackground, 'input-border w-full h-[48px]']">
      <input
        id="textbox"
        v-model.trim="syncModelValue"
        :disable="!!props.status"
        :type="props.type"
        :placeholder="props.placeholder"
        :class="[
          'text-base text-black w-full h-[48px] p-[5px]',
          'input-textbox',
        ]"
        @focusin="onFocusIn"
        @focusout="onFocusOut"
      />
    </div>
    <div class="break-normal">
      <span v-if="!!props.errMsg" class="text-red-500 text-sm font-bold">
        {{ props.errMsg }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  errMsg: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  status: {
    type: Number,
    default: 0,
  },

  type: {
    type: String,
    default: "text",
  },

  //new prop
  required: {
    type: Boolean,
    default: false,
  },
});
const isFocusing = ref(false);
const emits = defineEmits([
  "update:modelValue",
  "focus",
  "focusIn",
  "focusOut",
  "search",
]);
const syncModelValue = useSyncProps<string>(props, "modelValue", emits);
const borderBackground = computed(() => {
  if (props.status) {
    return "border-bacground";
  }
  if (!!props.errMsg) {
    return "border-urgen";
  }
  if (!isFocusing.value) {
    return "border-normal";
  } else {
    return "border-focus";
  }
});

const onFocusIn = () => {
  emits("focusIn");
  isFocusing.value = true;
};
const onFocusOut = () => {
  emits("focusOut");
  isFocusing.value = false;
};
</script>
<style scoped>
.field-label,
.field-label-require {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 5px;
}
.field-label-require::before {
  content: "Required";
  display: inline-block;
  width: 60px;
  height: 22px;
  background: red;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  color: #ffffff;
  text-align: center;
  line-height: 22px;
  margin-right: 8px;
}
.input-border {
  overflow: hidden;
  flex: 1 1 0%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  height: 48px;
}
.border-urgen {
  border: 2px solid red !important;
  background-color: red !important;
}
.border-focus {
  border: 2px solid green !important;
  background-color: white !important;
}

.border-normal {
  /* border-color: green !important; */
  background-color: white !important;
  border: 1px solid gray;
  padding: 1px;
}
.border-search {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}
</style>
