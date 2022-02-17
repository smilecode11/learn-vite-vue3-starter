<template>
  <h2>{{ pageTitle }}</h2>
  <div v-if="!axiosRet.loaded">loading...</div>
  <div v-else>response: {{ axiosRet.resp }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { usePageTitle } from '@/hooks/usePageTitle'
import axios from '@/utils/http'

interface AxiosResp {
  resp?: any
  loading?: boolean
  loaded?: boolean
}

export default defineComponent({
  setup() {
    const pageTitle = usePageTitle()

    const axiosRet = reactive<AxiosResp>({
      resp: '',
      loading: false,
      loaded: false
    })

    onMounted(() => {
      axios
        .get('/api/category/get')
        .then((resp) => {
          axiosRet.resp = resp
        })
        .catch((error) => {
          axiosRet.resp = error
        })
        .finally(() => {
          axiosRet.loading = false
          axiosRet.loaded = true
        })
    })

    return {
      pageTitle,
      axiosRet
    }
  }
})
</script>
