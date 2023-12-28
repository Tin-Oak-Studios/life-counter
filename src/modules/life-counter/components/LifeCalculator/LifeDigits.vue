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
  <div class="grid h-3/4 w-5/6 grid-cols-3">
    <div v-for="digit of digits" class="flex justify-center text-center last:col-span-3">
      <button
        @click="() => lifeStore.digit(digit)"
        class="radial border-primary h-20 w-20 rounded-full border-2 text-center text-4xl shadow-black transition delay-75 ease-in-out text-shadow hover:bg-gray-800 md:h-[95%] md:w-[95%] lg:text-4xl"
      >
        {{ digit }}
      </button>
    </div>
  </div>
</template>

<style></style>
