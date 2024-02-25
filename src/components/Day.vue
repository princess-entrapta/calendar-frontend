<script setup lang="ts">
import { useWeekStore } from '@/stores/week';
import { computed } from 'vue';
const props = defineProps({
  day: Date, dayname: String
})

const store = useWeekStore()
const isToday = computed(() => store.currentDay.getDate() == props.day.getDate() && store.currentDay.getMonth() == props.day.getMonth())
</script>

<template>
  <div :class="'day ' + (isToday ? 'today' : '')">
    <div> {{ dayname + ' ' + props.day.toLocaleDateString() }}</div>
  </div>
</template>

<style scoped>
.day {
  border: 1px solid rgba(255, 200, 150, 0.3);
  display: flex;
}

@media (min-width: 1200px) {
  .day {
    flex-direction: column;
  }

}

.today {
  background-color: rgba(150, 200, 120, 0.12);
}
</style>
