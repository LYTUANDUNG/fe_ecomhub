<script setup lang="ts">

import AccountDashboardHeader from "@/features/account/dashboard/components/AccountDashboardHeader.vue";
import AccountFeatureList from "@/features/account/dashboard/components/AccountFeatureList.vue";
</script>

<template>
  <div class="dashboard-page">
    <div class="max-w-[1000px] mx-auto">
      <AccountDashboardHeader/>
      <AccountFeatureList/>
    </div>
  </div>
</template>

<style scoped>
.dashboard-page {
  padding: 14px 18px 18px 18px;
}
</style>