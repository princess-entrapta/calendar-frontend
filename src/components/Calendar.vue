<script setup lang="ts">
import Week from './Week.vue';
import { useWeekStore } from '@/stores/week';
const store = useWeekStore()

</script>

<template>
  <div class="calendar">
    <button @click="store.up">prev week</button>
    <Week></Week>
    <button @click="store.down">next week</button>
  </div>
</template>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  border: 1px solid rgba(255, 200, 150, 0.8);
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  width: 300px;
  height: 40px;
  color: white;
}
</style>
