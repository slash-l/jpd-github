<template>
  <div class="container">
    <div class="card">
      <span class="env-badge" :class="envClass">{{ env.toUpperCase() }}</span>
      <h1>Vue Demo App</h1>
      <p class="api">API: {{ apiBase }}</p>
      <p class="time">Build Mode: {{ env }}</p>
      <div class="counter">
        <button @click="count--">－</button>
        <span>{{ count }}</span>
        <button @click="count++">＋</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const env = import.meta.env.MODE
const apiBase = import.meta.env.VITE_API_BASE || 'N/A'
const count = ref(0)

const envClass = computed(() => ({
  'badge-dev': env === 'dev',
  'badge-staging': env === 'staging',
  'badge-prod': env === 'prod',
}))
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; background: #f0f2f5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.container { display: flex; justify-content: center; align-items: center; width: 100%; }
.card { background: white; padding: 48px 56px; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); text-align: center; min-width: 320px; }
.env-badge { display: inline-block; padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: bold; color: white; margin-bottom: 20px; }
.badge-dev { background: #1890ff; }
.badge-staging { background: #faad14; }
.badge-prod { background: #52c41a; }
h1 { font-size: 28px; color: #222; margin-bottom: 12px; }
.api, .time { color: #888; font-size: 14px; margin-bottom: 6px; }
.counter { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 28px; }
.counter button { width: 36px; height: 36px; border: 2px solid #1890ff; background: white; color: #1890ff; border-radius: 50%; font-size: 18px; cursor: pointer; transition: all .2s; }
.counter button:hover { background: #1890ff; color: white; }
.counter span { font-size: 28px; font-weight: bold; color: #333; min-width: 40px; }
</style>
