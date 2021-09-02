function submeter() {

  const editables = ["name", "subtitle", "slogan"];

  editables.forEach(editable => {
    var valor = document.getElementById(editable).textContent
    document.getElementById(editable).contentEditable = false;
  });

}

function insertSM (params) {
  
/*   params.previousElementSibling.style = "background-color: #330249;"; */
  params.previousElementSibling.className = "SM-active";
  var nomeClasse = params.previousElementSibling.children[0].className;
  var redeSocial = nomeClasse.baseVal.replace("feather feather-","");

  if (params.className == "im im-angle-down") {
    params.className = "im im-angle-up";
    document.getElementById("form-user-sm").style.display = "inline-block";
    var url;
    var placeHolder = "User " + redeSocial;

    switch (redeSocial) {
      case "instagram":
        url = "https://www.instagram.com/";
        break;
      case "github":
        url = "https://github.com/"
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/"
        break;
      case "youtube":
        url = "https://www.youtube.com/channel/"
        placeHolder = placeHolder.replace("User","Canal");
        break;
    }


    document.getElementById("label-url-sm").textContent = "URL: " + url.replace("https://","");
    document.getElementById("input-sm").setAttribute("placeholder",placeHolder);

  } else {
    params.previousElementSibling.classList.remove("SM-active");
    params.className = "im im-angle-down";
    document.getElementById("form-user-sm").style.display = "none";
  }
  


}

function submeteSM() {
  document.getElementById("form-user-sm").style.display = "none";
  var urlSM = document.getElementById("label-url-sm").textContent.replace("URL: ","");
  var user = document.getElementById("input-sm").value.trim();
  var url = "https://" + urlSM + user;

  document.getElementsByClassName("SM-active")[0].setAttribute("href", url);
  document.getElementsByClassName("im im-angle-up")[0].className = "im im-angle-down";
  document.getElementsByClassName("SM-active")[0].classList.remove("SM-active");
}

/* getImage */
  var input = document.querySelector("#input-profile-image");
  input.addEventListener('change',preview);
  function preview() {
    var fileObject = this.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileObject);
    fileReader.onload = function () {
      var result = fileReader.result;
      var img = document.querySelector('#img-profile');
      img.setAttribute('src',result);
    }
  }

function limparInput(id) {
  document.getElementById(id).value = "";
}

  function embedVideo() {
    var x = document.getElementById("input-video");
    url = x.value;
    //https://www.youtube.com/watch?v=2km2XnGgtBI
    //https://www.youtube.com/embed/2km2XnGgtBI 
    newUrl = url.replace("watch?v=","embed/");
    document.getElementById("iframe-video").setAttribute("src", newUrl);
  }
/* getImage */

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