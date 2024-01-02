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

  function initiateCall(number?: string) {
    if (isCalling.value) return;

    if (!number && !calleeNumber.value) {
      console.error("Please enter a valid number first");
      return;
    }

    if (number) {
      console.log(`Calling ${number}`);
    } else {
      console.log(`Calling ${calleeNumber.value}`);
    }

    isCalling.value = true;
  }

  const endCall = () => (isCalling.value = false);

  return {
    // State - VoipPanel
    activeVoipTab,
    isVoipPanelOpen,

    // State - Calling
    calleeNumber,
    isCalling,

    // Methods - VoipPanel
    switchVoipTab,

    // Methods - Calling
    initiateCall,
    endCall,
  };
});

export default useCallStore;
