import { openPage } from "./router.js";
import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { _timer } from "./timer.js";
import { dateCalcPageBtn, dateCalcResult, timerPageBtn } from "./constants.js";

export function handleSwitchPage(event) {
  switch (event.target.id) {
    case "datecalc_page_btn":
      openPage("DateCalcPage", dateCalcPageBtn, "green");
      break;
    case "timer_page_btn":
      openPage("TimerPage", timerPageBtn, "blue");
      break;
  }
}

export function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
}

export function handleTimerControl(event) {
  const timer = new _timer();
  const timeControl = document.querySelector('input[type="time"]');
  switch (event.target.id) {
    case "timer_start":
      timer.start(1000, timeControl.value);
      break;
    case "timer_stop":
      timer.stop();
      break;
    case "timer_reset":
      timer.reset(0);
      break;
  }
}
