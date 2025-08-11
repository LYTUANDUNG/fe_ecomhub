import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)

  function setUser(u) { user.value = u }
  function setToken(t) { token.value = t }
  function logout() { user.value = null; token.value = null }

  return { user, token, setUser, setToken, logout }
})
