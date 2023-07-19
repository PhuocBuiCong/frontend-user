import axios, { AxiosHeaders, AxiosInstance } from "axios";
declare module "nuxt/dist/app/nuxt" {
  interface NuxtApp {
    $axios: AxiosInstance;
  }
}

export default defineNuxtPlugin(({ $pinia }) => {
  const runtimeConfig = useRuntimeConfig();
  console.log(runtimeConfig.public.apiBase);
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
      console.log("trc khi request");
    
      // get access token from local storage
    //   config.headers['X-Token'] = 
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Do something with response data
      console.log("Sau khi server response", response.data);
      const config = response.config;
      if (config.url?.includes("/login") || config.url?.includes("/refresh")) {
        return response;
      }
      const { code } = response.data;
      if (code && code === 401) {
        console.log("token expried");
      }
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: instance,
    },
  };
});
