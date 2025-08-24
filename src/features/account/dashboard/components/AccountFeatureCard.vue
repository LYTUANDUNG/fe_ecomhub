<script setup lang="js">
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Avatar,AvatarFallback, AvatarImage} from "@/components/ui/avatar/index.js";

defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <Card class="feature-card shadow-none">
    <Avatar class="w-16 h-16">
      <AvatarImage
          :src="src" class="object-fill" />
        <AvatarFallback class="text-center">{{ title }}</AvatarFallback>
    </Avatar>
    <CardHeader class="p-0 gap-y-1 break-words max-w-[14rem] ml-2">
      <CardTitle class="text-lg font-normal">{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
  </Card>
</template>

<style scoped>
.feature-card {
  width: fit-content;
  display: flex;
  padding: 14px 18px;
}

.feature-card:hover {
  background-color: #f3f4f6;
  cursor: pointer;
}
</style>