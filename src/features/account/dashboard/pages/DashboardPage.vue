<script setup lang="ts">

import FeatureList from "../components/FeatureList.vue";
</script>

<template>
  <div class="dashboard-page">
    <div class="max-w-[1000px] mx-auto">
      <div class="mb-3">
        <h1 class="font-bold text-3xl">Your Account</h1>
      </div>
      <FeatureList/>
    </div>
  </div>
</template>

<style scoped>
.dashboard-page {
  padding: 14px 18px 18px 18px;
}
</style>