<script lang="ts" setup>
import { useLifeStore } from '@lifecounter/stores/LifeStore'

const props = defineProps({
  storeId: String
})
const lifeStore = useLifeStore(props.storeId || 'life')
</script>

<template>
  <div class="flex w-1/4 flex-col gap-4 gap-y-8 text-4xl">
    <button @click="lifeStore.clear" class="">C</button>
    <button @click="lifeStore.plus" class="">+</button>
    <button @click="lifeStore.minus" class="">-</button>
    <button @click="lifeStore.equals" class="">=</button>
  </div>
</template>
