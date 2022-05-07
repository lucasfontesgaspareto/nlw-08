import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nlw-return-impulse-production-e49e.up.railway.app'
})