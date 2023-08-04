export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("custom-click-outside", {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = (event: any) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: (el) => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  });
});
