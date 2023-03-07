import {
  dateCalcForm,
  timerStartBtn,
  timerStopBtn,
  timerResetBtn,
} from "./constants.js";
import { handleCalcDates, handleTimerControl } from "./handlers.js";

dateCalcForm.addEventListener("submit", handleCalcDates);
timerStartBtn.addEventListener("click", handleTimerControl);
timerStopBtn.addEventListener("click", handleTimerControl);
timerResetBtn.addEventListener("click", handleTimerControl);
