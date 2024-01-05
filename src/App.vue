<template>
  <div class="flex flex-col">
    <VoipPanel v-if="isVoipPanelOpen" />

    <button
      v-if="!isVoipPanelOpen"
      class="absolute left-4 top-1/2 w-auto rounded-full bg-emerald-700 p-3 font-bold leading-5 text-white transition-all hover:bg-emerald-600"
      @click.prevent="isVoipPanelOpen = !isVoipPanelOpen"
    >
      <PhPhone weight="fill" size="2rem" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { PhPhone } from "@phosphor-icons/vue";
import { defineAsyncComponent } from "vue";
import useCallStore from "~/store/useCallStore";
import { storeToRefs } from "pinia";

const VoipPanel = defineAsyncComponent(() => import("~/components/VoipPanel/VoipPanel.vue"));

const callStore = useCallStore();
const { isVoipPanelOpen } = storeToRefs(callStore);
</script>
