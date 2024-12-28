function toggleFullscreen() {
  const element = document.documentElement;
  const button = document.getElementById("fullscreenToggle");

  if (!document.fullscreenElement) {
    element.requestFullscreen();
    button.innerHTML = "&#x1F533;";
    button.title = "Normal Screen";
    button.classList.add("normal");
  } else {
    document.exitFullscreen();
    button.innerHTML = "&#x1F532;";
    button.title = "Normal Screen";
    button.classList.remove("normal");
  }
}