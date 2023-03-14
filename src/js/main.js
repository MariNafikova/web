// import "../index.html";
import "../css/style.css";
import { handleCalcDates, handleTimerControl } from "./handlers.js";
import {
  dateCalcForm,
  timerStartBtn,
  timerStopBtn,
  timerResetBtn,
} from "./constants.js";

dateCalcForm.addEventListener("submit", handleCalcDates);
timerStartBtn.addEventListener("click", handleTimerControl);
timerStopBtn.addEventListener("click", handleTimerControl);
timerResetBtn.addEventListener("click", handleTimerControl);
