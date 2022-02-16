<template>
  <h2>{{ pageTitle }}</h2>
  <div>store count: {{ countRef }} - {{ doubleCountRef }}</div>
  <button @click="handleCountAdd">count ++</button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { usePageTitle } from "../hooks/usePageTitle";

export default defineComponent({
  setup() {
    const pageTitle = usePageTitle();

    const store = useStore();
    const countRef = computed(() => store.state.count);
    const doubleCountRef = computed(() => store.getters.doubleCount);
    const handleCountAdd = () => {
      store.commit("increment");
    };

    return {
      countRef,
      doubleCountRef,
      handleCountAdd,
      pageTitle,
    };
  },
});
</script>
