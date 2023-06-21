const $toggleElement = document.querySelector("#menu-toggle");
const $accourdionLabels = document.querySelectorAll(".accordion-label");
const $accourdionIconWrap = document.querySelector(".accordion-icon-wrap");
const $accourdionPanels = document.querySelectorAll(".accourdion-panel");

const $main = document.querySelector(".main");
const $accourdionIcons = document.querySelectorAll(".accourdion-icon");

$main.addEventListener("click", () => {
  $toggleElement.checked = !$toggleElement;
});

for (let i = 0; i < $accourdionLabels.length; i++) {
  $accourdionLabels[i].addEventListener("click", function () {
    const $accourdionPanel = $accourdionPanels[i];
    const $accourdionIcon = $accourdionIcons[i];
    const panelStyle = $accourdionPanel.style.height;

    const panelOpen = !!panelStyle && panelStyle !== "0px";

    if (panelOpen) {
      $accourdionPanel.style.height = 0;
      $accourdionIcon.style.transform = "none";
    } else {
      $accourdionPanel.style.height = $accourdionPanel.scrollHeight + "px";
      $accourdionIcon.style.transform = "rotate(180deg)";
    }
  });
}
