<script lang="ts" setup>
import { useLifeStore } from '@lifecounter/stores/LifeStore'

const props = defineProps({
  storeId: String
})
const lifeStore = useLifeStore(props.storeId || 'life')
</script>

<template>
  <div
    class="border-primary flex w-1/4 flex-grow flex-col justify-between rounded-lg border-2 bg-gray-800 text-4xl"
  >
    <div class="flex flex-col gap-y-12">
      <button @click="lifeStore.clear" class="">C</button>
      <button @click="lifeStore.plus" class="">+</button>
      <button @click="lifeStore.minus" class="">-</button>
    </div>

    <button @click="lifeStore.equals" class="bg-primary bg-opacity-20">=</button>
  </div>
</template>
