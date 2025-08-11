import http from './httpClient'

export const productsApi = {
  async list() { const r = await http.get('/products'); return r.data }
}
