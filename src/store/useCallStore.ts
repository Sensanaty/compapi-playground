import { defineStore } from "pinia";
import { computed, ref } from "vue";

export type VoipTab = "dial" | "history" | "";

export type HistoryEntry = {
  id: number;
  number: string;
  // The duration of a call as difference between 2 UNIX timestamps in milliseconds
  duration: number;
  date: Date;
};

const useCallStore = defineStore("call", () => {
  const activeVoipTab = ref<VoipTab>("dial");
  const isVoipPanelOpen = ref(false);

  function switchVoipTab(tab: VoipTab) {
    activeVoipTab.value = tab;
  }

  const calleeNumber = ref("");
  const isCalling = ref(false);

  let callInitTimestamp: number = 0;

  function initiateCall(number?: string) {
    if (isCalling.value) return;

    if (!number && !calleeNumber.value) {
      console.error("Please enter a valid number first");
      return;
    }

    if (number) {
      console.log(`Calling ${number}`);
      if (!calleeNumber.value) calleeNumber.value = number;
    } else {
      console.log(`Calling ${calleeNumber.value}`);
    }

    isCalling.value = true;
    callInitTimestamp = Date.now();
  }

  const endCall = () => {
    isCalling.value = false;
    addHistoryEntry(calleeNumber.value, Date.now() - callInitTimestamp);
    callInitTimestamp = 0;
  };

  const callHistory = ref<HistoryEntry[]>([]);
  const reversedHistory = computed(() => callHistory.value.reverse());

  function addHistoryEntry(number: string, duration: number) {
    callHistory.value.push({
      id: callHistory?.value[callHistory?.value?.length - 1]?.id + 1 || 0,
      duration: duration,
      date: new Date(),
      number: number,
    });
  }

  function removeHistoryEntry(historyId: HistoryEntry["id"]) {
    const index = callHistory.value.findIndex(({ id }) => id === historyId);

    if (index !== -1) {
      callHistory.value.splice(index, 1);
    }
  }

  const clearAllHistory = () => (callHistory.value = []);

  return {
    // State - VoipPanel
    activeVoipTab,
    isVoipPanelOpen,

    // State - Calling
    calleeNumber,
    isCalling,

    // State - Call History
    callHistory,
    reversedHistory,
    callInitTimestamp,

    // Methods - VoipPanel
    switchVoipTab,

    // Methods - Calling
    initiateCall,
    endCall,

    // Methods - Call History
    addHistoryEntry,
    removeHistoryEntry,
    clearAllHistory,
  };
});

export default useCallStore;
