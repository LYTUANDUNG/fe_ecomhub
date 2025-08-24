<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Home</h1>
    <p>Welcome to ECOMHUB skeleton project.</p>
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card>
        <template #title>Sample Card</template>
        <template #body>This is a sample card component.</template>
      </Card>
      <div>
        <Button @click="onClick">Primary Action</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Card} from "@/components/ui/card/index.js";
import {Button} from "@/components/ui/button/index.js";

const onClick = () => { alert('Clicked!') }
</script>
