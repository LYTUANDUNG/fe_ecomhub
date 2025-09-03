<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {FeatureItems} from '../models/FeatureItem'

const props = defineProps<{
  items: { title: string; href?: string }[]
}>()

const baseUrl = FeatureItems.basePath
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem class="text-blue-700 gap-0">
        <BreadcrumbLink :href="baseUrl" class="hover:underline hover:text-inherit">
          Your account
        </BreadcrumbLink>
        <BreadcrumbSeparator/>
      </BreadcrumbItem>

      <BreadcrumbItem
          v-for="(item, index) in props.items"
          :key="index"
          class="text-blue-700 gap-0"
      >
        <template v-if="index < props.items.length - 1">
          <BreadcrumbLink :href="baseUrl + '/' + item.href" class="hover:underline hover:text-inherit">
            {{ item.title }}
          </BreadcrumbLink>
          <BreadcrumbSeparator/>
        </template>

        <template v-else>
          <span class="text-orange-600">
            {{ item.title }}
          </span>
        </template>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
