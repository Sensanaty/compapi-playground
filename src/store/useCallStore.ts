import { defineStore } from "pinia";
import { ref } from "vue";

export type VoipTab = "dial" | "history" | "settings" | "";

const useCallStore = defineStore("call", () => {
  const activeVoipTab = ref<VoipTab>("dial");
  const isVoipPanelOpen = ref(false);

  function switchVoipTab(tab: VoipTab) {
    activeVoipTab.value = tab;
  }

  const calleeNumber = ref("");
  const isCalling = ref(false);

  return {
    // State - VoipPanel
    activeVoipTab,
    isVoipPanelOpen,

    // State - Calling
    calleeNumber,
    isCalling,

    // Methods - VoipPanel
    switchVoipTab,
  };
});

export default useCallStore;
