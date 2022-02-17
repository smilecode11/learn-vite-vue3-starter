import { useRoute } from 'vue-router'

const usePageTitle = () => {
  const route = useRoute()
  return route.name
}

export default usePageTitle
export { usePageTitle }
