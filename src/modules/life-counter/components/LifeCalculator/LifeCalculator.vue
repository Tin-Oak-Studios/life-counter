<script lang="ts" setup>
import LifeDigits from '@lifecounter/components/LifeCalculator/LifeDigits.vue'
import LifeDisplay from '@lifecounter/components/LifeCalculator/LifeDisplay.vue'
import LifeOps from '@lifecounter/components/LifeCalculator/LifeOps.vue'
const props = defineProps({
  storeId: String
})
const storeId = props.storeId || 'life'

const single = true
</script>

<template>
  <div class="flex h-full w-full flex-col items-center bg-yellow-500">
    <LifeDisplay :store-id="storeId" />
    <div class="flex w-full flex-row gap-2">
      <LifeOps :store-id="storeId" />
      <LifeDigits :store-id="storeId" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
