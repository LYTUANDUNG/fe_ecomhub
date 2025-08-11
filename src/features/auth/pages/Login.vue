<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="submit">
      <input v-model="email" placeholder="Email" class="input w-full mb-2" />
      <input v-model="password" type="password" placeholder="Password" class="input w-full mb-2" />
      <Button type="submit">Login</Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
const email = ref('')
const password = ref('')
const submit = () => { console.log('login', email.value, password.value) }
</script>
