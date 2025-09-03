<script setup lang="ts">
import {FeatureItems} from '../models/FeatureItem'
import FeatureCard from "./FeatureCard.vue";

const features = FeatureItems.items
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <FeatureCard
        v-for="(item, index) in features"
        :key="index"
        :src="item.src"
        :title="item.title"
        :description="item.description"
        :to="item.to"
    />
  </div>
</template>

<style scoped>

</style>