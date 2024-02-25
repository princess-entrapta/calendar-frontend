import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useWeekStore = defineStore('week', () => {

  const currentDay = new Date(Date.now())
  const currentDow = (currentDay.getDay() + 6) % 7
  let weekStart = ref(new Date(Date.now() - currentDow * 24 * 3600000))
  let events: any = []
  getCalendarEvents()
  const days = computed(() => [0, 1, 2, 3, 4, 5, 6].map((i) => new Date(weekStart.value.getTime() + i * 24 * 3600000)))

  function getCalendarEvents() {
    events = []
    fetch(`/api/event-week-list/${weekStart.value.getFullYear()}/${weekStart.value.getMonth() + 1}/${weekStart.value.getDate()}`).then((resp) => resp.json().then((lst) => events = lst))
  }

  function up() {
    weekStart.value = new Date(weekStart.value.getTime() - 7 * 24 * 3600000)
    getCalendarEvents()
  }

  function down() {
    weekStart.value = new Date(weekStart.value.getTime() + 7 * 24 * 3600000)
    getCalendarEvents()
  }

  return { currentDay, weekStart, days, events, up, down }
})
