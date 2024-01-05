<template>
  <div
    class="absolute left-8 top-1/4 flex h-[550px] w-[350px] flex-col rounded-md border border-gray-500/50 bg-stone-950 shadow shadow-black"
  >
    <TabSwitcher />

    <DialPad v-if="activeVoipTab === 'dial'" />
    <CallHistory v-if="activeVoipTab === 'history'" />
    <VoipSettings v-if="activeVoipTab === 'settings'" />
  </div>
</template>

<script setup lang="ts">
import useCallStore from "~/store/useCallStore";
import { storeToRefs } from "pinia";
import DialPad from "~/components/VoipPanel/dial/DialPad.vue";
import CallHistory from "~/components/VoipPanel/dial/CallHistory.vue";
import VoipSettings from "~/components/VoipPanel/dial/VoipSettings.vue";
import TabSwitcher from "~/components/VoipPanel/TabSwitcher.vue";

const callStore = useCallStore();

const { activeVoipTab } = storeToRefs(callStore);
</script>
