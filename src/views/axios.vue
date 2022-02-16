<template>
  <h2>{{ pageTitle }}</h2>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { usePageTitle } from "../hooks/usePageTitle";
import axios from "../utils/http";

export default defineComponent({
  setup() {
    const pageTitle = usePageTitle();

    onMounted(() => {
      axios
        .get("/api/category/get")
        .then((resp) => {
          console.log("resp");
        })
        .catch((error) => {
          console.log('error');
        });
    });

    return {
      pageTitle,
    };
  },
});
</script>
