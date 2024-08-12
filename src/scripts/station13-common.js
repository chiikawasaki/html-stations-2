const check = document.getElementById("check"); /*checkの情報を取得*/
check.checked = false;
check.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor() {
  if (check.checked) {
    document.getElementById("text").style.backgroundColor = "red";
  } else {
    document.getElementById("text").style.backgroundColor = "transparent";
  }
}
