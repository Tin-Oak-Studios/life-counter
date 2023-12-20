<script lang="ts" setup>
import { useLifeStore } from '@lifecounter/stores/LifeStore'

const props = defineProps({
  storeId: String
})
const lifeStore = useLifeStore(props.storeId || 'life')

console.log(props.storeId)
</script>

<template>
  <div class="text-center text-6xl">
    {{ lifeStore.displayValue }}
  </div>
</template>
