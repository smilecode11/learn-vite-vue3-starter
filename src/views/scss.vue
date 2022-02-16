<template>
  <h2>{{ pageTitle }}</h2>
  <div class="scss-class">继承 Scss</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { usePageTitle } from "../hooks/usePageTitle";
export default defineComponent({
  setup() {
    const pageTitle = usePageTitle();
    return {
      pageTitle,
    };
  },
});
</script>

<style lang="scss" scoped>
// vite 集成了 scss-loader, 无需额外配置
$danger:red;
.scss-class{
  color: $danger;
  background: yellow;
}
</style>

