import { useRoute } from "vue-router";

export function usePageTitle() {
  const route = useRoute();
  return route.name;
}
