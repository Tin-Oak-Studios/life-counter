<script lang="ts" setup>
import { useLifeStore } from '@lifecounter/stores/LifeStore'
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const props = defineProps({
  storeId: String
})
const lifeStore = useLifeStore(props.storeId || 'life')
</script>

<template>
  <!-- Digits -->
  <div class="grid w-3/4 grid-cols-3">
    <div v-for="digit of digits" class="text-center last:col-span-3">
      <button
        @click="() => lifeStore.digit(digit)"
        class="radial h-24 w-24 justify-center rounded-full bg-red-500 text-2xl shadow-black transition delay-75 ease-in-out text-shadow hover:bg-gray-800 lg:text-4xl"
      >
        {{ digit }}
      </button>
    </div>
  </div>
</template>
