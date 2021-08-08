function submeter() {

  const editables = ["name", "subtitle", "slogan"];

  editables.forEach(editable => {
    var valor = document.getElementById(editable).textContent
    document.getElementById(editable).contentEditable = false;
    console.log(`${editable}: ${valor}`);
  });

}

function insertSM (params) {
  
  var nomeClasse = params.children[0].className;
  var redeSocial = nomeClasse.baseVal.replace("feather feather-","");
  document.getElementById("form-user-sm").style.display = "inline-block";
  
  switch (redeSocial) {
    case "instagram":
    console.log("ENTROU!");
    document.getElementById("label-url-sm").textContent = "https://www.instagram.com/";
    document.getElementById("input-sm").setAttribute("placeholder","User Instagram");
      break;
  
  }

}

function submeteSM() {
  document.getElementById("form-user-sm").style.display = "none";
  var urlSM = document.getElementById("label-url-sm").textContent;
  var user = document.getElementById("input-sm").value;
  var url = urlSM + user;
  console.log(user);

  if (urlSM.includes("instagram")){
    document.getElementById("a-instagram").setAttribute("href", url);
  }

}

/* let abas = []

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
 */