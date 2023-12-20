<script lang="ts" setup>
import LifeCalculator from '../components/LifeCalculator/LifeCalculator.vue'
import TurnManager from '../components/TurnManager.vue'
</script>

<template>
  <div class="h-screen w-screen overflow-hidden bg-black font-lemon text-white">
    <TurnManager />
    <LifeCalculator />
  </div>
</template>
