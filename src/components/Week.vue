<script setup lang="ts">
import Day from './Day.vue';
import { useWeekStore } from '../stores/week'
import { computed } from 'vue'

const store = useWeekStore()

</script>

<template>
  <div class="flexdiv">
    <Day v-for="(dayname, i) in ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']"
      :dayname="dayname" :day="store.days[i]"></Day>
  </div>
</template>

<style>
@media (max-width: 1200px) {
  .flexdiv {
    flex-direction: column;

  }

  .flexdiv div {
    width: 84vw;
    height: 12vh;
  }
}


@media (min-width: 1200px) {
  .flexdiv {
    flex-direction: row;
  }

  .flexdiv div {
    width: 12vw;
    height: 25vh;
  }
}

.flexdiv {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: calc(8vw - 7px);
}
</style>
