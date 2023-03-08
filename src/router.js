import { dateCalcPageBtn, timerPageBtn } from "./constants.js";
import { handleSwitchPage } from "./handlers.js";

dateCalcPageBtn.addEventListener("click", handleSwitchPage);
timerPageBtn.addEventListener("click", handleSwitchPage);
dateCalcPageBtn.click();
export function openPage(pageName, elmnt, color) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
