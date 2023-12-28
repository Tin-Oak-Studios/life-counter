<script lang="ts" setup>
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'
import { useTurnStore } from '@/modules/life-counter/stores/TurnStore'

const turnStore = useTurnStore()
</script>

<template>
  <h2>Turno</h2>
  <div class="flex gap-8 text-white">
    <button v-if="turnStore.turn !== 1" @click="turnStore.dec" class="w-6">
      <MinusIcon />
    </button>
    <div v-else class="w-6" />
    <p>{{ turnStore.turn }}</p>
    <button @click="turnStore.inc" class="w-6">
      <PlusIcon />
    </button>
  </div>

  <h2>Energia</h2>
  <div class="glow light">
    <div
      class="radial flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-400 text-center text-2xl font-bold shadow-sm shadow-blue-900 md:h-40 md:w-40"
    >
      <p class="absolute text-4xl shadow-blue-900 text-shadow md:text-6xl">{{ turnStore.mana }}</p>
      <img class="object-fill" src="@/assets/images/lifecounter/energia.png" alt="Energia" />
    </div>
  </div>
</template>
