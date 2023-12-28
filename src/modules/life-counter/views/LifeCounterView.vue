<script lang="ts" setup>
import LifeCalculator from '../components/LifeCalculator/LifeCalculator.vue'
import TurnManager from '../components/TurnManager.vue'

const single = true
</script>

<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden bg-black font-lemon text-white">
    <div v-if="single" class="flex w-full flex-col items-center bg-yellow-500">
      <TurnManager />
      <LifeCalculator store-id="life-2" />
    </div>
    <div v-else>
      <div class="rotate-180">
        <LifeCalculator store-id="life-1" />
      </div>
      <TurnManager />
      <LifeCalculator store-id="life-2" />
    </div>
  </div>
</template>
