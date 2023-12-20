<script lang="ts" setup>
import LifeDigits from '@lifecounter/components/LifeCalculator/LifeDigits.vue'
import LifeDisplay from '@lifecounter/components/LifeCalculator/LifeDisplay.vue'
import LifeOps from '@lifecounter/components/LifeCalculator/LifeOps.vue'
const props = defineProps({
  storeId: String
})
const storeId = props.storeId || 'life'

const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)
const single = true
</script>

<template>
  <div class="h-full w-full">
    <div v-if="isMobile && single" class="h-full w-full">
      <LifeDisplay :store-id="storeId" />
      <div class="flex h-3/4 w-full flex-grow flex-row gap-2">
        <LifeOps :store-id="storeId" />
        <LifeDigits :store-id="storeId" />
      </div>
    </div>
    <div v-else="isMobile">
      <LifeDisplay :store-id="storeId" />
      <div class="flex flex-row gap-2">
        <LifeOps :store-id="storeId" />
        <LifeDigits :store-id="storeId" />
      </div>
    </div>
    <div v-else>
      <LifeDisplay :store-id="storeId" />
      <div class="flex flex-row gap-2">
        <LifeOps :store-id="storeId" />
        <LifeDigits :store-id="storeId" />
      </div>
    </div>
  </div>
</template>
