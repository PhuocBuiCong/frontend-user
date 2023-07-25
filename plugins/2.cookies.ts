import VueCookies, { VueCookies as InterFaceVueCookies } from "vue-cookies";
declare module "@vue/runtime-core" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface App<HostElement> {
    $cookies: InterFaceVueCookies;
  }
}

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(VueCookies, {});
});
