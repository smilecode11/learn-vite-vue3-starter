<template>
  <h2>{{ pageTitle }}</h2>
  <!-- 按钮 -->
  <el-button type="primary">Primary</el-button>
  <el-button type="warning">warning</el-button>
  <!-- 走马灯 -->
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 8" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

<style scoped>

/* 走马灯 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
