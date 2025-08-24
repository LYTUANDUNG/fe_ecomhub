<script setup lang="ts">
import {FeatureData} from '../models/AccountFeatureItem'
import AccountFeatureCard from "@/features/account/dashboard/components/AccountFeatureCard.vue";

const features = FeatureData.items
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <AccountFeatureCard
        v-for="(item, index) in features"
        :key="index"
        :src="item.src"
        :title="item.title"
        :description="item.description"
    />
  </div>
</template>

<style scoped>

</style>