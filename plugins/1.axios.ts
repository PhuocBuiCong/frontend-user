import axios, { AxiosHeaders, AxiosInstance } from "axios";
declare module "nuxt/dist/app/nuxt" {
  interface NuxtApp {
    $axios: AxiosInstance;
  }
}

export default defineNuxtPlugin(({ $pinia }) => {
  const runtimeConfig = useRuntimeConfig();
  const userStore = useUserStore($pinia);
  userStore.updateToken();
  const instance = axios.create({
    baseURL: runtimeConfig.public.apiBase,
    timeout: Number(runtimeConfig.public.apiTimeout),
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-ID": "1",
      Accept: "application/json, text/plain",
    },
  });

  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      if (config.url?.includes("/login") || config.url?.includes("/refresh")) {
        return config;
      }
      const token = localStorage.getItem("token") || "";
      console.log("trc khi request", token);
      config.headers["X-Token"] = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    async function (response) {
      // Do something with response data
      const config = response.config;
      if (config.url?.includes("/login") || config.url?.includes("/refresh")) {
        return response;
      }
      const { code, msg } = response.data;
      if (code && code === 401) {
        if (msg && msg === "jwt expired") {
          console.log("Th token het han ", msg);
          // step1: get token from call api refreshToken
          const { accessToken } = await refreshToken();
          //step2: assign token in header
          config.headers["X-Token"] = accessToken;
          //step3: reset to localstorage
          localStorage.setItem("token", accessToken);
          return instance(config);
        }
      }
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  async function refreshToken() {
    const refreshToken = localStorage.getItem("refresh") || "";
    return (await instance.post("refresh", { refreshToken })).data;
  }

  return {
    provide: {
      axios: instance,
    },
  };
});
