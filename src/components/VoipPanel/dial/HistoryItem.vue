<template>
  <div class="card grid w-full gap-x-2 border-y border-gray-500/50 px-4 py-1.5 first:border-t-2 last:border-b-0">
    <div class="flex max-w-full flex-col">
      <p class="truncate">Number: {{ item.number }}</p>
      <p class="truncate">Date: {{ date }}</p>
      <pre class="truncate">Duration: {{ convertDuration(item.duration) }}</pre>
    </div>

    <div class="ml-auto flex flex-col">
      <button
        class="rounded-full p-0.5 transition-colors hover:text-green-600 active:text-green-400 disabled:cursor-not-allowed disabled:text-neutral-500"
        :disabled="isCalling"
        @click.prevent="callItem(item.number)"
      >
        <PhPhone size="1.35rem" weight="fill" />
      </button>

      <button
        class="mt-auto rounded-full p-0.5 transition-colors hover:text-red-600 active:text-red-400"
        @click.prevent="removeHistoryEntry(item.id)"
      >
        <PhTrash size="1.35rem" weight="fill" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhPhone, PhTrash } from "@phosphor-icons/vue";
import useCallStore from "~/store/useCallStore";
import { intervalToDuration, format } from "date-fns";

import type { HistoryEntry } from "~/store/useCallStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const props = defineProps<{ item: HistoryEntry }>();

function convertDuration(duration: number): string {
  const convertedInterval = intervalToDuration({ start: 0, end: duration });

  const hours = convertedInterval.hours ? String(convertedInterval.hours).padStart(2, "0") : "00";
  const minutes = convertedInterval.minutes ? String(convertedInterval.minutes).padStart(2, "0") : "00";
  const seconds = convertedInterval.seconds ? String(convertedInterval?.seconds).padStart(2, "0") : "00";

  return `${hours}:${minutes}:${seconds}`;
};

const date = computed(() => format(props.item.date, "MM/dd/yyyy"));

const callStore = useCallStore();
const { isCalling, activeVoipTab } = storeToRefs(callStore);
const { removeHistoryEntry, initiateCall } = callStore;

function callItem(number: HistoryEntry["number"]) {
  activeVoipTab.value = "dial";
  initiateCall(number);
}
</script>

<style scoped>
.card {
  grid-template-columns: minmax(0, 6fr) 1fr;
}
</style>
