import { WritableComputedRef } from "vue";

export const useSyncProps = <T>(
  props: any,
  key: string,
  emit: any
): WritableComputedRef<T> => {
  return computed({
    get() {
      return props[key];
    },
    set(value: T) {
      emit(`update:${key}`, value);
    },
  });
};
