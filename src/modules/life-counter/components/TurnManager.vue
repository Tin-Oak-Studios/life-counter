<script lang="ts" setup>
import { useTurnStore } from '@/modules/life-counter/stores/TurnStore'

const turnStore = useTurnStore()
</script>

<template>
  <h2>Turno</h2>
  <div class="flex gap-8">
    <button @click="turnStore.dec">-</button>
    <p>{{ turnStore.turn }}</p>
    <button @click="turnStore.inc">+</button>
  </div>

  <h2>Mana</h2>
  <p>{{ turnStore.mana }}</p>
</template>
