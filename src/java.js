const btn = document.querySelector(".btn");
btn.addEventListener("click", sendText);
function sendText() {
  const currenrTExt = document.getElementById("bio").value;
  localStorage.setItem("currentLesson", currenrTExt);
  document.querySelector(".text_for").innerHTML = currenrTExt;
}
function initialText() {
  document.querySelector(".text_for").innerHTML =
    localStorage.getItem("currentLesson");
}
initialText();
