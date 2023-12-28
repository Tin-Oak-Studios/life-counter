<script lang="ts" setup>
import { useLifeStore } from '@lifecounter/stores/LifeStore'

const props = defineProps({
  storeId: String
})
const lifeStore = useLifeStore(props.storeId || 'life')
</script>

<template>
  <div class="border-primary w-3/4 rounded-lg border-2 bg-gray-800 text-center text-6xl">
    <span class="text-white">{{ lifeStore.life }}</span>
    <span class="text-white">{{ lifeStore.displayOperation }}</span>
    <span class="text-white">{{ lifeStore.displayValue }}</span>
  </div>
</template>
