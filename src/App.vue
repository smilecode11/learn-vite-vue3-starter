<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <hr />
  <router-view></router-view>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HelloWorld,
  },
});
</script>

<style></style>
