let abas = []

abas.forEach(aba => {

  const button = document.querySelector(`#${aba}-button`);
  const goBackButton = document.getElementById(`${aba}-go-back-button`);

  button.addEventListener("click", showContent);
  goBackButton.addEventListener("click", hideContent);

  function showContent() {
    document.getElementById(`${aba}-content`).classList.add("show"); 
    document.getElementById(`${aba}-content`).classList.remove("hide");
  }

  function hideContent() {
    document.getElementById(`${aba}-content`).classList.remove("show"); 
    document.getElementById(`${aba}-content`).classList.add("hide");
  }

})
